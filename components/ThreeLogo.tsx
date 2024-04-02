import Image from "next/image";
import React from "react";

const grids: { index: string; path: string }[] = [
  {
    index: "1",
    path: "/images/ALD Logo/SVG/Artboard1.svg",
  },
  {
    index: "2",
    path: "/images/ALD Logo/SVG/Artboard1.svg",
  },
  {
    index: "3",
    path: "/images/ALD Logo/SVG/Artboard1.svg",
  },
];

const ThreeLogo = () => {
  return (
    <div className="flex items-center p-4 md:py-6 lg:py-6">
      <div className=" max-w-7xl items-center text-sm context w-full mx-auto">
        <div className=" grid grid-cols-3 items-center mx-auto w-[40%]">
          {grids.map((grid) => (
            <div className="py-4" key={grid.index}>
              <Image
                src={grid.path}
                alt={`sponsor ${grid.index} logo`}
                width={190}
                height={190}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeLogo;
