import React from "react";

const ExperienceModal = ({ experience, onClose }) => {
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
          <h2 className="text-3xl font-bold">{experience.title}</h2>
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
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-auto max-h-72 object-cover rounded-lg"
          />

          {/* Job Details */}
          <div className="flex flex-col md:flex-row justify-between md:items-center text-lg">
            <h3 className="text-xl font-semibold text-red-500">
              {experience.company}
            </h3>
            <span className="text-gray-400">{experience.dates}</span>
          </div>
          <p className="text-gray-400 -mt-4">{experience.location}</p>

          <hr className="border-gray-700" />

          {/* Responsibilities */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {experience.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-700" />

          {/* --- Technologies Used --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((skill, index) => (
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
          {experience.subProjects && (
            <div className="mt-4">
              <h5 className="text-2xl font-bold mb-4">Key Projects</h5>
              <div className="space-y-3">
                {experience.subProjects.map((sub) => (
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
};

export default ExperienceModal;
