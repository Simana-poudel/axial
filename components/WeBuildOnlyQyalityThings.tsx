import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Advantage from "@/components/assets/advantage.svg";
import Achievement from "@/components/assets/achievement.svg";
import Construction from "@/components/assets/construction.svg";

const WeBuidOnlyQualityThings = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div>
            <Image
              src={"/images/servicepage/qualitythings.webp"}
              alt="building"
              height={550}
              width={650}
              className="object-cover"
            />
          </div>

          <div className="md:flex-col md:items-center pl-16">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                HEAD CONTRACTOR WAREHOUSING{" "}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Your Warehouse <br /> Solution
              <span className="text-secondary-1"> Partner </span>
            </h1>
            <p className="text-lg leading-7 my-5 md:max-w-full lg:max-w-[500px]">
              We offer both temporary and long-term warehousing options,
              tailored to meet the unique needs of each project. From hoardings
              to site amenities and material storage, we provide everything you
              need for efficient and effective site establishment.
            </p>
            <div className=" text-base mt-6 font-semibold">
              <div className=" place-content-start flex-col text-left">
                <div className="flex items-center py-4">
                  <p className="py-1 pl-4 w-36">DEMOLITION</p>
                  <div className=" mx-4 h-3 bg-grey w-[270px]">
                    <div className="h-full bg-secondary-1 w-[80%]" />
                  </div>
                  <p>80%</p>
                </div>

                <div className="flex items-center py-4">
                  <p className="py-1 pl-4 w-36">SAFETY</p>
                  <div className=" mx-4 h-3 bg-grey w-[270px]">
                    <div className="h-full bg-primary-2 w-[90%]" />
                  </div>
                  <p>90%</p>
                </div>
                <div className="flex items-center py-4">
                  <p className="py-1 pl-4 w-36">SUSTAINABILITY</p>
                  <div className=" mx-4 h-3 bg-grey w-[270px]">
                    <div className="h-full bg-secondary-1 w-[70%]" />
                  </div>
                  <p>70%</p>
                </div>

                <div className="flex items-center py-4">
                  <p className="py-1 pl-4 w-36">RECYCLING</p>
                  <div className=" mx-4 h-3 bg-grey w-[270px]">
                    <div className="h-full bg-primary-2 w-[75%]" />
                  </div>
                  <p>75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBuidOnlyQualityThings;
