// src/components/Footer.jsx

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = ({ contact }) => {
  return (
    <footer className="border-t border-gray-800 mt-12 py-8 px-4 md:px-16 text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {contact.copyright}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* --- REPLACE WITH YOUR SOCIAL LINKS --- */}

            <a href={contact.socials.linkedin} className="hover:text-white">
              <div className="flex flex-row gap-2 justify-center items-center">
                <FaLinkedin />
                <span className="hover:underline">LinkedIn</span>
              </div>
            </a>
            <a href={contact.socials.github} className="hover:text-white">
              <div className="flex flex-row gap-2 justify-center items-center">
                <FaGithub />
                <span className="hover:underline">GitHub</span>
              </div>
            </a>
            <a href={contact.socials.youtube} className="hover:text-white">
              <div className="flex flex-row gap-2 justify-center items-center">
                <FaYoutube />
                <span className="hover:underline">Youtube</span>
              </div>
            </a>
            <a href={contact.socials.instagram} className="hover:text-white">
              <div className="flex flex-row gap-2 justify-center items-center">
                <FaInstagram />
                <span className="hover:underline">Instagram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
