// src/components/InfoModal.jsx

import React from "react";
import ContactModal from "./ContactModal";
import ProjectModal from "./ProjectModal";
import ExperienceModal from "./ExperienceModal";

const InfoModal = ({ isOpen, onClose, type = "", data }) => {
  if (!isOpen) return null;

  if (type === "contact") {
    return <ContactModal onClose={onClose} contact={data} />;
  }

  if (type === "project" && data) {
    return <ProjectModal onClose={onClose} project={data} />;
  }

  if (type === "experience" && data) {
    return <ExperienceModal onClose={onClose} experience={data} />;
  }
};

export default InfoModal;
