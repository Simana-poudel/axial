import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./whatweoffer.style.module.css"; // Import CSS module file

const grids: { index: string; title: string; description: string }[] = [
  {
    index: "1",
    title: "Structural Demolition & Stair/Wall Penetrations",
    description:
      "Involves the careful dismantling and removal of buildings, walls, and other structures.",
  },
  {
    index: "2",
    title: "Strip Out & Demolition",
    description:
      "Remove fixtures, fittings, and interior elements, leaving the site clean and ready for the next phase of construction.",
  },
  {
    index: "3",
    title: "Labour Hire & Site Establishment",
    description:
      "ALD Corporate provides skilled labour hire services to support your construction project.",
  },
  {
    index: "4",
    title: "Asbestos Removal",
    description:
      "Our certified asbestos removal team follows strict protocols to safely remove and dispose of asbestos-containing materials.",
  },
  {
    index: "5",
    title: "Floor Grinding",
    description:
      "From levelling uneven surfaces to removing adhesives and coatings, our skilled technicians ensure smooth and flawless floors.",
  },
  {
    index: "6",
    title: "Recycling & Resource Recovery",
    description:
      "We prioritize sustainability by recycling & recovering resources to reduce waste, and promote material reuse.",
  },
  {
    index: "7",
    title: "Waste Management",
    description:
      "Proper segregation, disposal, and recycling of construction debris are included to minimize environmental impact.",
  },
  {
    index: "8",
    title: "Head Contractor Warehousing",
    description:
      "We offer secure warehousing solutions for head contractors, providing storage space for equipment, materials, and tools.",
  },
  {
    index: "9",
    title: "Contract & Final Cleaning",
    description:
      "Our contract and final cleaning services ensure that your construction project is completed to the highest standards of cleanliness.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="flex items-center lg:py-24 p-6">
      <div className="md:fl</button>ex  max-w-7xl items-center justify-between text-sm context w-full mx-auto mt-8 ">
        <div>
          <div className="flex">
            <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
            <span className="text-black font-medium text-base uppercase">
              WHAT WE offer
            </span>
          </div>
          <h1 className="text-5xl font-bold max-w-[640px] py-8">
            From Vision to Reality,
            <span className="text-secondary-1"> Every Detail Matters</span>
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {grids.map((grid) => (
              <div
                key={grid.index}
                className="bg-white p-10 border border-gray-200 hover:border-secondary-1"
              >
                <div className="text-5xl font-extrabold text-[#e9e6e6]">
                  {grid.index}
                </div>
                <h2 className="text-2xl font-bold">{grid.title}</h2>
                <p className="text-[#202c38] text-lg">{grid.description}</p>
                <button
                  className={` cursor-pointer inline-flex text-secondary-1 py-3 font-semibold text-lg ${styles.button}`}
                >
                  DETAILS{" "}
                  <span>
                    {" "}
                    <FaArrowRight className="text-secondary-1 py-1 pl-2 size-6" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
