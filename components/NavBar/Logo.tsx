import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
        alt="Logo"
        width={200}
        height={80}
      />
    </div>
  );
};

export default Logo;
