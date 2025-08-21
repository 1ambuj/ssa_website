import React from "react";
import { useParams, Link } from "react-router-dom";
import teamMembers from "../data/teamMembers";
import TeamDetail from "../components/TeamDetail";

export default function TeamMember() {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="container mx-auto p-8">
        <Link to="/about" className="text-sm text-[#145886] underline">
          ← Back to About
        </Link>
        <div className="mt-6 text-gray-700">Team member not found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Link to="/about" className="text-xl font-base text-[#145886] underline hover:text-[#f37920]">
        ← Back to About
      </Link>
      <TeamDetail member={member} />
    </div>
  );
}


