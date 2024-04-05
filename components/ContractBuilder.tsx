import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaCheckCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdOutlineDone, MdOutlineFileDownloadDone } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const ContractBuilder = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                CONTRACT, BUILDERS & FINAL CLEAN{" "}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Spotless Solutions for <br />
              <span className="text-secondary-1"> Seamless </span>
              Completion{" "}
            </h1>
            <p className="text-lg lg:text-[19px] font-roboto leading-7 my-5 mb-7 md:max-w-full lg:max-w-[500px]">
              Whether it's a small-scale renovation or a large-scale
              construction project, we ensure thorough cleaning using the right
              methods and products for each material involved. Our dedicated
              team is equipped with the necessary expertise to handle cleaning
              tasks for a wide range of projects.
            </p>
            <div className=" text-[19px] mt-6 font-medium mb-7">
              <div className=" place-content-start flex-col text-left">
                <div className="flex items-center py-1">
                  <FaRegCircleCheck className="text-primary-2 size-6 " />

                  <p className="py-1 pl-2">
                    We prioritize honesty and sustainability.
                  </p>
                </div>

                <div className="flex items-center py-1">
                  <FaRegCircleCheck className="text-primary-2 size-6 " />

                  <p className="py-1 pl-2">Safety is paramount for our team.</p>
                </div>
                <div className="flex items-center py-1">
                  <FaRegCircleCheck className="text-primary-2 size-6 " />

                  <p className="py-1 pl-2">
                    We promote efficient and reliable service at a competitive
                    cost.{" "}
                  </p>
                </div>
                <div className="flex items-center py-1">
                  <FaRegCircleCheck className="text-primary-2 size-6 " />

                  <p className="py-1 pl-2">
                    We value quality and ethics, which is why contractors trust
                    us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={"/images/aboutimage/bringingyourideas.webp"}
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

export default ContractBuilder;
