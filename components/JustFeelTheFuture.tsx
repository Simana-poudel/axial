import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

const JustFeelTheFuture = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="" />
            <span className="">DEALING WITH YOUR WORRIES</span>
            <h1 className="text-4xl font-bold md:max-w-full max-w-[600px] py-4">
              Bringing
              <span className="text-secondary-1">
                {" "}
                Your Ideas <br />{" "}
              </span>
              and Innovations to Life{" "}
            </h1>
            <p className="text-lg leading-7 my-5 md:max-w-full lg:max-w-[500px]">
              Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
              habitasse platea. Velit egestas dui id ornare arcu. Sapien
              pellentesque habitant morbi
            </p>
            <div className=" text-base mt-6 font-semibold">
              <div className=" place-content-start flex-col text-left">
                <div className="flex items-center">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">Making lives easier</p>
                </div>

                <div className="flex items-center">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">Get every solution right here</p>
                </div>
                <div className="flex items-center">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">Innovation and creativity</p>
                </div>
                <div className="flex items-center">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">Fine engineering only with us</p>
                </div>
              </div>
            </div>
            <Button className="bg-primary-2 uppercase text-black font-bold text-lg md:max-w-min hover:bg-primary-2 md:my-3 px-8 w-full rounded-none">
              Contact Us
            </Button>
          </div>

          <div>
            <Image
              src={"/images/projects/project1.webp"}
              alt="building"
              height={350}
              width={650}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustFeelTheFuture;
