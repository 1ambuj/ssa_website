import React, { useState } from "react";
import { useParams } from "react-router-dom";
import services from "../data/services";
import placeholder from "../assets/download.png";
import blogPosts from "../data/blogPosts";
import BlogList from "../components/BlogList";

const AccordionItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-[#145886]">{item.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transform transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="p-4 border-t text-gray-700">
          {item.details && item.details.map((d, i) => (
            <p key={i} className="mb-3 text-sm md:text-base leading-relaxed">
              {d}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#145886]">Service not found</h2>
        <p className="text-gray-600 mt-2">Please select a valid service.</p>
      </div>
    );
  }

  // Validate image URL and fall back to local placeholder if invalid or blocked
  const initialImage = service.image && /^https?:\/\//i.test(service.image) ? service.image : placeholder;

  return (
    <section className="py-14 bg-gradient-to-br from-[#f5f9fc] via-[#eaf6f6] to-[#f5f9fc] min-h-[60vh] my-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch gap-10">
          {/* Left: Service Details */}
          <div className="w-full md:w-2/4 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#145886] font-[Montserrat] tracking-tight drop-shadow-sm">
                {service.title}
              </h1>
            </div>

            {/* Render main details as separate paragraphs with spacing */}
            {service.details && service.details.map((para, idx) => (
              <p key={idx} className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 font-medium">
                {para}
              </p>
            ))}

            {/* Fallback: support older `details_description` text by splitting into paragraphs */}
            {!service.details && service.details_description && (
              service.details_description
                .split(/\n{2,}|\r\n{2,}/)
                .map((block) => block.trim())
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx} className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4 font-medium">
                    {para}
                  </p>
                ))
            )}

            {/* Optionally, show the short description as a highlight */}
            {service.description && (
              <div className="mt-2 px-5 py-4 bg-gradient-to-r from-[#f37920]/10 to-[#145886]/5 border-l-4 border-[#f37920] rounded-xl shadow-sm text-[#145886] font-semibold text-base md:text-lg backdrop-blur-sm">
                {service.description}
              </div>
            )}

            {/* Subservices rendered as simple accordions placed in the bottom section */}
            
          </div>

          {/* Right: Service Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <div className="relative group">
              <img
                src={initialImage}
                alt={service.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = placeholder;
                }}
                className="w-60 h-60 md:w-90 md:h-90 object-cover object-center rounded-2xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                style={{
                  aspectRatio: "1/1",
                  background: "linear-gradient(135deg, #f5f9fc 60%, #eaf6f6 100%)",
                }}
              />

              {/* cool floating effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#145886]/20 to-[#f37920]/10 blur-lg opacity-60 -z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
        {/* Bottom: Nested subservices section */}
        {service.subservices && service.subservices.length > 0 && (
          <div className="mt-10">
            <div className="container mx-auto px-6">
              <h3 className="text-2xl font-bold text-[#145886] mb-4">Detailed Services</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {service.subservices.map((sub, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="text-lg font-semibold text-[#145886] mb-3">{sub.title}</h4>
                    {sub.details && sub.details.map((d, i) => (
                      <p key={i} className="text-gray-700 mb-3">{d}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related blog posts */}
        <div className="mt-12">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-[#145886] mb-4">Related Blogs</h3>
            <p className="text-gray-600 mb-6">Articles related to {service.title} and similar topics.</p>

            {/* Find posts where category matches service slug or title keywords */}
            {(() => {
              const slugMatches = blogPosts.filter((p) => p.category && p.category.toLowerCase().includes(service.slug));
              const titleMatches = blogPosts.filter((p) => {
                const text = (p.title + " " + p.excerpt + " " + (p.category || "")).toLowerCase();
                return service.title.toLowerCase().split(/\s+/).some((w) => w.length > 3 && text.includes(w));
              });

              const combined = [...slugMatches, ...titleMatches];
              // unique by slug
              const unique = Array.from(new Map(combined.map((p) => [p.slug, p])).values());
              const toShow = unique.slice(0, 3);

              if (toShow.length === 0) {
                return <div className="text-gray-500">No related posts found.</div>;
              }

              return <BlogList posts={toShow} />;
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
