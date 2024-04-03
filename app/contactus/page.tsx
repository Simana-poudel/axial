import React from "react";
import OthersPageTopUI from "@/components/OthersPageTopUI";
import ContactUsPage from "@/components/ContactUsPage";

const ContactUsOpenPage = () => {
  const pageTitle = "ContactUs";

  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <ContactUsPage />
    </div>
  );
};

export default ContactUsOpenPage;
