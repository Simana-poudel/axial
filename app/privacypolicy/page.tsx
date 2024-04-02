import OthersPageTopUI from "@/components/OthersPageTopUI";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";
import React from "react";

const PrivacyPolicy = () => {
  const pageTitle = "PrivacyPolicy";

  return (
    <div>
      <OthersPageTopUI pageTitle={pageTitle} />
      <PrivacyPolicyPage />
    </div>
  );
};

export default PrivacyPolicy;
