import ImageGrid from "@/components/ImageGrid";
import JustFeelTheFuture from "@/components/JustFeelTheFuture";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import WhoWeAre from "@/components/WhoWeAre";
import WhoWeAreDetails from "@/components/WhoWeAreDetails";
import WhyChooseUS from "@/components/WhyChooseUs";
import React from "react";

const AboutUs = () => {
  const backgroundColor = "#ffffff"; // White color
  const textColor = "#000000"; // Black color
  const pageTitle = "AboutUs";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <WhoWeAre />
      <WhoWeAreDetails />
      <JustFeelTheFuture />
      <ImageGrid />
      <WhyChooseUS backgroundColor={backgroundColor} textColor={textColor} />
    </div>
  );
};

export default AboutUs;
