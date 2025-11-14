import React from "react";

const ContactModal = ({ onClose, contact }) => {
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
          <p className="text-gray-300 leading-relaxed">{contact.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Degree:</strong> {contact.degree}
            </div>
            <div>
              <strong>City:</strong> {contact.address}
            </div>

            <div>
              <strong>Website:</strong>{" "}
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                {contact.website}
              </a>
            </div>

            <div>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-red-500 hover:underline"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <strong>Github:</strong>{" "}
              <a
                href={`${contact.socials.github}`}
                className="text-red-500 hover:underline"
              >
                {contact.socials.github}
              </a>
            </div>

            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={`${contact.socials.linkedin}`}
                className="text-red-500 hover:underline"
              >
                {contact.socials.linkedin}
              </a>
            </div>
          </div>

          <hr className="border-gray-700" />

          {/* --- UPDATED SKILLS SECTION --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {contact.skills.map((skill, index) => (
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

          <p className="text-gray-400 italic text-center">{contact.extra}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
