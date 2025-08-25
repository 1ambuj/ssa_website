import React from "react";
import { Link } from "react-router-dom";

// Reusable blog post card used in lists and grids
export default function BlogCard({ post }) {
  const { title, excerpt, date, image, slug, category } = post;

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200">
      {image && (
        <div className="h-48 w-full overflow-hidden rounded-t-2xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-[#f37920] font-semibold">{category}</div>
          <time dateTime={date} className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</time>
        </div>

        <h3 className="text-lg font-semibold text-[#145886] mb-2">
          <Link to={`/blog/${slug}`} className="hover:underline">{title}</Link>
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{excerpt}</p>

        <div className="mt-4">
          <Link to={`/blog/${slug}`} className="inline-flex items-center text-[#145886] font-semibold">
            Read more
            <span className="ml-2 text-sm text-gray-400">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}


