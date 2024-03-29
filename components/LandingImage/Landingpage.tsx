import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Landingpage = () => {
  return (
    <div>
      <div className=" pt-24 bg-primary-1">
        <div className="lg:flex hidden max-w-7xl mx-auto justify-between py-24 ">
          <div className="max-w-[450px] p-4">
            <h1 className="z-1 relative mb-7 text-white  font-bold text-5xl">
              Exceptional Service Exceeding Expectations
            </h1>
            <div>
              <span className="text-white roboto">
                Our civil and structural team is committed to providing
                sustainable, creative & efficient engineering solutions for our
                communities
              </span>
            </div>
            <Button className="bg-primary-2 text-black font-semibold uppercase	mt-4 hover:bg-primary-2">
              Consult Now
            </Button>
          </div>
          <div className="flex max-w-[160px] justify-end items-start z-20 p-4">
            <div className="text-right">
              <div className="">
                <h1 className="text-primary-2 text-5xl font-semibold text-right">
                  128+
                </h1>
                <p className="text-white font-semibold">Projects/Year</p>
              </div>
              <div className="mt-6">
                <h1 className="text-primary-2 text-5xl font-semibold">4.253</h1>
                <p className="text-white self-end font-semibold">
                  Million euros turnover in 2020
                </p>
              </div>
            </div>
          </div>
          {/* <div className="">
            <div className="self-end max-h-[420px] overflow-hidden absolute top-[330px] left-[550px] z-0">
              <Image
                src={"/images/home/building_mini.webp"}
                alt="building"
                height={450}
                width={750}
                className="object-cover translate-x-10 translate-y-5"
              />
            </div>
            <div className="self-end max-h-[280px] overflow-hidden absolute top-[560px]">
              <Image
                src={"/images/home/plan.webp"}
                alt="building"
                height={550}
                width={550}
                className="object-cover translate-x-10 translate-y-5 rotate-[145deg]"
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="lg:hidden flex-col bg-primary-1">
        {/* mobile navigatin */}
        <div className="p-5 md:max-w-[550px] md:pt-36">
          <div className="mb-4 pl-5 text-white  font-semibold text-base">
            PROFESSIONAL. INNOVATIVE. RELIABLE
          </div>
          <h1 className="z-1 relative text-white  font-extrabold text-4xl md:text-5xl">
            Exceptional Service Exceeding Expectations
          </h1>
          <div className="mb-7 mt-5 px-2">
            <span className="text-white text-[17px] roboto">
              Our civil and structural team is committed to providing
              sustainable, creative & efficient engineering solutions for our
              communities
            </span>
          </div>
          <Button className="bg-primary-2 text-black font-bold uppercase text-lg hover:bg-primary-2 px-8 md:w-min md:py-8 w-full rounded-none">
            Request/quote
          </Button>
        </div>

        <div className="flex-col items-center my-4 p-5 z-20">
          <div className="">
            <h1 className="text-primary-2 text-4xl font-bold">128+</h1>
            <p className="text-white text-[17px] font-bold	">Projects/Year</p>
          </div>
          <div className="mt-6 inline-block">
            <h1 className="text-primary-2 text-4xl font-bold	">4.253</h1>
            <p className="text-white text-[17px] font-bold	">
              Million euros <br /> turnover in 2020
            </p>
          </div>
        </div>
        <div className="w-full md:absolute md:top-[650px] overflow-hidden h-52">
          <Image
            src={"/images/home/building_mini.webp"}
            alt="building"
            height={450}
            width={750}
            className="object-cover translate-x-20 translate-y-20 scale-150	"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
