// src/components/SkillsSection.jsx

import React from "react";

const SkillsSection = ({ skills, id }) => {
  return (
    <div className="mb-8" id={id}>
      {/* Title styled just like your ProjectRow titles */}
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      {/* Skill tags, with styling taken from InfoModal.jsx */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-200 rounded-md px-3 py-1 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
