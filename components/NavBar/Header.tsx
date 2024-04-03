import React from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const Header = () => {
  return (
    <div className=" z-40 flex flex-col bg-primary-1  items-center justify-between">
      <div className=" bg-primary-1 z-40 fixed max-w-7xl mx-auto text-black w-full flex items-center justify-between text-sm md:flex py-4">
        <Logo />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
