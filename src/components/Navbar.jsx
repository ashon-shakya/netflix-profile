// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg"; // Add your logo here
import profileIcon from "../assets/profile-icon.jpg"; // Add a profile icon

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3" 
            : "bg-[#050505]/40 backdrop-blur-xs py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img src={logo} alt="Logo" className="h-8 rounded-full border border-white/10" />
            <ul className="hidden md:flex space-x-6 text-sm font-semibold">
              <li className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                <a href="#experiences">Experiences</a>
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                <a href="#featured-projects">Projects</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <img
              src={profileIcon}
              alt="Profile"
              className="h-9 w-9 rounded-full border border-white/15"
            />
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-red-500 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Semi-transparent dark overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Drawer panel */}
          <div className="relative w-64 max-w-xs h-full bg-[#0a0a0c] border-l border-white/10 p-6 flex flex-col z-50 animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <span className="text-red-600 font-bold tracking-widest text-sm uppercase">Navigation</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-red-500 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-lg font-medium">
              <li className="cursor-pointer hover:text-red-500 transition-colors">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              </li>
              <li className="cursor-pointer hover:text-red-500 transition-colors">
                <a href="#experiences" onClick={() => setIsMenuOpen(false)}>Experiences</a>
              </li>
              <li className="cursor-pointer hover:text-red-500 transition-colors">
                <a href="#featured-projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
              </li>
            </ul>
            <div className="mt-auto border-t border-white/5 pt-6 text-center text-xs text-gray-500">
              Ashon Shakya &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
