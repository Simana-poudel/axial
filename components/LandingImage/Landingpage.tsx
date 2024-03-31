import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Landingpage = () => {
  return (
    <div>
      <div className=" pt-24 bg-primary-1">
        <div className="lg:flex max-w-7xl mx-auto lg:justify-between md:relative md:h-[890px] flex-col bg-primary-1 overflow-hidden">
          {/* mobile navigatin */}
          <div className="lg:flex lg:justify-between">
            <div className="p-5 md:max-w-[550px] lg:max-w-[600px] md:pt-36">
              <div className="mb-4 pl-5 text-white  font-semibold text-base">
                PROFESSIONAL. INNOVATIVE. RELIABLE
              </div>
              <h1 className="z-1 relative text-white  font-extrabold text-4xl md:text-5xl lg:text-[58px]">
                Exceptional Service Exceeding Expectations
              </h1>
              <div className="mb-7 mt-5 px-2">
                <span className="text-white text-[17px] roboto">
                  Our civil and structural team is committed to providing
                  sustainable, creative & efficient engineering solutions for
                  our communities
                </span>
              </div>
              <Button className="bg-primary-2 text-black font-bold uppercase text-lg hover:bg-primary-2 px-8 md:w-min md:py-8 w-full rounded-none">
                Request/quote
              </Button>
            </div>

            <div className="flex-col items-center my-4 p-5 z-20 lg:mt-36">
              <div className="">
                <h1 className="text-primary-2 text-4xl lg:text-5xl font-bold">
                  128+
                </h1>
                <p className="text-white text-[17px] font-bold	">
                  Projects/Year
                </p>
              </div>
              <div className="mt-6 inline-block">
                <h1 className="text-primary-2 text-4xl lg:text-5xl font-bold	">
                  4.253
                </h1>
                <p className="text-white text-[17px] font-bold	">
                  Million euros <br /> turnover in 2020
                </p>
              </div>
            </div>
          </div>

          <div className="z-20 w-full md:absolute md:top-[570px] lg:left-[190px] xl:left-[340px] overflow-hidden md:h-80 h-52">
            <Image
              src={"/images/home/building_mini.webp"}
              alt="building"
              height={450}
              width={750}
              className="object-cover translate-x-5 translate-y-20 md:scale-110 scale-150	"
            />
          </div>
          <div className="z-10 w-full md:flex hidden md:absolute md:top-[570px] xl:left-[90px] overflow-hidden md:h-80 h-52">
            <Image
              src={"/images/home/plan.webp"}
              alt="building"
              height={150}
              width={250}
              className="object-cover translate-x-5 translate-y-20 rotate-45 xl:scale-125	"
            />
          </div>

          <div className="md:flex flex-col hidden z-30 absolute w-96 lg:w-[390px] top-[470px] lg:top-[420px] lg:left-[600px] xl:left-[860px] left-[400px] my-10 bg-gradient-to-r to-[#a9a9a9] from-white">
            <h1 className="text-2xl lg:text-3xl font-bold mt-2 ml-2 lg:p-6 mb-5">
              Residental House
            </h1>
            <div className="flex justify-between">
              <div className="ml-2 lg:p-6 lg:pt-0">
                <h1 className="text-secondary-1 text-2xl lg:text-3xl mb-2 lg:font-extrabold font-bold">
                  78 000 m.sq
                </h1>
                <p className="text-[17px] font-medium">Amount work done</p>
                <button className=" flex justify-start cursor-pointer text-secondary-1 py-3 lg:pb-0 font-semibold lg:text-xl text-lg">
                  DETAILS <span> - </span>
                </button>
              </div>
              <div className="max-h-[150px] max-w-[150px] lg:max-h-[190px] lg:max-w-[190px] overflow-hidden">
                <Image
                  src={"/images/home/building_mini.webp"}
                  alt="building"
                  height={350}
                  width={390}
                  className="object-cover translate-y-1/4 translate-x-1/4 scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
