import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="min-h-max ">
      {/* desktop nav */}
      <div className="md:flex hidden">
        <Image
          src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
          alt="Logo"
          width={160}
          height={160}
        />
      </div>

      {/* mobile navigation */}
      <div className="md:hidden flex pb-2">
        <Image
          src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
          alt="Logo"
          width={120}
          height={40}
        />
      </div>
    </div>
  );
};

export default Logo;
