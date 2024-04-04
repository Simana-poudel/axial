import React from "react";
import { FaArrowRight } from "react-icons/fa";

import styles from ".././whatweoffer.style.module.css"; // Import CSS module file
import Link from "next/link";

interface ProjectProps {
  backgroundColor?: string;
  textColor?: string;
}

const grids: {
  index: string;
  image: string;
  description: string;
  title: string;
}[] = [
  {
    index: "1",
    image: "images/projects/project1.webp",
    description: "10,000 strip-out & demolition projects Over 4,000,000m2",
    title: "Strip Out & Demolition",
  },
  {
    index: "2",
    image: "images/projects/project2.webp",
    description: "Concrete Floor Grinding Over 700,000m2",
    title: "Site establishment & hoarding",
  },
  {
    index: "3",
    image: "images/projects/project3.webp",
    description: "80-90% Recycling Targets Achieved",
    title: "Waste management & recycling",
  },
  {
    index: "4",
    image: "images/projects/project4.webp",
    description: "Progressive & Final Cleaning 2,500,000m2",
    title: "Ongoing site maintenance & final cleanings",
  },
  {
    index: "5",
    image: "images/projects/project1.webp",
    description: "Nationally Accredited GREENSTAR Demolition Waste Contractor",
    title: "Member of Green Building Council, Australia",
  },
];

const WhatWeDo: React.FC<ProjectProps> = ({ backgroundColor, textColor }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="flex md:py-10 items-center p-4 lg:py-24 bg-primary-1"
    >
      <div className="md:flex  max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="flex">
            <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
            <span
              style={{ color: textColor }}
              className="text-white font-medium text-base uppercase"
            >
              WHAT WE Do
            </span>
          </div>
          <h1
            style={{ color: textColor }}
            className="text-5xl text-white font-bold max-w-[600px] py-8"
          >
            Our <span className="text-secondary-1">Projects</span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4  ">
            {grids.map((grid) => (
              <div key={grid.index} className="p-2">
                <div className="relative max-w-full overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={grid.image}
                    alt={grid.title}
                    className="max-w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </div>
                <h2
                  style={{ color: textColor }}
                  className="text-2xl py-2 font-bold text-white"
                >
                  {grid.title}
                </h2>
                <div className="w-full h-[1px] bg-primary-2" />

                <div className="flex justify-between py-3">
                  <p
                    style={{ color: textColor }}
                    className="text-white text-lg w-72 font-roboto leading-7"
                  >
                    {grid.description}
                  </p>
                  <Link href="/services">
                    <button
                      className={` cursor-pointer inline-flex text-primary-2 font-semibold text-lg ${styles.button}`}
                    >
                      DETAILS{" "}
                      <span>
                        {" "}
                        <FaArrowRight className="text-primary-2 py-1 pl-2 size-6" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
