"use client";
import React from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";
import { motion, useScroll, useTransform } from "framer-motion";

const NewDemoHeader = () => {
  const { scrollYProgress } = useScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ["0%", "0%", "-100%"]
  );

  return (
    <motion.div
      className={`z-40 flex flex-col bg-primary-1 items-center justify-between `}
    >
      <motion.div
        style={{
          position: "fixed",
          y: headerY,
          top: "0",
        }}
        className="bg-primary-1 z-40 max-w-8xl mx-auto text-black w-full flex items-center justify-between text-sm md:flex pt-2"
      >
        <div className="max-w-7xl mx-auto flex w-full justify-between">
          <Logo />
          <NavItems />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewDemoHeader;
