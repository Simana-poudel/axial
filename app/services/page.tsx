import ContactUs from "@/components/ContactUs";
import ContractBuilder from "@/components/ContractBuilder";
import ImageGrid from "@/components/ImageGrid";
import LabourHire from "@/components/LabourHire";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import ServiceTop from "@/components/ServiceTop";
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
      <ServiceTop />
      {/* <WhatWeOffer /> */}
      {/* <WhatWeDoDetails /> */}
      <TheChoiceIsYour />
      <WeBuidOnlyQualityThings />
      <ContractBuilder />
      <LabourHire />
      <ImageGrid />
      <ContactUs />
    </div>
  );
};

export default Services;
