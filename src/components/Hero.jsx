import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Add Google Fonts via <link> tag (for demo, in real app, add to index.html or _document.js)
if (typeof document !== "undefined") {
  const id = "google-fonts-montserrat-opensans";
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap";
    document.head.appendChild(link);
  }
}


const accent = "#00C9A7"; // Modern teal accent
const accentDark = "#008B72";
const bgOverlay = "rgba(20, 40, 56, 0.7)"; // Deep blue overlay

const slides = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
    title: "Audit & Assurance",
    highlight: "with Integrity",
    subtitle:
      "Comprehensive audit and assurance services tailored to enhance financial transparency.",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1920&q=80",
    title: "Expert",
    highlight: "Advisory Services",
    subtitle:
      "Navigate complexities with strategic advisory and data-driven decision making.",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
    title: "Simplifying",
    highlight: "Taxation",
    subtitle:
      "Stay compliant and optimize tax strategies with our expert-led taxation services.",
  },
  {
    id: 4,
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    title: "Business Process",
    highlight: "Outsourcing",
    subtitle:
      "Streamline your business with efficient and cost-effective outsourcing solutions.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto change every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(${bgOverlay}, ${bgOverlay}), url('${slides[current].bg}') center/cover no-repeat`,
          }}
        >
          {/* Modern left-aligned content */}
          <div className="relative z-10 flex justify-start items-center h-full px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl text-left">
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl font-[montserrat] tracking-tight">
                {slides[current].title}{" "}
                <span className="text-[#f37920]">{slides[current].highlight}</span>
              </h1>
              <p className="mt-5 text-lg md:text-2xl text-gray-100 font-opensans font-medium drop-shadow font-light">
                {slides[current].subtitle}
              </p>

              <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full 
                            bg-white text-[1.1rem] font-bold text-[#145886] shadow-xl 
                            hover:bg-transparent hover:text-[#F37920] hover:border-[#F37920] 
                            border-2 border-transparent transition-all duration-300 font-montserrat"
                  style={{
                    boxShadow: "0 6px 32px 0 rgba(243,121,32,0.25)", // soft orange glow
                  }}
                >

                <span>Explore Services</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 shadow ${
              current === i
                ? `bg-[${accent}] border-white scale-125 shadow-lg`
                : "bg-white/40 border-white/60 hover:bg-white/70"
            }`}
            style={
              current === i
                ? { background: accent, borderColor: "#fff" }
                : { background: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.6)" }
            }
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ChevronDown size={32} className="text-white opacity-90 drop-shadow-lg" />
        <span className="text-xs text-white/80 mt-1 font-opensans tracking-wide">Scroll Down</span>
      </div>
    </div>
  );
}



