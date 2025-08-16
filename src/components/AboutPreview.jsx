import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll fade-in-up">
            <img
              src="https://placehold.co/600x400/e2e8f0/145886?text=Our+Team"
              alt="Our Team at Sandeep Singla & Associates"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div
            className="md:w-1/2 animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-bold text-accent-orange">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mt-2">
              A Legacy of Integrity and Expertise
            </h2>
            <p className="text-lg leading-relaxed mt-4">
              Sandeep Singla & Associates (SSA) is a premier financial
              consulting firm dedicated to providing exceptional service and
              strategic guidance. With a legacy of over two decades, we have
              built a reputation for integrity, expertise, and client-centric
              solutions.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our seasoned professionals help businesses and individuals
              navigate complex financial landscapes, optimize performance, and
              achieve long-term goals through personalized advice and
              comprehensive support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
