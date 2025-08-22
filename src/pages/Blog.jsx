import React from "react";
import BlogList from "../components/BlogList";
import BlogSidebar from "../components/BlogSidebar";
import posts from "../data/blogPosts";
import { h1 } from "framer-motion/client";

export default function Blog() {
  return (
    <h1>this is blog page</h1>
    // <div className="bg-gray-100 min-h-screen text-gray-800">
    //   <section className="pt-16 pb-8">
    //     <div className="container mx-auto px-6 max-w-7xl">
    //       <h1 className="text-4xl font-bold text-[#145886] mb-2">Blog</h1>
    //       <p className="text-gray-700 mb-6">Insights, updates and articles on our services.</p>
    //     </div>
    //   </section>

    //   <section className="pb-20">
    //     <div className="container mx-auto px-6 max-w-7xl">
    //       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    //         <div className="lg:col-span-3">
    //           <BlogList posts={posts} />
    //         </div>
    //         <div className="hidden lg:block">
    //           <BlogSidebar />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}


