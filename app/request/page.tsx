import ContactUs from "@/components/ContactUs";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import React from "react";

const Request = () => {
  const pageTitle = "Request";
  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <ContactUs />
    </div>
  );
};

export default Request;
