import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

const Services = () => {
  return (
    <section id="services" className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll fade-in-up">
          <span className="font-bold text-[#f37920] uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-[#145886] font-[Montserrat]">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-sm md:text-base mt-3 text-gray-600">
            We offer a full spectrum of financial services designed to ensure
            compliance, minimize risk, and drive growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={`${index * 0.08}s`}
              link={`/services/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
