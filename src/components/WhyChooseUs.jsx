import React, { useEffect, useRef } from "react";

const whyChooseUsData = [
  {
    title: "Chartered Expertise with Strategic Insight",
    desc: "With over a decade of professional experience, our Chartered Accountants deliver actionable solutions grounded in regulatory expertise and business strategy. We go beyond compliance to unlock long-term value for our clients.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Our 6S Model—Scan, Study, Strategize, Structure, Support, and Sustain—ensures that every engagement is customized, scalable, and built for long-term success. We not only deliver solutions but also embed them into your organization for sustainable growth.",
  },
  {
    title: "Comprehensive Range of Professional Services",
    desc: "From Audit & Assurance to International Tax, Legal Process Outsourcing, and Business Process Outsourcing, we offer a holistic suite of services under one roof—reducing your vendor dependency and increasing execution efficiency.",
  },
  {
    title: "International Experience & Local Compliance Strength",
    desc: "We have supported Indian and international clients in setting up and expanding businesses across geographies. Our deep knowledge of FEMA, RBI, MCA, GST, and Taxation Laws makes us a reliable partner for cross-border business activities.",
  },
  {
    title: "People-Centric & Confidential",
    desc: "We anticipate challenges and opportunities, providing timely advice to keep you ahead. Our people-first culture ensures a committed and motivated team serving your needs. We adhere to the highest standards of data confidentiality, compliance protocols, and ethical practice in all engagements.",
  },
  {
    title: "Technology-Driven Delivery",
    desc: "Leveraging digital tools, MIS reporting, cloud-based systems, and compliance dashboards, we ensure transparency, efficiency, and real-time visibility across financial functions.",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={containerRef}
      className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll fade-in-up">
          <span className="font-bold text-[#f37920] uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#145886] font-[Montserrat]">
            Trusted Expertise, Measurable Results
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            We combine deep domain knowledge with practical strategies to help your business stay compliant and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whyChooseUsData.map((item, idx) => (
            <div
              key={item.title}
              className="animate-on-scroll fade-in-up bg-white border-[#145886] rounded-xl p-6 shadow-sm min-h-[180px] flex flex-col justify-center transition-colors duration-300 group hover:bg-[#145886]"
            >
              <h3 className="text-lg font-semibold text-[#145886] mb-2 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 transition-colors duration-300 group-hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;