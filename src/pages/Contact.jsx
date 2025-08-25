import React, { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    const id = "montserrat-font-link";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const initial = {
    name: "",
    designation: "",
    organisation: "",
    officeAddress: "",
    city: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "General Enquiry",
    "Audit & Assurance",
    "Advisory",
    "Taxation",
    "GST",
    "Services for non-residents",
  ];

  // Input class: gray-50 background, borderless, subtle shadow, modern look
  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-gray-100 focus:ring-2 focus:ring-[#145886]/20 outline-none transition text-sm border border-gray-200 shadow-sm";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    // TODO: replace with real API/email integration
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setForm(initial);
    setTimeout(() => setSubmitted(false), 4000);
  }

  // --- Modern Right Side Styles ---
  const officeTitleClass =
    "font-semibold text-[#145886] mb-1 text-base flex items-center gap-2";
  const officeAddressClass =
    "text-sm text-gray-700 leading-relaxed";
  // Make right section wider (from 25% to 35%)
  const rightSectionClass =
    "w-full lg:w-[35%] flex flex-col gap-8 mt-10 lg:mt-0";
  const officeListClass =
    "flex flex-col gap-6";
  const officeItemClass =
    "flex items-start gap-3 py-6 px-3 border-l-4 border-[#f37920] bg-white/90 hover:bg-[#f5f8fa] rounded-2xl shadow-sm transition";
  const officeIconClass =
    "w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[#f37920]/10 rounded-full mt-1";
  const quickContactModernClass =
    "flex flex-col gap-4 p-0 mt-6";
  const quickContactBtnClass =
    "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#145886] text-white font-semibold shadow hover:bg-[#123f55] transition text-sm";

  return (
    <div className="bg-white text-gray-800">
      {/* Contact Us Header and Description */}
      <section className="pt-16 pb-6 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#145886] mb-3 font-[Montserrat] text-left">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl text-left">
            Have a question or want to work with us? Fill the enquiry sheet below
            and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Form and Offices Side by Side */}
      <section className="bg-white mt-10">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-10">
          {/* Form - 65% width now */}
          <div className="w-full lg:w-[82%]">
            <div className="bg-white rounded-3xl shadow border border-gray-100 py-10 px-6 md:px-10 w-full">
              <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-[#f37920]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      id="designation"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Designation"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-1">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Organisation"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="officeAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Office Address
                    </label>
                    <input
                      id="officeAddress"
                      name="officeAddress"
                      value={form.officeAddress}
                      onChange={handleChange}
                      placeholder="Office Address"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-[#f37920]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className={inputClass + (form.email ? " bg-gray-100" : "")}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className={inputClass}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass + " bg-white"}
                    >
                      <option value="">Subject of Query</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-[#f37920]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={5}
                    required
                    className={inputClass + " resize-none"}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <button
                    type="submit"
                    className="px-8 py-2 rounded-full bg-[#145886] text-white font-semibold hover:bg-[#123f55] transition shadow"
                  >
                    Submit
                  </button>
                  {submitted && (
                    <span className="text-green-600 font-medium mt-2 md:mt-0">
                      Message sent — thank you!
                    </span>
                  )}
                </div>
              </form>
            </div>
            {/* Quick Contact Section - below form on mobile, right of form on desktop */}
            <div className="mt-8 block lg:hidden">
              <div className="bg-white/80 rounded-xl border border-gray-100 shadow p-6 flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-[#145886] mb-2 font-[Montserrat] text-left">Quick Contact</h4>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>
                  <span>info@sspartners.in</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>+91 9560181790</span>
                </div>
                <a href="mailto:info@sspartners.in" className={quickContactBtnClass}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" /></svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
          {/* Right side card is now wider */}
          <div className={rightSectionClass}>
            <div>
              <h3 className="text-2xl font-bold text-[#145886] mb-4 font-[Montserrat] text-left tracking-tight flex items-center gap-2">
                <svg className="w-6 h-6 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-4-4h-1M9 20H4v-2a4 4 0 0 1 4-4h1m4-4a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm6 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" /></svg>
                Our Offices
              </h3>
              <div className={officeListClass}>
                {/* Gurgaon Office */}
                <div className={officeItemClass}>
                  <span className={officeIconClass}>
                    <svg className="w-6 h-6 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                  </span>
                  <div>
                    <div className={officeTitleClass}>Gurgaon Office</div>
                    <div className={officeAddressClass}>
                      <div className="text-gray-600 text-base mb-1">
                        E-127, Ground Floor, Sushant Shopping Arcade
                        Sushant Lok-1, Gurgaon, Haryana - 122009
                      </div>
                    
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span className="text-gray-600 font-base">+91 124-4287217</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#145886]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                          </svg>
                          <a href="mailto:sandeep@sspartners.in" className="hover:underline text-[#145886] font-medium">
                            sandeep@sspartners.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Delhi Office */}
                <div className={officeItemClass}>
                  <span className={officeIconClass}>
                    <svg className="w-6 h-6 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                  </span>
                  <div>
                    <div className={officeTitleClass}>Delhi Office</div>
                    <div className={officeAddressClass}>
                      <div className="font-base text-gray-600 text-base mb-1">
                        V-8, Green Park Extension
                        New Delhi - 110016
                      </div>
                      
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <span className="text-gray-600 font-base">+91 9211551857</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#145886]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                          </svg>
                          <a href="mailto:ca.shalini.sgupta@gmail.com" className="hover:underline text-[#145886] font-medium">
                            ca.shalini.sgupta@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/80 rounded-xl border border-gray-100 shadow p-6 flex flex-col gap-4 ">
                <h4 className="text-lg font-semibold text-[#145886] mb-2 font-[Montserrat] text-left flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" /></svg>
                  Quick Contact
                </h4>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#145886]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>
                  <span>info@sspartners.in</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#145886]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span>+91 9560181790</span>
                </div>
                <a href="mailto:info@sspartners.in" className={quickContactBtnClass}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" /></svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title="Office Map"
              src="https://www.google.com/maps?q=E-127%20GF%20Sushant%20Shopping%20Arcade%20Sushant%20Lok-1%20Gurgaon&output=embed"
              className="w-full h-56 border-0"
              loading="lazy"
              style={{ minHeight: 180 }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}