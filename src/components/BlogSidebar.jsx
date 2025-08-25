import React from "react";
import blogPosts from "../data/blogPosts";
import { Link, useLocation } from "react-router-dom";

export default function BlogSidebar({ categories = [] }) {
  const recent = blogPosts.slice(0, 4);
  const categoriesList = categories.length
    ? categories
    : Array.from(new Set(blogPosts.map((p) => p.category)));

  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("category");

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg mb-6">
        <h4 className="text-base font-bold text-[#145886] mb-4 tracking-tight flex items-center gap-2">
          <svg className="w-5 h-5 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
          Categories
        </h4>
        <ul className="text-sm text-gray-700 space-y-2">
          {categoriesList.map((c) => (
            <li key={c}>
              <Link
                to={`/blog?category=${encodeURIComponent(c)}`}
                className={`block px-3 py-2 rounded-lg transition font-medium ${
                  activeCategory === c
                    ? "bg-[#f0f7fb] text-[#145886] shadow"
                    : "hover:bg-[#f5f8fa] hover:text-[#145886]"
                }`}
                style={{ marginBottom: "2px" }}
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg mb-6">
        <h4 className="text-base font-bold text-[#145886] mb-4 tracking-tight flex items-center gap-2">
          <svg className="w-5 h-5 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10h8M8 14h6" /></svg>
          Recent Posts
        </h4>
        <ul className="space-y-4">
          {recent.map((r) => (
            <li
              key={r.slug}
              className="flex items-center gap-3 bg-[#f8fafc] hover:bg-[#f0f7fb] rounded-xl p-2 transition"
              style={{ marginBottom: "2px" }}
            >
              {r.image && (
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-14 h-10 object-cover rounded-lg border border-gray-200 shadow-sm"
                  style={{ flexShrink: 0 }}
                />
              )}
              <div className="flex-1 min-w-0">
                <Link
                  to={`/blog/${r.slug}`}
                  className="text-sm font-semibold text-[#145886] hover:underline block truncate"
                  title={r.title}
                >
                  {r.title}
                </Link>
                <span className="text-xs text-gray-400 block mt-0.5">
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


