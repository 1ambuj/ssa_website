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
      ref={containerRef}
      className="relative py-16 md:py-32 bg-gradient-to-br from-[#ecf3ff] via-[#e6f0fa] to-[#dbeafe] border-t border-b border-gray-100"
    >
      <div className="mb-12 flex flex-col px-6 items-center justify-center gap-4">
        <span className="text-[#f37920] text-xs md:text-sm font-bold uppercase tracking-widest px-4 text-center letter-spacing-wide">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl text-[#145886] leading-tight font-extrabold mb-2 text-center font-[Montserrat]">
          Your Trusted Partner in Financial Excellence
        </h2>
      </div>
      <div className="mx-auto px-6 lg:px-24 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 gap-10 justify-between">
          {/* Left: Modern heading and intro */}
          <div className="w-full md:w-1/2 animate-on-scroll fade-in-up flex flex-col gap-8 justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#145886] mb-2 leading-snug">
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#114e67] to-[#1f9ca7]">
                  Sandeep Singla & Associates
                </span>
              </span>
              <span className="block text-gray-700 font-medium mt-2">
                Over a decade of expertise in Audit & Assurance, Advisory, Taxation, GST, and Legal Consulting.
              </span>
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#1f9ca7] to-[#f37920]" />
            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              We have a proven track record in setting up liaison/project offices, subsidiaries, joint ventures, and other legal entities in India. Our team excels in capital structuring, business strategy, taxation laws, corporate accounts & finance, and statutory compliances—empowering your business to thrive in a dynamic environment.
            </p>
          </div>

          {/* Right: Card with details and modern link */}
          <div className="w-full md:w-1/2 animate-on-scroll fade-in-up mt-8 md:mt-0">
            <div className="bg-white border border-[#e6eef2] rounded-3xl shadow-md p-7 py-12 md:p-12 flex flex-col gap-7">
              <p className="text-base md:text-lg text-gray-700">
                We go beyond traditional audit and taxation, offering innovative solutions including top management consulting and strategic business advisory.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#1f9ca7] text-lg">●</span>
                  <span>Audit & Assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#1f9ca7] text-lg">●</span>
                  <span>Taxation & GST</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#1f9ca7] text-lg">●</span>
                  <span>Mergers & Acquisitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#1f9ca7] text-lg">●</span>
                  <span>Corporate Finance</span>
                </li>
              </ul>
              <div className="pt-2 flex">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-8 py-3 rounded-full
                    bg-gradient-to-r from-[#114e67] to-[#1f9ca7] text-white font-semibold text-base
                    shadow-lg hover:from-white hover:to-white hover:text-[#114e67] hover:border-[#1f9ca7]
                    border-2 border-transparent transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1f9ca7]"
                  style={{
                    boxShadow: "0 6px 32px 0 rgba(31,156,167,0.12)",
                  }}
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

