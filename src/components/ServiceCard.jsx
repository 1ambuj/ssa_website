import React from "react";

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll zoom-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-center mb-5">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#55b848]">
          {/* Clone the icon and override its color/size */}
          {React.cloneElement(icon, { className: "w-8 h-8", color: "#fff" })}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#145886] mb-2 text-center">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

