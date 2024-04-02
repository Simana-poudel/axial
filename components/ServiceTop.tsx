"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Advantage from "@/components/assets/advantage.svg";
import Achievement from "@/components/assets/achievement.svg";
import Construction from "@/components/assets/construction.svg";
import { Button } from "./ui/button";

const grids: {
  index: string;
  title: string;
  path: string;
  description: string;
}[] = [
  {
    index: "1",
    title: "Structural Demolition & Stair/Wall Penetrations",
    path: "/images/servicepage/servicetop1.webp",
    description:
      "Our structural demolition services involve the careful dismantling and removal of buildings, walls, and other structures. Whether it's creating openings for staircases or walls, our expert team ensures precise and safe penetrations to meet your project's requirements.",
  },
  {
    index: "2",
    title: "Strip Out & Demolition",
    path: "/images/servicepage/servicetop2.webp",
    description:
      "We specialize in the efficient and thorough strip-out and demolition of existing structures, preparing the space for renovation or redevelopment. Our team meticulously removes fixtures, fittings, and interior elements, leaving the site clean and ready for the next phase of construction.",
  },
  {
    index: "3",
    title: "Labour Hire & Site Establishment",
    path: "/images/servicepage/servicetop3.webp",
    description:
      "ALD Corporate provides skilled labour hire services to support your construction project. From site set-up to ongoing maintenance, our team ensures the smooth operation of your project by providing reliable manpower for various tasks.",
  },
  {
    index: "4",
    title: "Asbestos Removal",
    path: "/images/servicepage/servicetop4.webp",
    description:
      "Safety is paramount in any construction project, especially when dealing with hazardous materials like asbestos. Our certified asbestos removal team follows strict protocols to safely remove and dispose of asbestos-containing materials, protecting both workers and occupants from potential health risks.",
  },
  {
    index: "5",
    title: "Recycling & Resource Recovery",
    path: "/images/servicepage/servicetop5.webp",
    description:
      "ALD Corporate is committed to sustainability and environmental responsibility. We implement comprehensive recycling and resource recovery programs to minimize waste and maximize the reuse of materials, reducing our environmental footprint and promoting a circular economy.",
  },
  {
    index: "6",
    title: "Waste Management",
    path: "/images/servicepage/servicetop6.webp",
    description:
      "Proper waste management is essential for maintaining a clean and safe work environment. Our waste management services include proper segregation, disposal, and recycling of construction debris, ensuring compliance with regulations and minimizing environmental impact.",
  },
];

const ServiceTop = () => {
  const [selectedGrid, setSelectedGrid] = useState(null);

  const handleGridClick = (index: any) => {
    setSelectedGrid(index);
  };

  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className=" max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="flex">
            <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
            <span className="text-black font-medium text-base uppercase">
              Electrical Engineering
            </span>
          </div>
          <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full py-4">
              We Provide Electrical <br />
              <span className="text-secondary-1"> Engineering Services</span>
            </h1>
            <div>
              <p className="text-lg mt-6 w-[80%] float-right">
                Vestibulum morbi blandit cursus risus at ultrices. Dui nunc
                mattis enim ut tellus. Morbi blandit cursus risus at ultrices.
                Proin nibh nisl condimentum id venenatis
              </p>
            </div>
          </div>
        </div>
        {/* rest of the component code... */}
        <div className="grid grid-cols-3 mt-10">
          <div className="md:flex-col md:items-center border border-1">
            {grids.map((grid) => (
              <div
                key={grid.index}
                className={`py-7 px-10 border hover:cursor-pointer ${
                  selectedGrid === grid.index ? "bg-gray-200" : ""
                }`}
                onClick={() => handleGridClick(grid.index)}
              >
                <h3 className="text-2xl font-bold">{grid.title}</h3>
              </div>
            ))}
          </div>
          {/* rest of the component code... */}
          <div className="col-span-2 border">
            {selectedGrid ? (
              <div className="max-h-[500px] overflow-hidden">
                <Image
                  src={grids[selectedGrid - 1].path}
                  alt="building"
                  height={350}
                  width={650}
                  className="object-cover w-full"
                />
              </div>
            ) : (
              <div className="max-h-[500px] overflow-hidden">
                <Image
                  src={"/images/servicepage/servicetop1.webp"}
                  alt="building"
                  height={350}
                  width={650}
                  className="object-cover w-full"
                />
              </div>
            )}
            {selectedGrid ? (
              <div>
                <p className="text-[19px] p-8 leading-7">
                  {grids[selectedGrid - 1].description}
                </p>
                <Button className="bg-primary-2 text-black float-right font-medium text-lg hover:bg-primary-2 px-8 w-min mr-4 lg:mb-4 rounded-none">
                  Read More
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-[19px] p-8 leading-7">
                  {grids[0].description}
                </p>
                <Button className="bg-primary-2 text-black float-right font-medium text-lg hover:bg-primary-2 px-8 w-min mr-4 lg:mb-4 rounded-none">
                  Read More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTop;
