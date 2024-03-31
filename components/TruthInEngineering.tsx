import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const TruthInEngineering = () => {
  return (
    <div className="flex items-center p-4 lg:py-24 bg-primary-1">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid grid-cols-1">
          <div>
            <div className="" />
            <span className="text-white">TRUTH IN ENGINEERING</span>
            <div className="lg:flex lg:justify-between">
              <h1 className="text-4xl text-white font-bold max-w-[600px] py-8">
                <span className="text-secondary-1">Our Team </span>
                is Responsible for The <br /> Best Construction{" "}
              </h1>
              <Button className="bg-primary-2 uppercase text-black font-bold text-lg hover:bg-primary-2 px-8 md:w-min lg:mt-4 w-full rounded-none">
                Our Team
              </Button>
            </div>
          </div>
          <div className="mt-6 mx-3 flex justify-center items-center">
            <Image
              className="md:hidden flex"
              src={"/images/projects/project4.webp"}
              width={310}
              height={400}
              alt="Video"
            />
            <div className="max-h-[400px] max-w-screen overflow-hidden">
              <Image
                className=" flex"
                src={"/images/projects/project4.webp"}
                width={1200}
                height={500}
                alt="Video"
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <div className="my-8 ">
              <p className="text-lg text-white leading-7">
                Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
                habitasse platea. Velit egestas dui id ornare arcu. Sapien
                pellentesque habitant morbi tristique senectus et netus. Ut
                consequat semper viverra nam libero. Convallis aenean et tortor
              </p>
              <div className="text-white text-base my-6">
                <div className="flex">
                  <p className="py-1">Building the future with ideas</p>
                </div>
                <p className="py-1">Designing future with excellence</p>
                <p className="py-1">Discovering possibility concrete</p>
                <p className="py-1">Designing future with excellence</p>
              </div>
            </div>
            <div className="md:my-10 bg-gradient-to-r from-[#a9a9a9] to-white p-6">
              <h1 className="text-lg font-bold mb-5">
                Senectus et netus et malesuada. Nunc proin pulvinar sapien et
                ligula ulamcorper malesuada proin
              </h1>
              <p className="text-[17px] leading-6">Daniel Strickland</p>
              <h1 className="text-[17px] font-medium leading-6">
                Founder of the Company
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruthInEngineering;
