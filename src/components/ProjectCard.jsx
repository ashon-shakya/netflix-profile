// src/components/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ project, handleMoreInfoClick, type }) => {
  console.log({ project, type });
  return (
    <>
      <div
        className="relative"
        onClick={() => {
          console.log(project, type);
          handleMoreInfoClick(project, type);
        }}
      >
        <span
          key={project.id}
          className="absolute bottom-0 right-0 inline-block bg-red-700 rounded-t-2xl transform rotate-90 origin-right px-4 py-1 text-xs font-semibold mr-[-12px]"
          style={{}}
        >
          {project.title}
        </span>
        <div className="group relative flex-shrink-0 w-55 hover:w-110 h-72 rounded-lg  cursor-pointer transition-all duration-300 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay for project details */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.company ? (
              <h2 className="text-gray-400">{project.company}</h2>
            ) : (
              ""
            )}
            {project.dates ? (
              <h2 className="text-gray-600 italic">{project.dates}</h2>
            ) : (
              ""
            )}
            <p className="text-sm mt-2">{project.description}</p>
            <div className="mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-700 rounded-full px-4 py-1 text-xs font-semibold mr-2 mb-2"
                >
                  {t}
                </span>
              ))}
            </div>
            {type !== "experience" ? (
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            ) : (
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
