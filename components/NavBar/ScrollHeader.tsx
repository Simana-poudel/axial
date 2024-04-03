"use client";
import React, { useState, useEffect } from "react";
import ScrollLogo from "./ScrollLogo";
import { ScrollNavItems } from "./ScrollNavItems";
import { motion, useScroll } from "framer-motion";

const ScrollHeader = () => {
  const [scrolling, setScrolling] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 500 && !scrolling) {
        setScrolling(true);
      } else if (scrollY.get() <= 500 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling, scrollY]);

  return (
    <div className="z-40 flex flex-col bg-transparent items-center justify-between">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: scrolling ? 0 : -100,
          opacity: scrolling ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="bg-white z-40 max-w-8xl shadow-xl fixed mx-auto text-black w-full flex items-center justify-between text-sm md:flex py-1"
      >
        <div className="max-w-7xl mx-auto flex w-full justify-between drop-shadow-2xl">
          <ScrollLogo />
          <ScrollNavItems />
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollHeader;
