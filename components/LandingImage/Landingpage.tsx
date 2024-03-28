import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Landingpage = () => {
  return (
    <div>
      <div className=" bg-primary-1 h-screen pt-24">
        <div className="max-w-5xl mx-auto items-center flex justify-between py-24">
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
          <div className="flex">
            <div className="place-self-end">
              <div className="">
                <h1 className="text-primary-2 text-3xl font-semibold">128+</h1>
                <p className="text-white">Projects/Year</p>
              </div>
              <div className="mt-6">
                <h1 className="text-primary-2 text-3xl font-semibold">4.253</h1>
                <p className="text-white">Million euros turnover in 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
