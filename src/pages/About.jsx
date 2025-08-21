import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ApproachImg from "../assets/approch.jpeg";
import Vission from "../assets/vission.jpeg";
import teamMembers from "../data/teamMembers";

// Animated Counter component (incrementing from 0 to target)
function AnimatedCounter({ to, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const frame = useRef();

  useEffect(() => {
    let start = 0;
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (to - start) + start);
      setCount(value);
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }

    setCount(0); // Always start from 0
    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Clean number style: semi-bold, dark blue, Montserrat
const modernNumberClass =
  "font-semibold text-[#145886] font-[Montserrat,sans-serif]";

// Helper to get initials from name
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

// Team members are loaded from `src/data/teamMembers.js`

function TeamCarousel() {
  const scrollRef = useRef(null);

  // Scroll by card width (with margin)
  const scrollByCard = (dir = 1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".team-card");
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; // 24px gap-6
    container.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
  };

  // Show/hide arrows based on scroll position
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth - 10
    );
  };

  useEffect(() => {
    updateArrows();
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollByCard(-1)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 hover:bg-[#145886] hover:text-white transition
          ${!canScrollLeft ? "opacity-30 pointer-events-none" : "opacity-100"}`}
        style={{ marginLeft: "-1.5rem" }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scrollByCard(1)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 hover:bg-[#145886] hover:text-white transition
          ${!canScrollRight ? "opacity-30 pointer-events-none" : "opacity-100"}`}
        style={{ marginRight: "-1.5rem" }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-2 hide-scrollbar scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {teamMembers.map((member, idx) => (
          <Link
            key={member.name}
            to={`/team/${member.slug}`}
            className="no-underline"
          >
            <div
              className="team-card flex-shrink-0 w-80 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition p-6 flex flex-col items-center group"
              style={{
                scrollSnapAlign: "center",
                minHeight: "370px",
                maxWidth: "320px",
              }}
            >
              <div className="relative mb-4">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#145886] shadow group-hover:scale-105 transition"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#145886] flex items-center justify-center text-white text-3xl font-bold border-4 border-[#145886] shadow">
                    {getInitials(member.name)}
                  </div>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200 shadow hover:bg-[#f37920] hover:text-white transition"
                  aria-label={`LinkedIn of ${member.name}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
                  </svg>
                </a>
              </div>
              <div className="text-xl font-bold text-[#145886] font-[Montserrat] text-center">
                {member.name}
              </div>
              <div className="text-sm text-[#f37920] font-semibold font-[Montserrat] text-center mt-1">
                {member.role}
              </div>
              <div className="text-gray-600 text-xs mt-3 text-center">{member.bio}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const id = "montserrat-font-link";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero / Intro */}
      <section className="py-20 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full animate-on-scroll fade-in-up">
              <h1 className="text-4xl md:text-5xl font-semibold text-[#145886] leading-tight font-[Montserrat] mb-4">
                About Us
              </h1>
              <div className="inline-block px-3 py-1  bg-[#f37920]/90 mb-4">
                <span className="text-white font-semibold tracking-wide text-xs font-[Montserrat]">Background</span>
              </div>
              <div className="space-y-5">
                <p className="text-lg md:text-xl text-gray-700 font-[Open Sans,sans-serif]">
                  <span className="font-bold text-[#145886]">Sandeep Singla & Associates</span> is a firm that offers specialized services including Audit & Assurance, Taxation, Advisory, Goods & Service Tax, and Legal Consulting. With over a decade of experience, the firm has developed expertise in establishing liaison/project offices, subsidiaries, joint ventures, and other legal entities in India.
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-[Open Sans,sans-serif]">
                  The firm also excels in Capital Structuring, Business Strategy, Taxation Laws, Corporate Accounts & Finance, and Statutory Compliances.
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-[Open Sans,sans-serif]">
                  This expertise enables the firm to expand its portfolio from traditional audit and taxation to a broad range of exceptional service offerings.
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-[Open Sans,sans-serif]">
                  Services include Top Management Consulting, Start-up Management, Business Fostering, Corporate Health Check-ups, Compliance Planning & Structuring, Compensation Structuring, and Organization Process & Policy (including Finance and HR).
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-block px-7 py-3 rounded-full bg-[#145886] text-white font-semibold shadow-sm hover:bg-white hover:text-[#145886] hover:border transition font-[Montserrat]"
                >
                  Our Services
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
    
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto ">
          <div className="flex flex-col sm:flex-row justify-between items-stretch gap-10">
            {[
              {
                value: 1500,
                duration: 1200,
                suffix: "+",
                label: "People",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-2 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
                  </svg>
                ),
              },
              {
                value: 45,
                duration: 1000,
                suffix: "+",
                label: "Leaders",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-2 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M12 11v7" />
                    <path d="M9 21h6" />
                  </svg>
                ),
              },
              {
                value: 8,
                duration: 900,
                suffix: "",
                label: "Cities",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-2 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
              },
              {
                value: 2500,
                duration: 1300,
                suffix: "+",
                label: "Clients",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-2 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M17 21v-2a4 4 0 0 0-8 0v2" />
                  </svg>
                ),
              },
              {
                value: 10,
                duration: 1100,
                suffix: "+",
                label: "Years of Experience",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-2 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
            ].map((stat, idx, arr) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[200px] bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center border border-gray-100 hover:shadow-md transition
                  ${idx !== arr.length - 1 ? "sm:mr-4" : ""}`}
                style={{
                  marginRight: idx !== arr.length - 1 ? "2rem" : undefined,
                }}
              >
                <div className="mb-2">{stat.icon}</div>
                <div
                  className={`text-4xl md:text-5xl ${modernNumberClass} mb-1`}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  <AnimatedCounter to={stat.value} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-base md:text-lg text-gray-700 font-semibold tracking-wide font-[Montserrat]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Vision (new section, same as Our Approach but reversed) */}
      <section className="py-12 md:py-16 bg-[#fbf6ee] border-t border-b border-gray-100">
        <div className="container mx-auto px-6 ">
          <div className="grid md:grid-cols-2 items-center gap-8">
            {/* Left: image with decorative accent (reversed) */}
            <div className="w-[75%] order-2 md:order-1 relative animate-on-scroll fade-in-up">
              <div className="absolute -left-6 top-6 w-12 h-44 bg-gradient-to-b from-[#f3eadf] to-transparent rounded-md opacity-90" />
              <div className="overflow-hidden rounded-3xl shadow-md border border-[#efe6dd]">
                <img
                  src={Vission}
                  alt="vision"
                  className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </div>
            </div>
            {/* Right: Our Vision content */}
            <div className="w-full order-1 md:order-2">
              <div className="max-w-xl animate-on-scroll fade-in-up">
                <span className="text-[#145886] text-4xl font-semibold uppercase tracking-widest font-[Montserrat]">
                  Our Vision
              </span>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed w-[85%]">
                  Our vision is to be recognized as a trusted partner in financial and business consulting, empowering organizations to achieve sustainable growth and operational excellence. We strive to deliver innovative solutions, foster long-term relationships, and uphold the highest standards of integrity and professionalism in every engagement.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-[#fbf6ee] border-t border-b border-gray-100">
        <div className="container mx-auto px-6 ">
          <div className="grid md:grid-cols-2 items-center gap-8">
            {/* Left: Our Approach content */}
            <div className="w-full">
              <div className="max-w-xl animate-on-scroll fade-in-up">
                <span className="text-[#145886] text-4xl font-semibold uppercase tracking-widest font-[Montserrat]">
                  Our Approach
                </span>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed w-[85%]">
                  At Sandeep Singla & Associates, our Finance & Accounts Outsourcing services are delivered through our 6S Model—a framework designed to ensure every engagement is customized, compliant, and built for long-term value creation. Each service offering is mapped to this model, enabling seamless execution, regulatory alignment, and strategic financial visibility.
                </p>
              </div>
            </div>

            {/* Right: image with decorative accent */}
            <div className="w-[75%]  relative animate-on-scroll fade-in-up">
              <div className="absolute -right-6 top-6 w-12 h-44 bg-gradient-to-b from-[#f3eadf] to-transparent rounded-md opacity-90" />

              <div className="overflow-hidden rounded-3xl shadow-md border border-[#efe6dd]">
                <img
                  src={ApproachImg}
                  alt="professional handshake"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section - Modern Carousel Style */}
      <section className="py-16 md:py-20 bg-[#f3f7fa] border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
          <span className="text-[#145886] text-4xl font-semibold uppercase tracking-widest font-[Montserrat]">
                  Our Team
                </span>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center">
                  Meet the passionate professionals who drive Sandeep Singla & Associates forward. Our team blends deep expertise, innovative thinking, and a commitment to client success. Together, we deliver exceptional results and foster a collaborative, growth-oriented culture.
                </p>
            <div className="w-full">
              <div className="max-w-5xl mx-auto animate-on-scroll fade-in-up">
                
                {/* Team carousel */}
                <div className="mt-10 relative">
                  <TeamCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}