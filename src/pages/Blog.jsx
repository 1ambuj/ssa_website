import React, { useState } from "react";
import BlogList from "../components/BlogList";
import BlogSidebar from "../components/BlogSidebar";
import posts from "../data/blogPosts";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [search, setSearch] = useState("");

  // Filter posts by category and search term
  const filteredPosts = posts.filter((p) => {
    const matchesCategory = category ? p.category === category : true;
    const matchesSearch =
      search.trim() === ""
        ? true
        : (
            p.title +
            " " +
            p.excerpt +
            " " +
            p.category
          )
            .toLowerCase()
            .includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold text-[#145886] mb-2 font-[Montserrat]">Blog</h1>
            <p className="text-gray-700 mb-6">
              Insights, updates and articles on our services.
            </p>
          </div>
          <form
            className="w-full md:w-[340px] bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-2"
            onSubmit={e => e.preventDefault()}
            role="search"
          >
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#145886]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#145886]/30 focus:border-[#145886] text-sm transition placeholder-gray-400 bg-[#f8fafc] hover:bg-[#f5f8fa]"
                placeholder="Search posts..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search blog posts"
                autoComplete="off"
                type="search"
              />
            </div>
            {search && (
              <button
                type="button"
                className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#f0f7fb] hover:bg-[#f37920]/10 text-[#145886] hover:text-[#f37920] transition"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                tabIndex={0}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {(category || search) && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  {category && (
                    <span className="inline-flex items-center bg-[#e6f2fa] text-[#145886] px-3 py-1 rounded-full text-sm font-medium mr-2 border border-[#b3d8ef]">
                      <svg className="w-4 h-4 mr-1 text-[#f37920]" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" />
                      </svg>
                      {category}
                    </span>
                  )}
                  {search && (
                    <span className="inline-flex items-center bg-[#e6f2fa] text-[#145886] px-3 py-1 rounded-full text-sm font-medium mr-2 border border-[#b3d8ef]">
                      <svg className="w-4 h-4 mr-1 text-[#f37920]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                      <span>
                        <span className="text-gray-500">Search:</span>{" "}
                        <span className="font-semibold">{search}</span>
                      </span>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchParams({});
                      setSearch("");
                    }}
                    className="flex items-center gap-1 text-xs font-medium text-[#f37920] bg-white border border-[#f37920] hover:bg-[#f37920] hover:text-white px-3 py-1 rounded-full transition shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear filter
                  </button>
                </div>
              )}
              <BlogList posts={filteredPosts} />
              {filteredPosts.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg">No posts found.</p>
                </div>
              )}
            </div>
            <div className="hidden lg:block">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


