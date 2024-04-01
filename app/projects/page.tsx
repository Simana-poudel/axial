import OthersPageTopUI from "@/components/OthersPageTopUI";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import React from "react";

const ProjectsPage = () => {
  const pageTitle = "Projects";
  const backgroundColor = "white";
  const textColor = "black";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <WhatWeDo backgroundColor={backgroundColor} textColor={textColor} />
    </div>
  );
};

export default ProjectsPage;
