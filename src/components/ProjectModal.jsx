import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    // Main overlay
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className="bg-[#181818] text-white rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-red-500"
          >
            &times;
          </button>
        </div>

        {/* Project Content */}
        <div className="space-y-6">
          {/* Image */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-72 object-cover rounded-lg"
          />

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          <hr className="border-gray-700" />

          {/* --- Technologies Used --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 rounded-md px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-700" />

          {/* --- Links --- */}
          <div className="flex space-x-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 bg-opacity-70 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
