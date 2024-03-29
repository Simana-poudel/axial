import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const WhereWeWork = () => {
  return (
    <div className="flex min-h-screen items-center p-4 md:p-24">
      <div className="md:flex max-w-5xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="" />
            <span>WHERE WE WORK</span>
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
          <div className="my-8 md:pl-10">
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
