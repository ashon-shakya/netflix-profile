// src/components/ProjectRow.jsx

import React from "react";
import ProjectCard from "./ProjectCard";
import ShinyText from "./ShinyText/ShinyText";

const ProjectRow = ({ title, projects, id, handleMoreInfoClick, type }) => {
  return (
    <div className="mb-8" id={id}>
      <h2
        className="text-2xl font-bold mb-4 
          bg-gradient-to-r from-gray-300 via-white to-gray-300 
          bg-[length:200%_auto] 
          bg-clip-text text-transparent 
          animate-shimmer pl-4 border-s-8 border-red-500"
      >
        {title}
      </h2>

      <div className="flex overflow-x-auto space-x-10 pb-4">
        {projects.map((project) => (
          <ProjectCard
            key={`${type}-${project.id}`}
            project={project}
            handleMoreInfoClick={handleMoreInfoClick}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectRow;
