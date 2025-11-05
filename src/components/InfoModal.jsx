// src/components/InfoModal.jsx

import React from "react";

const InfoModal = ({ isOpen, onClose, type = "", data }) => {
  if (!isOpen) return null;

  if (type === "contact") {
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
            <h2 className="text-3xl font-bold">About Me</h2>
            <button
              onClick={onClose}
              className="text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">{data.summary}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Degree:</strong> {data.degree}
              </div>
              <div>
                <strong>City:</strong> {data.address}
              </div>

              <div>
                <strong>Website:</strong>{" "}
                <a
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  {data.website}
                </a>
              </div>

              <div>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${data.email}`}
                  className="text-red-500 hover:underline"
                >
                  {data.email}
                </a>
              </div>

              <div>
                <strong>Github:</strong>{" "}
                <a
                  href={`${data.socials.github}`}
                  className="text-red-500 hover:underline"
                >
                  {data.socials.github}
                </a>
              </div>

              <div>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={`${data.socials.linkedin}`}
                  className="text-red-500 hover:underline"
                >
                  {data.socials.linkedin}
                </a>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* --- UPDATED SKILLS SECTION --- */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
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

            <p className="text-gray-400 italic text-center">{data.extra}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "project" && data) {
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
            <h2 className="text-3xl font-bold">{data.title}</h2>
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
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-auto max-h-72 object-cover rounded-lg"
            />

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{data.description}</p>

            <hr className="border-gray-700" />

            {/* --- Technologies Used --- */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((skill, index) => (
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
              {data.liveUrl && data.liveUrl !== "#" && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white font-bold py-2 px-6 rounded hover:bg-red-700 transition"
                >
                  Live Demo
                </a>
              )}
              {data.githubUrl && data.githubUrl !== "#" && (
                <a
                  href={data.githubUrl}
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
  }

  if (type === "experience" && data) {
    return (
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
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <button
              onClick={onClose}
              className="text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>
          </div>

          {/* Experience Content */}
          <div className="space-y-6">
            {/* Image */}
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-auto max-h-72 object-cover rounded-lg"
            />

            {/* Job Details */}
            <div className="flex flex-col md:flex-row justify-between md:items-center text-lg">
              <h3 className="text-xl font-semibold text-red-500">
                {data.company}
              </h3>
              <span className="text-gray-400">{data.dates}</span>
            </div>
            <p className="text-gray-400 -mt-4">{data.location}</p>

            <hr className="border-gray-700" />

            {/* Responsibilities */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {data.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* --- Technologies Used --- */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 rounded-md px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Sub-Projects (if they exist) */}
            {data.subProjects && (
              <div className="mt-4">
                <h5 className="text-2xl font-bold mb-4">Key Projects</h5>
                <div className="space-y-3">
                  {data.subProjects.map((sub) => (
                    <div key={sub.id} className="bg-gray-700 p-4 rounded-md">
                      <strong className="text-red-400">{sub.title}:</strong>
                      <p className="text-sm text-gray-300">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default InfoModal;
