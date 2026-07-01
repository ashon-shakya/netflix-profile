// src/components/ParticlesBackground.jsx

import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, targetX: null, targetY: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const connectionDist = 110;
    const mouseConnectionDist = 140;
    const repulsionDist = 80;

    // Set particle density based on screen width
    const getParticleCount = () => {
      return window.innerWidth < 768 ? 40 : 100;
    };

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const count = getParticleCount();
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.6 + 0.8; // 0.8 to 2.4 px
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7, // Slow movement
          vy: (Math.random() - 0.5) * 0.7,
          radius,
          color: Math.random() < 0.25 ? "#e50914" : "rgba(255, 255, 255, 0.65)", // Netflix red or semi-white
          isRed: Math.random() < 0.25,
        });
      }
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      mouseRef.current.targetX = null;
      mouseRef.current.targetY = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial sizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      // Smoothly interpolate mouse coordinates for fluid trailing connection
      if (mouse.targetX !== null && mouse.targetY !== null) {
        if (mouse.x === null || mouse.y === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.15;
          mouse.y += (mouse.targetY - mouse.y) * 0.15;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }

      // Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Keep inside bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Interactive mouse repulsion (push particles away gently)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repulsionDist) {
            // Calculate force inversely proportional to distance
            const force = (repulsionDist - dist) / repulsionDist;
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 1.2;
            const pushY = Math.sin(angle) * force * 1.2;

            p.x += pushX;
            p.y += pushY;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        // Subtle glow for red particles
        if (p.isRed) {
          ctx.save();
          ctx.shadowColor = "#e50914";
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.restore();
        } else {
          ctx.fill();
        }
      }

      // Draw Connection Lines between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = 1 - dist / connectionDist;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Reddish line if one of the linked nodes is red, otherwise gray-white
            if (p1.isRed || p2.isRed) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${alpha * 0.16})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.08})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw Connection Lines to Mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDist) {
            const alpha = 1 - dist / mouseConnectionDist;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);

            if (p1.isRed) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${alpha * 0.22})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.12})`;
            }
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent"
    />
  );
};

export default ParticlesBackground;
