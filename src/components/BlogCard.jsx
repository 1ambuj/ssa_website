import React from "react";
import { Link } from "react-router-dom";

// Reusable blog post card used in lists and grids
export default function BlogCard({ post }) {
  const { title, excerpt, date, image, slug, category } = post;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-6">
        <div className="text-sm text-[#f37920] font-semibold mb-2">{category}</div>
        <h3 className="text-xl font-semibold text-[#145886] mb-2">
          <Link to={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <Link to={`/blog/${slug}`} className="text-[#145886] font-semibold">
            Read more »
          </Link>
        </div>
      </div>
    </article>
  );
}


