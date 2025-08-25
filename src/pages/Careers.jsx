import React, { useState, useRef, useEffect } from "react";

// Simple IT-style badge for job type/location
const Badge = ({ children }) => (
  <span className="inline-block bg-[#eaf3fa] text-[#145886] text-xs font-semibold px-2 py-1 rounded mr-2">
    {children}
  </span>
);

// Custom file input with styled button and arrow
const FileInput = ({ name, onChange }) => {
  const inputRef = useRef(null);

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="flex items-center px-4 py-2 bg-[#cccccc] text-[#145886] rounded-lg font-medium shadow-sm hover:bg-[#b3b3b3] transition"
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        <span>Choose File</span>
        <svg
          className="ml-2 w-4 h-4 text-[#145886]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </button>
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={onChange}
        className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

const JobCard = ({ job, onApply }) => (
  <li className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow transition">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-lg">{job.title}</span>
        <Badge>{job.type}</Badge>
        <Badge>{job.location}</Badge>
      </div>
      <p className="text-gray-600 text-sm">{job.summary}</p>
    </div>
    <button
      onClick={() => onApply(job)}
      className="mt-3 md:mt-0 px-4 py-2 bg-[#145886] text-white rounded hover:bg-[#123f55] transition"
    >
      Apply
    </button>
  </li>
);

const Careers = () => {
  const [jobs] = useState([
    {
      id: "audit-associate",
      title: "Audit Associate",
      type: "Full-time",
      location: "Delhi",
      summary: "Assist in statutory and internal audits for corporate clients.",
    },
    {
      id: "tax-associate",
      title: "Tax Associate",
      type: "Full-time",
      location: "Remote/Hybrid",
      summary: "Handle direct and indirect tax compliance and advisory tasks.",
    },
    {
      id: "manager-audit-taxation",
      title: "Manager - Audit and Taxation",
      type: "Full-time",
      location: "Gurgaon",
      summary: "Oversee the Audit & Taxation division, provide technical guidance and ensure compliance.",
      experience: "1-2 years post qualification, knowledge of Audit and Accounting Standards",
      qualifications: "Chartered Accountant",
      responsibilities: [
        "Taking care over Audit and Taxation division of Firm.",
        "Support Firm in drafting legal opinion on the GST and Taxation.",
        "Handling GST division of the Firm with the help of team to ensure timely and proper compliances.",
        "Handling day to day internal queries of the team in income tax and GST matters.",
      ],
    },
  ]);

  const [applyingJob, setApplyingJob] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    position: "",
    lastCompany: "",
    qualification: "",
    overallExperience: "",
    resume: null,
    message: "",
  });

  const formRef = useRef(null);
  // const [formModalOpen, setFormModalOpen] = useState(false); // Modal functionality commented out

  // Hide the form when Apply is clicked (per followup instruction)
  const [showForm, setShowForm] = useState(true);

  const onApply = (job) => {
    setApplyingJob(job);
    setShowForm(false); // Hide the form when Apply is clicked
    // setModalJob(null);
    // setFormModalOpen(true);
    setForm((f) => ({
      ...f,
      position: job.title || "",
    }));
  };

  // When the form modal opens, focus the first input
  // useEffect(() => {
  //   if (formModalOpen && formRef.current) {
  //     const firstInput = formRef.current.querySelector("input[name=firstName]");
  //     if (firstInput) firstInput.focus();
  //   }
  // }, [formModalOpen]);

  const [modalJob, setModalJob] = useState(null);

  const openModal = (job) => {
    setModalJob(job);
  };

  const closeModal = () => setModalJob(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((f) => ({ ...f, [name]: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  // Commented out form popup/modal functionality for now as per instructions
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `Thank you for your application! We have received your details for the position: ${form.position || (applyingJob && applyingJob.title) || "Not specified"}`
  //   );
  //   setApplyingJob(null);
  //   setForm({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     mobile: "",
  //     position: "",
  //     lastCompany: "",
  //     qualification: "",
  //     overallExperience: "",
  //     resume: null,
  //     message: "",
  //   });
  //   setFormModalOpen(false);
  // };

  return (
    <section className="py-14 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-[#145886] mb-2 font-mono tracking-tight">
          Careers @ <span className="text-[#f37920]">SSA</span>
        </h1>
        <div className="mb-6">
          <p className="text-gray-600 mt-2 text-sm">
            Apply for open roles or send your CV to{" "}
            <a
              className="text-[#145886] underline"
              href="mailto:sandeep@sspartners.in"
            >
              sandeep@sspartners.in
            </a>
            .
          </p>
        </div>

        {/* Latest vacancies boxed listing */}
        <div className="mb-8 grid gap-6 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold text-[#145886] mb-3">Current vacancies</h2>
            <p className="text-gray-600 text-sm">We are always looking for talented individuals to join our team. Click any vacancy to view details and apply.</p>
          </div>

          <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.id} className="w-full">
                <div className="border rounded-lg p-4 flex items-center justify-between hover:shadow transition bg-white">
                  <div>
                    <div className="font-semibold text-[#145886]">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.location} • {job.type}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => openModal(job)} className="text-sm text-[#145886] underline">Details</button>
                    <button onClick={() => onApply(job)} className="px-3 py-1 bg-[#145886] text-white rounded">Apply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-[#145886] mb-2 font-mono">
              Open Positions
            </h2>
            <ul className="space-y-4 mt-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={onApply} />
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#145886] mb-2 font-mono">
                Why Join Us?
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Competitive pay, flexible work, and modern tech stack</li>
                <li>Learning budget & certifications</li>
                <li>Mentorship from industry experts</li>
                <li>Flat hierarchy, open communication</li>
                <li>Work on real-world, cross-border projects</li>
              </ul>
            </div>
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold text-[#145886] text-base">
                Quick Apply
              </h3>
              <p className="text-gray-600 text-sm">
                Email your CV and a short message to{" "}
                <a
                  className="text-[#145886] underline"
                  href="mailto:sandeep@sspartners.in"
                >
                  sandeep@sspartners.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Application form modal-like area shown when user clicks Apply */}
        {/* Modal form functionality is commented out for now as per instructions */}
        {/* 
        {formModalOpen && applyingJob && (
          <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" onClick={() => setFormModalOpen(false)} />
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] md:w-3/5 p-6 z-70">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-[#145886]">
                  Submit Your Application
                </h3>
                <button onClick={() => setFormModalOpen(false)} className="text-gray-500">✕</button>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input name="firstName" value={form.firstName} onChange={handleChange} required className="border p-3 rounded bg-gray-50" placeholder="First Name" autoComplete="off" />
                <input name="lastName" value={form.lastName} onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Last Name" autoComplete="off" />
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="border p-3 rounded bg-gray-50" placeholder="Email" autoComplete="off" />
                <input name="mobile" value={form.mobile} onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Mobile" autoComplete="off" />
                <select name="gender" onChange={handleChange} className="border p-3 rounded bg-gray-50">
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  className="border p-3 rounded bg-gray-50"
                  placeholder="Position you are applying for (e.g., Tax Associate)"
                  autoComplete="off"
                />
                <input name="dob" type="date" onChange={handleChange} className="border p-3 rounded bg-gray-50" />
                <input name="qualification" value={form.qualification} onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Highest Qualification" />
                <input name="lastCompany" value={form.lastCompany} onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Last Company Worked For" />
                <input name="overallExperience" value={form.overallExperience} onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Overall Experience (e.g., 5 years)" />
                <input name="portfolio" onChange={handleChange} className="border p-3 rounded bg-gray-50" placeholder="Portfolio Website" />
                <div className="flex items-center md:col-span-2 gap-3">
                  <label className="text-sm text-gray-700">Upload Resume</label>
                  <FileInput name="resume" onChange={handleChange} />
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} className="border p-3 rounded md:col-span-2 bg-gray-50" placeholder="Reference / Comments / Questions" />

                <div className="md:col-span-2 flex items-center justify-between mt-2">
                  <button type="submit" className="px-6 py-3 bg-[#145886] text-white rounded hover:bg-[#123f55] transition">Send Application</button>
                  <button type="button" onClick={() => setFormModalOpen(false)} className="text-[#f37920] hover:underline">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
        */}

        {/* Modal for vacancy details */}
        {modalJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" onClick={closeModal} />
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] md:w-3/5 p-6 z-60">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-[#145886]">{modalJob.title}</h3>
                  <div className="text-sm text-gray-500">{modalJob.location} • {modalJob.type}</div>
                </div>
                <button onClick={closeModal} className="text-gray-500">✕</button>
              </div>

              <div className="mt-4 text-gray-700 space-y-3">
                <p><strong>Experience:</strong> {modalJob.experience || "2+ years"}</p>
                <p><strong>Qualifications:</strong> {modalJob.qualifications || "CA / M.Com / relevant degree"}</p>
                <p><strong>Job Profile:</strong></p>
                <ul className="list-decimal list-inside text-sm">
                  {(modalJob.responsibilities || [
                    "Handle client engagements and assist senior staff.",
                    "Prepare reports and maintain client relationships.",
                    "Support audits, tax filings and compliance activities.",
                  ]).map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button onClick={() => { closeModal(); onApply(modalJob); }} className="px-4 py-2 bg-[#145886] text-white rounded">Apply</button>
                <button onClick={closeModal} className="px-4 py-2 border rounded">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
