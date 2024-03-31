import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const WhatWeDoDetails = () => {
  return (
    <div className="flex items-center p-4 lg:py-24 bg-primary-1">
      <div className="md:flex max-w-7xl items-center text-sm context w-full mx-auto">
        <div className="grid grid-cols-1">
          <div>
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-white font-medium text-base uppercase">
                What we do
              </span>
            </div>
            <div className="lg:flex">
              <div className=" max-w-[600px]">
                <h1 className="text-4xl text-white font-bold py-8">
                  Building The Future on a
                  <span className="text-secondary-1">
                    Foundation of Excellence
                  </span>
                </h1>
                <p className="text-lg text-white leading-8">
                  Molestie nunc non blandit massa. Lacus sed viverra tellus in
                  hac habitasse platea. Velit egestas dui id ornare arcu. Sapien
                  pellentesque habitant morbi tristique senectus et netus. Ut
                  consequat semper viverra nam libero. Convallis aenean et
                  tortor
                </p>
              </div>

              <div className="grid grid-cols-2 my-2 ">
                <div className="mx-6 my-6 pb-6 pl-6">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold">
                    99%
                  </h1>
                  <p className="text-white text-[17px] py-2 font-bold">
                    Building Control <br /> Approval Rate
                  </p>
                </div>
                <div className="mx-6 my-6 pb-6 pl-6">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold">
                    320+
                  </h1>
                  <p className="text-white text-[17px] py-2 font-bold">
                    Active Projects in <br /> Construction Management
                  </p>
                </div>
                <div className="mx-6 my-6 pb-6 pl-6">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold">
                    200+
                  </h1>
                  <p className="text-white text-[17px] py-2 font-bold">
                    Completed Projects <br /> Every Year
                  </p>
                </div>
                <div className="mx-6 my-6 pb-6 pl-6">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold">
                    4.253
                  </h1>
                  <p className="text-white text-[17px] py-2 font-bold">
                    Million euros Turnover <br /> in 2020
                  </p>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoDetails;
