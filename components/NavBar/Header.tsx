import React from "react";
import Logo from "./Logo";
import { NavItems } from "./NavItems";

const Header = () => {
  return (
    <div className=" z-10 flex bg-transparent max-h-[91px] flex-col items-center justify-between">
      <div className=" max-w-6xl absolute text-black w-full flex items-center justify-between text-sm lg:flex mt-4">
        <Logo />
        <NavItems />
      </div>
    </div>
  );
};

export default Header;
