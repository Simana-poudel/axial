import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const WhereWeWork = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                WHere we work
              </span>
            </div>
            <h1 className="text-4xl font-bold max-w-[600px] py-8">
              <span className="text-secondary-1">Serving 5 Cities </span>
              Across <br /> Australia
            </h1>
            <img
              src={"images/AustraliaMapLocationldpi.png"}
              width={500}
              height={600}
              alt="Map"
            />
          </div>
          <div className="my-8 lg:pl-10">
            <p className="text-lg leading-7">
              ​​With a strong presence in these regions, we stand by to deliver
              exceptional construction services made to meet the unique needs of
              clients across Australia. Contact us today to discuss your project
              requirements and experience the ALD Corporate difference.
            </p>
            <div>
              <div className="py-4">
                <h1 className="text-secondary-1 text-4xl font-bold">
                  550,000 m2
                </h1>
                <p className="font-semibold">
                  Commercial Strip out & Demolition Projects Completed
                </p>
              </div>
              <div className="pb-4">
                <h1 className="text-secondary-1 text-4xl font-bold">30</h1>
                <p className="font-semibold">Floors & Stairs Level Completed</p>
              </div>
              <div className="pb-4">
                <h1 className="text-secondary-1 text-4xl font-bold">
                  20,000 m2
                </h1>
                <p className="font-semibold">Healthcare Sector</p>
              </div>
              <div className="pb-4">
                <h1 className="text-secondary-1 text-4xl font-bold">
                  300,000 m2
                </h1>
                <p className="font-semibold">Final Cleaning Completed</p>
              </div>
              <div className="pb-4">
                <h1 className="text-secondary-1 text-4xl font-bold">
                  85% - 90%
                </h1>
                <p className="font-semibold">Minimum Recycling Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
