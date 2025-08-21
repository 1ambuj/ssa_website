import { useEffect, useState } from "react";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import whatsappIcon from "../assets/whatsapp.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Scroll animation: reveal on intersect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    // Helper to observe a NodeList or array of elements
    const observeElements = (elements) => {
      if (!elements) return;
      elements.forEach((el) => {
        if (el instanceof Element) observer.observe(el);
      });
    };

    // Observe currently existing elements
    observeElements(document.querySelectorAll(".animate-on-scroll"));

    // Watch for newly added elements (e.g. when navigating between routes)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          // If the added node itself has the class, observe it
          if (node.classList && node.classList.contains("animate-on-scroll")) {
            observer.observe(node);
          }
          // Also observe any descendants with the class
          const descendants = node.querySelectorAll && node.querySelectorAll(".animate-on-scroll");
          if (descendants && descendants.length) observeElements(descendants);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  function handleSubscribe(e) {
    e.preventDefault();
    setStatusMessage("");
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    // Simulate async subscribe
    setStatusMessage("Sending...");
    setTimeout(() => {
      setStatusMessage("Thanks — you’re now subscribed!");
      setEmail("");
    }, 800);
  }

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-100 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700"
    >
      <div className="container mx-auto px-6 py-14">
        {/* Use grid-cols-1 for mobile, grid-cols-2 for small screens, grid-cols-4 for md+ and equal width columns */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand / About */}
          <div className="space-y-4 flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-[#55bb48]">
              Sandeep Singla & Associates
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Specialized services in Audit & Assurance, Advisory, Taxation
              and GST. We combine deep expertise with a modern approach to
              help businesses grow.
            </p>

            <div className="flex items-center space-x-3 mt-3">
              <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100">
                <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="opacity-90 hover:opacity-100">
                <img src={twitterIcon} alt="twitter" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100">
                <img src={linkedinIcon} alt="linkedin" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="WhatsApp" className="opacity-90 hover:opacity-100">
                <img src={whatsappIcon} alt="whatsapp" className="w-6 h-6" />
              </a>
            </div>
            {/* Spacer to push content to top for equal height */}
            <div className="flex-1" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-medium text-[#55bb48]">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex-1" />
          </div>

          {/* Contact Addresses */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-medium text-[#55bb48]">Contact</h4>
            <div className="mt-4 text-gray-300 space-y-3 text-sm">
              <div>
                <strong>Gurgaon</strong>
                <div className="text-gray-400">E-127 GF, Sushant Shopping Arcade, Sushant Lok-1, Gurgaon - 122009</div>
              </div>
              <div>
                <strong>Delhi</strong>
                <div className="text-gray-400">803, Best Sky Tower, Netaji Subhash Palace, New Delhi - 110030</div>
              </div>
              <div>
                <div className="mt-2">
                  <a href="mailto:info@sspartners.in" className="hover:text-white">info@sspartners.in</a>
                </div>
                <div>
                  <a href="tel:+919560181790" className="hover:text-white">+91 9560181790</a>
                </div>
              </div>
            </div>
            <div className="flex-1" />
          </div>

          {/* Newsletter / Subscribe */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-medium text-[#55bb48]">Subscribe</h4>
            <p className="mt-3 text-gray-300 text-sm">Get latest updates and insights. No spam — unsubscribe anytime.</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 inline-block px-4 py-2 bg-[#55bb48] text-white rounded-md hover:bg-emerald-600 transition"
              >
                Send
              </button>
            </form>

            {statusMessage && (
              <div className="mt-3 text-sm text-emerald-300">{statusMessage}</div>
            )}
            <div className="flex-1" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} SS Partners. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
