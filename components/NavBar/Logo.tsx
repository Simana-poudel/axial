import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="min-h-max ">
      {/* desktop nav */}
      <div className="md:flex hidden">
        <Link href="/">
          <Image
            src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
            alt="Logo"
            width={160}
            height={160}
          />
        </Link>
      </div>

      {/* mobile navigation */}
      <div className="md:hidden flex pb-2">
        <Link href="/">
          <Image
            src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
            alt="Logo"
            width={120}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
