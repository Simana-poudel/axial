import ContactUs from "@/components/ContactUs";
import ImageGrid from "@/components/ImageGrid";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import AboutUs from "@/components/whatwedo/AboutUs";
import React from "react";

const Services = () => {
  const pageTitle = "Services";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <AboutUs />
      <ImageGrid />
      <ContactUs />
    </div>
  );
};

export default Services;
