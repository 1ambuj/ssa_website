import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Intersection Observer for scroll animations
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
      id="about"
      className="py-24 md:py-36 bg-gradient-to-br from-white via-blue-50 to-blue-100"
      ref={containerRef}
    >
      
      <div className="container mx-auto px-6">
      <div className="mb-6 flex ">
              <span className="inline-block px-4 py-1 text-[#f37920] font-semibold">
                About Us
              </span>
      </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">

          {/* Left Column: Heading as animated block */}
          <div
            className="w-[70%] animate-on-scroll fade-in-up flex justify-center md:justify-start"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative bg-white/90 backdrop-blur-lg shadow-xl p-10 py-20 md:p-14 rounded-3xl border border-blue-100 transition-all duration-300 hover:shadow-3xl hover:scale-[1.025]">
              <h2 className="text-xl md:text-3xl font-extrabold text-primary-blue text-center md:text-left leading-tight tracking-tight">
              Sandeep Singla & Associates provides specialized services, for over a decade in the area of Audit & Assurance, Advisory, Taxation, Goods & Service Tax and legal consulting.
              </h2>
              
              <div className="absolute -top-6 -left-6 hidden md:block">
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="32" fill="#2563eb" fillOpacity="0.08"/>
                  <circle cx="32" cy="32" r="24" fill="#2563eb" fillOpacity="0.12"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="md:w-1/2 flex flex-col justify-center">
            
            <p className="text-xl leading-relaxed mt-2 text-gray-700 font-medium">
              With a proven track record, our firm excels in establishing liaison/project offices, subsidiaries, joint ventures, and diverse legal entities across India. We bring expertise in Capital Structuring, Business Strategy, Taxation Laws, Corporate Accounts & Finance, and Statutory Compliances.
            </p>
            <p className="text-xl leading-relaxed mt-6 text-gray-700 font-medium ">
              Our commitment to innovation has expanded our services beyond traditional audit and taxation, offering forward-thinking solutions in Top Management Consulting and strategic advisory.
            </p>
            <Link to="/about"> <button className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full 
                            bg-white text-[1.1rem] font-bold text-[#145886] shadow-md
                            hover:bg-transparent hover:text-[#F37920] hover:border-[#F37920] 
                            border-2 border-transparent transition-all duration-300 font-montserrat"

                            >Know more</button></Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;



