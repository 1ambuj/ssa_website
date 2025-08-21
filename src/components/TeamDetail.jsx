import React from "react";

export default function TeamDetail({ member }) {
  if (!member) return null;

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Normalize specialization into an array (handles commas and newlines)
  const parseSpecializations = (spec) => {
    if (!spec) return [];
    if (Array.isArray(spec)) return spec.map((s) => s.trim()).filter(Boolean);
    return spec
      .split(/[,\n]+/)
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter(Boolean);
  };

  const specializations = parseSpecializations(member.specialization);

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-10 mt-6 flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 w-full mt-5">
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#145886] shadow-sm"
            />
          ) : (
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#145886] flex items-center justify-center text-white text-4xl font-bold">
              {initials}
            </div>
          )}
          <div className="mt-4 text-center md:text-left w-full">
            <h1 className="text-2xl font-extrabold text-[#145886]">{member.name}</h1>
            <p className="text-sm text-[#f37920] mt-1">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#145886] font-semibold"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 w-full">
          <div className="prose max-w-none text-gray-700">
            {member.detailBio && (
              <div className="mt-2">
                {/* detailBio may contain newlines; render as paragraphs */}
                {member.detailBio
                  .split(/\n\s*\n/)
                  .map((para, idx) => (
                    <p key={idx} className="mt-2 leading-relaxed text-base">
                      {para.trim()}
                    </p>
                  ))}
              </div>
            )}

            {specializations.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#145886] mb-3">Specializations</h3>
                <ul className="flex flex-wrap gap-2">
                  {specializations.map((s, i) => (
                    <li
                      key={i}
                      className="bg-[#ecf8f6] text-[#0f5b4f] px-3 py-1 rounded-full text-sm border border-[#d6f0ea]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



