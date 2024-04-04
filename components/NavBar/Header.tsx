"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 50 && !scrolling) {
        setScrolling(true);
      } else if (scrollY.get() <= 500) {
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
          y: 0,
          opacity: 1,
        }}
        animate={{
          y: scrolling ? -100 : 0,
          opacity: scrolling ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="z-40 max-w-8xl fixed mx-auto text-black w-full flex items-center justify-between text-sm md:flex py-1"
      >
        <div className="max-w-7xl mx-auto flex w-full justify-between drop-shadow-2xl">
          <Logo />
          <NavItems />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
