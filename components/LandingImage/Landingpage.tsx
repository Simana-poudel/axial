import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Landingpage = () => {
  return (
    <div>
      <div className=" bg-primary-1 pt-24">
        <div className="max-w-6xl mx-auto items-center flex justify-between py-24">
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
            <Button className="bg-primary-2 text-black uppercase	mt-4">
              Consult Now
            </Button>
          </div>
          <div className="flex max-w-2x justify-end">
            <div className="text-right">
              <div className="">
                <h1 className="text-primary-2 text-3xl font-semibold text-right">
                  128+
                </h1>
                <p className="text-white">Projects/Year</p>
              </div>
              <div className="mt-6">
                <h1 className="text-primary-2 text-3xl font-semibold">4.253</h1>
                <p className="text-white self-end">
                  Million euros turnover in 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="self-end absolute top-[306px] left-[500px]">
        <Image
          src={"/images/home/building_mini.webp"}
          alt="building"
          height={400}
          width={300}
          className="object-cover translate-x-10 translate-y-5"
        />
      </div> */}
    </div>
  );
};

export default Landingpage;
