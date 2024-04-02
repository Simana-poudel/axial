import Image from "next/image";
import React from "react";

const grids: { index: string; path: string }[] = [
  {
    index: "1",
    path: "/images/sponsors/sponsors1.png",
  },
  {
    index: "2",
    path: "/images/sponsors/sponsors2.png",
  },
  {
    index: "3",
    path: "/images/sponsors/sponsors3.png",
  },
  {
    index: "4",
    path: "/images/sponsors/sponsors4.png",
  },
  {
    index: "5",
    path: "/images/sponsors/sponsors5.png",
  },
  {
    index: "6",
    path: "/images/sponsors/sponsors6.png",
  },
  {
    index: "7",
    path: "/images/sponsors/sponsors7.png",
  },
  {
    index: "8",
    path: "/images/sponsors/sponsors8.png",
  },
  {
    index: "9",
    path: "/images/sponsors/sponsors9.png",
  },
  {
    index: "10",
    path: "/images/sponsors/sponsors10.png",
  },
  {
    index: "11",
    path: "/images/sponsors/sponsors11.png",
  },
];

const Sponsers = () => {
  return (
    <div className="flex items-center md:py-10 lg:py-12 mb-6">
      <div className=" max-w-7xl items-center text-sm context w-full mx-auto">
        <div className=" grid grid-cols-11 py-4 items-center md:h-[70px]">
          {grids.map((grid) => (
            <div className="py-4" key={grid.index}>
              <Image
                src={grid.path}
                alt={`sponsor ${grid.index} logo`}
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
