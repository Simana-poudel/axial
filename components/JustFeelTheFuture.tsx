import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

const JustFeelTheFuture = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                just feel the future
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Spotlight
              <span className="text-secondary-1">
                {" "}
                Services
                <br />{" "}
              </span>
            </h1>
            <div className="p-6 pl-0">
              <Image
                src={"/images/aboutimage/justfeelfuture1.webp"}
                alt="building"
                height={450}
                width={550}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-col justify-center items-center flex">
            <div>
              <h1 className="text-2xl font-semibold">Electrical Engineering</h1>
              <p className="text-lg lg:text-[19px] font-roboto leading-7 my-5 mb-7 md:max-w-full lg:max-w-[500px]">
                Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
                habitasse platea. Velit egestas dui id ornare arcu. Sapien
                pellentesque habitant morbi
              </p>
              <div className=" text-[19px] mt-6 font-medium mb-7">
                <div className=" place-content-start flex-col text-left">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">Making lives easier</p>
                  </div>

                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">Get every solution right here</p>
                  </div>
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">Innovation and creativity</p>
                  </div>
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">Fine engineering only with us</p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary-2 uppercase text-black font-bold text-lg md:max-w-min hover:bg-primary-2 md:my-3 px-8 w-full rounded-none">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustFeelTheFuture;
