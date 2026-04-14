// src/App.jsx

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectRow from "./components/ProjectRow";
import Footer from "./components/Footer";
import { contact } from "./assets/data/contact-detail";
import InfoModal from "./components/InfoModal";
import Hyperspeed from "./components/react-bit-components/Hyperspeed";

// css
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState(null);

  const handleMoreInfoClick = (obj, type = "contact") => {
    setModalType(type);
    setModalData(obj);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <Navbar />
      <Hero
        id="home"
        contact={contact}
        handleMoreInfoClick={handleMoreInfoClick}
      />
      <main className="relative pl-4 md:pl-16 py-8">
        {/* Hyperspeed positioned absolutely as a background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="w-[100vw] h-[100vh]">
            <Hyperspeed
              effectOptions={{
                distortion: "turbulentDistortion",
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 3,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [12, 80],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 526344,
                  islandColor: 657930,
                  background: 0,
                  shoulderLines: 1250072,
                  brokenLines: 1250072,
                  leftCars: [14177983, 6770850, 12732332],
                  rightCars: [242627, 941733, 3294549],
                  sticks: 242627,
                },
              }}
            />
          </div>
        </div>

        {/* Foreground content above the hyperspeed background */}
        <div className="relative z-10">
          {/* Add more rows for different categories */}
          <ProjectRow
            title="Work Experience"
            projects={contact.workExperience}
            id="experiences"
            handleMoreInfoClick={handleMoreInfoClick}
            type="experience"
            key="project-experience"
          />
          <ProjectRow
            title="Large Scale Projects"
            projects={contact.largeScaleProject}
            id="large-scale-projects"
            handleMoreInfoClick={handleMoreInfoClick}
            type="project"
            key="project-project"
          />
          <ProjectRow
            title="Featured Projects"
            projects={contact.featuredProjects}
            id="featured-projects"
            handleMoreInfoClick={handleMoreInfoClick}
            type="project"
            key="project-project"
          />
          <ProjectRow
            title="Customer Projects"
            projects={contact.webAppProjects}
            id="web-applications"
            handleMoreInfoClick={handleMoreInfoClick}
            type="project"
            key="project-webapp"
          />
        </div>
      </main>
      <Footer contact={contact} />

      {/* Render the modal component */}
      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        type={modalType}
      />
    </div>
  );
}

export default App;
