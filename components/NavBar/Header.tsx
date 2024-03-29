import React from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const Header = () => {
  return (
    <div className=" z-10 flex flex-col items-center justify-between">
      <div className=" max-w-6xl bg-primary-1 absolute text-black w-full flex items-center justify-between text-sm lg:flex pt-4">
        <Logo />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
