import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const WhereWeWork = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
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
              <span className="text-secondary-1">Our Project </span>
              in the World{" "}
            </h1>
            <img
              src={"images/projects/map.svg"}
              width={500}
              height={600}
              alt="Map"
            />
          </div>
          <div className="my-8 lg:pl-10">
            <p className="text-lg leading-7">
              Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
              habitasse platea. Velit egestas dui id ornare arcu. Sapien
              pellentesque habitant morbi tristique senectus et netus. Ut
              consequat semper viverra nam libero. Convallis aenean et tortor
            </p>
            <div className="py-6">
              <h1 className="text-secondary-1 text-4xl font-bold">200+</h1>
              <p className="font-semibold">
                Active Projects in Civil Engineering
              </p>
            </div>
            <div className="pb-6">
              <h1 className="text-secondary-1 text-3xl font-semibold">99%</h1>
              <p className="font-semibold">Building Control Approval Rate</p>
            </div>
            <Button className="bg-primary-2">ABOUT COMPANY</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
