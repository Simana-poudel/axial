import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

const Numbers = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-16 mb-6">
      <div className=" max-w-7xl items-center text-sm context w-full mx-auto">
        <div className="flex"></div>
        <div className=" grid grid-cols-4 py-4 items-center md:h-[100px]">
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              550K m&sup2;
            </h1>
            <p className=" font-semibold text-base text-center mt-3 text-gray-700">
              Strip out & Demolition
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              {" "}
              20K m&sup2;
            </h1>
            <p className=" font-semibold text-base text-center mt-3 text-gray-700">
              Healthcare Sector{" "}
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              {" "}
              300K m&sup2;
            </h1>
            <p className=" font-semibold text-base text-center mt-3 text-gray-700">
              Final Cleaning Completed{" "}
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              85% - 90%
            </h1>
            <p className=" font-semibold text-base text-center mt-3 text-gray-700">
              Minimum Recycling Achieved{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
