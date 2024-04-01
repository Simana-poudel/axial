import BuildingTheFuture from "@/components/BuildingTheFuture";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import React from "react";

const Blog = () => {
  const pageTitle = "Blog";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <BuildingTheFuture />
    </div>
  );
};

export default Blog;
