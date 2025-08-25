import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/blogPosts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold text-[#145886]">Post not found</h2>
        <p className="mt-4">The post you are looking for doesn't exist.</p>
        <Link to="/BLOG" className="text-[#f37920] mt-4 inline-block">Back to blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {post.image && (
            <div className="h-64 w-full overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-8">
            <div className="text-sm text-[#f37920] font-semibold mb-2">{post.category}</div>
            <h1 className="text-3xl font-bold text-[#145886] mb-4">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-6">{new Date(post.date).toLocaleDateString()}</div>

            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              <p>{post.excerpt}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sed. Replace this with the full
                content of the article when available.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/BLOG" className="text-[#145886] font-semibold">← Back to posts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


