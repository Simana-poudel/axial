import Image from "next/image";
import Link from "next/link";
import React from "react";

const ScrollLogo = () => {
  return (
    <div className="min-h-max ">
      {/* desktop nav */}
      <div className="md:flex hidden">
        <Link href="/">
          <Image
            src={"/images/ALD Logo/SVG/Artboard1.svg"}
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>
      </div>
    </div>
  );
};

export default ScrollLogo;
