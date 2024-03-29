import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const DealingWithWorries = () => {
  return (
    <div className="flex min-h-screen items-center p-4 md:p-24">
      <div className="md:flex max-w-5xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid grid-cols-1">
          <div className="" />
          <span className="">DEALING WITH YOUR WORRIES</span>
          <h1 className="text-4xl font-bold max-w-[600px] py-4">
            If Your Question Is Not Here{" "}
            <span className="text-secondary-1">Contact Us</span>
          </h1>
          <p className="text-lg leading-7 my-5">
            Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
            habitasse platea. Velit egestas dui id ornare arcu. Sapien
            pellentesque habitant morbi
          </p>
          <Button className="bg-primary-2 uppercase text-black font-bold text-lg hover:bg-primary-2 px-8 w-full rounded-none">
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
  );
};

export default DealingWithWorries;
