import BlogPage from "@/components/BlogPage";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import React from "react";

const Blog = () => {
  const pageTitle = "Blog";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <BlogPage />
    </div>
  );
};

export default Blog;
