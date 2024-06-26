import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MapContentDemo from "./MapContentDemo";

const grids: { index: string; path: string }[] = [
  {
    index: "1",
    path: "/images/ALD Logo/SVG/Artboard1.svg",
  },
  {
    index: "2",
    path: "/assets/expertdemo.svg",
  },
  {
    index: "3",
    path: "/assets/services.svg",
  },
];

const WhereWeWork = () => {
  const location1 = "BRISBANE";
  const location2 = "SYDNEY";
  const location3 = "CANBERRA";
  const location4 = "MELBOURNE";
  const location5 = "ADELAIDE";

  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                WHere we work
              </span>
            </div>
            <h1 className="text-4xl font-bold max-w-[600px] py-8">
              <span className="text-secondary-1">Serving 5 Cities </span>
              Across <br /> Australia
            </h1>
            <div className="relative">
              <Image
                src={"/images/citymap.png"}
                width={400}
                height={500}
                alt="Map"
              />
              <div className="absolute rounded-full top-[130px] left-[260px] z-10 cursor-pointer">
                <MapContentDemo location={location1} />
              </div>
              <div className="absolute rounded-full top-[204px] left-[225px] z-10 cursor-pointer">
                <MapContentDemo location={location3} />
              </div>
              <div className="absolute rounded-full top-[185px] left-[253px] z-10 cursor-pointer">
                <MapContentDemo location={location2} />
              </div>
              <div className="absolute rounded-full top-[223px] left-[192px] z-10 cursor-pointer">
                <MapContentDemo location={location4} />
              </div>
              <div className="absolute rounded-full top-[180px] left-[150px] z-10 cursor-pointer">
                <MapContentDemo location={location5} />
              </div>
            </div>
          </div>
          <div className="my-8 lg:pl-10">
            <p className="text-[19px] leading-7 font-roboto">
              ​​With a strong presence in these regions, we stand by to deliver
              exceptional construction services made to meet the unique needs of
              clients across Australia. Contact us today to discuss your project
              requirements and experience the ALD Corporate difference.
            </p>
            <div className=" grid grid-row-3 items-center w-[40%]">
              {grids.map((grid) => (
                <div className="py-4" key={grid.index}>
                  <Image
                    src={grid.path}
                    alt={`sponsor ${grid.index} logo`}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
