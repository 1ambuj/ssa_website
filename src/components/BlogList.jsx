import React from "react";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div className="text-center py-12">No posts found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </div>
  );
}


