import ContactUs from "@/components/ContactUs";
import ImageGrid from "@/components/ImageGrid";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import TheChoiceIsYour from "@/components/TheChoiceIsYour";
import WeBuidOnlyQualityThings from "@/components/WeBuildOnlyQyalityThings";
import WhatWeDoDetails from "@/components/WhatWeDoDetails";
import WhatWeOffer from "@/components/WhatWeOffer";
import React from "react";

const Services = () => {
  const pageTitle = "Services";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <WhatWeOffer />
      <WhatWeDoDetails />
      <TheChoiceIsYour />
      <WeBuidOnlyQualityThings />
      <ImageGrid />
      <ContactUs />
    </div>
  );
};

export default Services;
