import React from "react";

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll zoom-in`}
      style={{ animationDelay: delay }}
    >
      <div className="bg-highlight-green text-white w-16 h-16 rounded-full flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-blue mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
