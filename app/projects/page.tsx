import OthersPageTopUI from "@/components/OthersPageTopUI";
import Projects from "@/components/whatwedo/Projects";
import React from "react";

const ProjectsPage = () => {
  const pageTitle = "Projects";
  const backgroundColor = "white";
  const textColor = "black";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <Projects backgroundColor={backgroundColor} textColor={textColor} />
    </div>
  );
};

export default ProjectsPage;
