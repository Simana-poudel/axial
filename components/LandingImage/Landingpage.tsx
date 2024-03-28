import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Landingpage = () => {
  return (
    <div>
      <div className=" bg-primary-1 pt-24 h-[125vh]">
        <div className="max-w-6xl mx-auto flex justify-between py-24">
          <div className="max-w-[450px]">
            <h1 className="z-1 relative mb-7 text-white  font-bold text-5xl">
              Exceptional Service Exceeding Expectations
            </h1>
            <div>
              <span className="text-white">
                Our civil and structural team is committed to providing
                sustainable, creative & efficient engineering solutions for our
                communities
              </span>
            </div>
            <Button className="bg-primary-2 text-black font-semibold uppercase	mt-4 hover:bg-primary-2">
              Consult Now
            </Button>
          </div>
          <div className="flex max-w-[160px] justify-end items-start z-20">
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
        </div>
      </div>
      <div className="">
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
      </div>
    </div>
  );
};

export default Landingpage;
