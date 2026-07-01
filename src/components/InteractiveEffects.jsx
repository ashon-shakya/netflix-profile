// src/components/InteractiveEffects.jsx

import React, { useEffect, useRef, useState } from "react";

const InteractiveEffects = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const canvasRef = useRef(null);

  // Smooth animation coordinate tracking refs
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  // Check if pointer/device is mobile-like or supports touch only
  useEffect(() => {
    const checkDevice = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isCoarse || isTouch || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const mouse = mouseRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn sparks if hovering over an interactive target
      if (isHovered && Math.random() < 0.6) {
        spawnSparks(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Dynamic hover detection
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    // Spawn physics particle sparks
    const spawnSparks = (x, y) => {
      const count = Math.floor(Math.random() * 2) + 1; // 1 to 2 sparks per move
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4.5,
          vy: (Math.random() - 1.2) * 3 - 0.6, // Ascending velocity
          gravity: 0.045,
          friction: 0.98,
          color: pickColor(),
          size: Math.random() * 2.3 + 1.2,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015,
        });
      }
    };

    const pickColor = () => {
      const rand = Math.random();
      if (rand < 0.55) return "#e50914"; // Netflix Red
      if (rand < 0.82) return "#ff9f1c"; // Flame Orange
      return "#ffffff"; // Bright White core
    };

    // 60FPS animation tick
    const tick = () => {
      // 1. Interpolate cursor outer ring position
      const lerpFactor = 0.15;
      ring.x += (mouse.x - ring.x) * lerpFactor;
      ring.y += (mouse.y - ring.y) * lerpFactor;

      // 2. Draw canvas particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw spark circles with subtle aura glows
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isHovered]);

  if (isMobile) return null;

  return (
    <>
      {/* Fullscreen canvas sparks overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        style={{ mixBlendMode: "screen" }}
      />
    </>
  );
};

export default InteractiveEffects;
