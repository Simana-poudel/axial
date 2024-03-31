import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const DealingWithWorries = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                Dealing with your worries
              </span>
            </div>
            <h1 className="text-4xl font-bold md:max-w-full max-w-[600px] py-4">
              If Your Question Is Not Here{" "}
              <span className="text-secondary-1">Contact Us</span>
            </h1>
            <p className="text-lg leading-7 my-5 md:max-w-full lg:max-w-[500px]">
              Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
              habitasse platea. Velit egestas dui id ornare arcu. Sapien
              pellentesque habitant morbi
            </p>
            <Button className="bg-primary-2 uppercase text-black font-bold text-lg md:max-w-min hover:bg-primary-2 md:my-3 px-8 w-full rounded-none">
              Contact Us
            </Button>
          </div>

          <div>
            <div className="border border-secondary-1 p-4 mt-5">
              <h5 className="text-lg text-secondary-1 font-bold max-w-[600px]">
                Where is Company <br /> Located?
              </h5>
              <p className="text-[17px] leading-6">
                Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
                habitasse platea. Velit egestas dui id ornare arcu. Sapien
                pellentesque habitant morbi
              </p>
            </div>
            <div className="border border-gray-200 p-4 mt-5 flex justify-between">
              <h5 className="text-lg font-bold ">
                Where is a Structural Engineering ?
              </h5>
              <h1 className="text-3xl font-bold p-3">+</h1>
            </div>
            <div className="border border-gray-200 p-4 mt-5 flex justify-between">
              <h5 className="text-lg font-bold ">
                What are the Services Provided By Company ?
              </h5>
              <h1 className="text-3xl font-bold p-3">+</h1>
            </div>
            <div className="border border-gray-200 p-4 mt-5 flex justify-between">
              <h5 className="text-lg font-bold ">
                How Long Does It Takes to Buid a House ?
              </h5>
              <h1 className="text-3xl font-bold p-3">+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealingWithWorries;
