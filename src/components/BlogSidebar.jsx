import React from "react";
import blogPosts from "../data/blogPosts";

export default function BlogSidebar({ categories = [] }) {
  const recent = blogPosts.slice(0, 3);

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-semibold text-[#145886] mb-3">Search</h4>
        <input className="w-full px-3 py-2 border border-gray-200 rounded" placeholder="Search posts..." />
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-semibold text-[#145886] mb-3">Categories</h4>
        <ul className="text-sm text-gray-700 space-y-2">
          {(categories.length ? categories : ["Advisory Services", "Audit & Assurance", "Taxation", "GST"]).map((c) => (
            <li key={c} className="cursor-pointer hover:text-[#145886]">{c}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <h4 className="text-sm font-semibold text-[#145886] mb-3">Recent Posts</h4>
        <ul className="text-sm text-gray-700 space-y-3">
          {recent.map((r) => (
            <li key={r.slug} className="hover:text-[#145886]">{r.title}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


