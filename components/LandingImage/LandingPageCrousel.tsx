"use client";
import React from "react";

import { Carousel } from "flowbite-react";

import Landingpage from "./Landingpage";
import LandingPage2 from "./LandingPage2";
import LandingPage3 from "./LandingPage3";

const LandingPageCrousel = () => {
  return (
    <div>
      <Carousel>
        <Landingpage />
        <LandingPage2 />
        <LandingPage3 />
      </Carousel>
    </div>
  );
};

export default LandingPageCrousel;
