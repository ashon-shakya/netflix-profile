// src/App.jsx

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectRow from "./components/ProjectRow";
import Footer from "./components/Footer";
import { contact } from "./assets/data/contact-detail";
import InfoModal from "./components/InfoModal";
import ParticlesBackground from "./components/ParticlesBackground";
import InteractiveEffects from "./components/InteractiveEffects";

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
    <div className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden">
      {/* Interactive Constellation Background */}
      <ParticlesBackground />

      {/* Global custom cursor & sparks canvas */}
      <InteractiveEffects />

      <Navbar />
      <Hero
        id="home"
        contact={contact}
        handleMoreInfoClick={handleMoreInfoClick}
      />
      <main className="relative pl-4 md:pl-16 py-8 z-10">
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
