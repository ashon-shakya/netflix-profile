// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg"; // Add your logo here
import profileIcon from "../assets/profile-icon.jpg"; // Add a profile icon

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-transaprent backdrop-blur" : "bg-[#14141480]"
      }`}
    >
      <div className="container mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src={logo} alt="Logo" className="h-8 rounded-full" />
          <ul className="hidden md:flex space-x-4">
            <li className="cursor-pointer hover:text-gray-300">
              {" "}
              <a href="#home"> Home</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              {" "}
              <a href="#experiences"> Experiences</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300">
              {" "}
              <a href="#featured-projects"> Projects</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={profileIcon}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
