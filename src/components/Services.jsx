import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in-up">
          <span className="font-bold text-accent-orange">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mt-2">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg mt-4">
            We offer a full spectrum of financial services designed to ensure
            compliance, minimize risk, and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            delay="0s"
            title="Audit & Assurance"
            description="Independent audits providing clarity and confidence in financial reporting, ensuring compliance and improving internal controls."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <ServiceCard
            delay="0.1s"
            title="Taxation Services"
            description="Strategic tax planning and compliance for businesses and individuals, minimizing liabilities and maximizing benefits."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />

          <ServiceCard
            delay="0.2s"
            title="Advisory & Consulting"
            description="Actionable advice on business growth, mergers & acquisitions, valuation, and financial restructuring."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
