// src/components/ExperienceSection.jsx

import React from "react";

const ExperienceSection = ({ title, experiences, id }) => {
  return (
    <div className="mb-8 w-auto pr-4 " id={id}>
      {/* Title (matches ProjectRow styling) */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-gray-800 p-6 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg h-full"
          >
            {/* Card Header */}
            <div className="flex flex-col justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <span className="text-sm text-gray-400 flex-shrink-0 mt-1 md:mt-0">
                {exp.dates}
              </span>
            </div>
            <div className="flex flex-col justify-between mb-4">
              <h4 className="text-lg font-semibold text-red-500">
                {exp.company}
              </h4>
              <span className="text-sm text-gray-400">{exp.location}</span>
            </div>

            {/* Responsibilities List */}
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>

            {/* Sub-Projects (if they exist) */}
            {exp.subProjects && (
              <div className="mt-4">
                <h5 className="text-md font-semibold text-white mb-2">
                  Key Projects:
                </h5>
                <div className="space-y-3">
                  {exp.subProjects.map((sub) => (
                    <div key={sub.id} className="bg-gray-700 p-4 rounded-md">
                      <strong className="text-red-400">{sub.title}:</strong>
                      <p className="text-sm text-gray-300">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
