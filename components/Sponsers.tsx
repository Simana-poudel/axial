import Image from "next/image";
import React from "react";

const grids: { index: string; path: string }[] = [
  {
    index: "1",
    path: "/images/sponsors/sponsors1.webp",
  },
  {
    index: "2",
    path: "/images/sponsors/sponsors2.webp",
  },
  {
    index: "3",
    path: "/images/sponsors/sponsors3.webp",
  },
  {
    index: "4",
    path: "/images/sponsors/sponsors4.webp",
  },
  {
    index: "5",
    path: "/images/sponsors/sponsors5.webp",
  },
  {
    index: "6",
    path: "/images/sponsors/sponsors6.webp",
  },
  {
    index: "7",
    path: "/images/sponsors/sponsors7.webp",
  },
  {
    index: "8",
    path: "/images/sponsors/sponsors8.webp",
  },
  {
    index: "9",
    path: "/images/sponsors/sponsors9.webp",
  },
  {
    index: "10",
    path: "/images/sponsors/sponsors10.webp",
  },
  {
    index: "11",
    path: "/images/sponsors/sponsors11.webp",
  },
];

const Sponsers = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
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
