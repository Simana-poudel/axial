"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const DemoHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`z-40 flex flex-col bg-primary-1 items-center justify-between ease-in-out duration-300 ${
        showHeader ? "" : "hidden"
      }`}
    >
      <div className="bg-primary-1 z-40 fixed top-0 max-w-8xl mx-auto text-black w-full flex items-center justify-between text-sm md:flex py-4">
        <div className="max-w-7xl mx-auto flex w-full justify-between">
          <Logo />
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default DemoHeader;
