import React from "react";
import ServiceCard from "./ServiceCard";
import {
  ShieldCheck,
  ReceiptText,
  BarChart3,
  IndianRupee,
  Globe2,
  Workflow,
} from "lucide-react";

const Services = () => {
  // Add a "link" property for each service
  const services = [
    {
      title: "Audit & Assurance",
      description:
        "We offer a complete range of Audit & Assurance services, we do the audit work strictly in accordance with applicable Statute for the satisfaction of Investors",
      icon: <ShieldCheck className="h-8 w-8 text-[#145886]" />,
      delay: "0s",
      link: "/services/audit",
    },
    {
      title: "Advisory & Consulting",
      description:
        "Help our clients to take better decision, Reduce cost, best legal framework, back office Performance Improvement, business Restructuring",
      icon: <BarChart3 className="h-8 w-8 text-[#145886]" />,
      delay: "0.2s",
      link: "/services/advisory",
    },
    {
      title: "Taxation Services",
      description:
        "Our team has wide range of experience in the field of Indian direct and indirect taxes. We help in tax compliances for all level of business.",
      icon: <ReceiptText className="h-8 w-8 text-[#145886]" />,
      delay: "0.1s",
      link: "/services/taxation",
    },
    {
      title: "Goods & Service Tax (GST)",
      description:
        "We offer Knowledge-Driven approach and work with a broad client base across sectors including manufacturing, Travel, IT & ITES, Media & Entertainments etc.",
      icon: <IndianRupee className="h-8 w-8 text-[#145886]" />,
      delay: "0.3s",
      link: "/services/gst",
    },
    {
      title: "Non-Resident Services",
      description:
        "Specialized support for NRIs and foreign entities in taxation, compliance, investment structuring, and regulatory matters in India.",
      icon: <Globe2 className="h-8 w-8 text-[#145886]" />,
      delay: "0.4s",
      link: "/services/nri",
    },
    {
      title: "Business Process Outsourcing",
      description:
        "Streamline your operations with efficient and cost-effective outsourcing solutions for accounting, payroll, and compliance.",
      icon: <Workflow className="h-8 w-8 text-[#145886]" />,
      delay: "0.5s",
      link: "/services/bpo",
    },
  ];

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
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
