import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative text-white"
      style={{
        background: `linear-gradient(rgba(20, 88, 134, 0.85), rgba(20, 88, 134, 0.85)),
                     url('https://placehold.co/1920x1080/0f172a/FFFFFF?text=Financial+Excellence') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6 text-center py-24 md:py-40">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Your Trusted Partner in Financial Excellence
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-lg md:text-xl font-light max-w-3xl mx-auto"
        >
          With over two decades of proven expertise, we navigate complex
          financial landscapes to help you achieve your goals with integrity and
          precision.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#services"
            style={{ backgroundColor: "#F37920", color: "white" }}
            className="font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            style={{ backgroundColor: "white", color: "#145886" }}
            className="font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
