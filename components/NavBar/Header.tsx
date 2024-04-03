import React from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const Header = () => {
  return (
    <div className=" z-40 flex flex-col bg-transparent   items-center justify-between">
      <div className=" z-40 max-w-7xl absolute mx-auto text-black w-full flex items-center justify-between text-sm md:flex py-4">
        <Logo />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
