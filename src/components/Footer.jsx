import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // --- Scroll Animation Logic ---
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
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
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contact"
      className="bg-[#145886] text-white animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-[#f37920]">
              Sandeep Singla & Associates
            </h3>
            <p className="mt-4 text-gray-300">
              Your trusted partner in financial excellence, committed to
              building lasting relationships and supporting your success.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold text-[#f37920]">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-gray-300 hover:text-white transition"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#ai-assistant"
                  className="text-gray-300 hover:text-white transition"
                >
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-[#f37920]">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 mt-1">&#9993;</span>
                <a
                  href="mailto:contact@ssa.com"
                  className="hover:text-white transition"
                >
                  contact@ssa.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">&#9742;</span>
                <a
                  href="tel:+910000000000"
                  className="hover:text-white transition"
                >
                  +91 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">&#127968;</span>
                <span>Ambernath, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-blue-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sandeep Singla & Associates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
