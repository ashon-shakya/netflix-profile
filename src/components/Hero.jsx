// src/components/Hero.jsx

import React from "react";
import heroBg from "../assets/bg2.jpg";

import { GridScan } from "./GridScan/GridScan";

const Hero = ({ handleMoreInfoClick, contact, id }) => {
  return (
    <div className="relative h-[80vh] text-white" id={id}>
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          opacity: 0.3,
        }}
      >
        <GridScan
          sensitivity={0.8}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.01}
          scanColor="red"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div> */}

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
          A <span className="text-red-600">{contact.name}</span> Original
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          {contact.title} | {contact.motto}.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition">
            ▶ Play Resume
          </button>
          <button
            onClick={() => handleMoreInfoClick(contact, "contact")}
            className="bg-gray-500 bg-opacity-70 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition"
          >
            About Me
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent"></div>
    </div>
  );
};

export default Hero;
