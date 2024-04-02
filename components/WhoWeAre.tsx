import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                who we are
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Building a
              <span className="text-secondary-1">
                {" "}
                Better Community <br />{" "}
              </span>
              Through Construction{" "}
            </h1>
            <p className="text-lg lg:text-[19px] font-roboto leading-7 my-5 mb-7 md:max-w-full lg:max-w-[500px]">
              We are a leading construction company founded in 2008. With a firm
              commitment to sustainability, integrity, and safety, we deliver
              efficient and reliable services at competitive costs. We operate
              nationwide across 5 cities in Australia, enabling us to undertake
              projects Australia-wide.
            </p>
            <div className=" text-[19px] mt-6 font-medium mb-7">
              <div className=" place-content-start flex-col text-left">
                <div className="flex items-center py-1">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">
                    We prioritize honesty and sustainability.
                  </p>
                </div>

                <div className="flex items-center py-1">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">Safety is paramount for our team.</p>
                </div>
                <div className="flex items-center py-1">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">
                    We promote efficient and reliable service at a competitive
                    cost.{" "}
                  </p>
                </div>
                <div className="flex items-center py-1">
                  <FaArrowRight className="text-secondary-1 " />

                  <p className="py-1 pl-2">
                    We value quality and ethics, which is why contractors trust
                    us.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-primary-2 uppercase text-black font-bold text-lg md:max-w-min hover:bg-primary-2 px-8 w-full rounded-none">
              Contact Us
            </Button>
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

export default WhoWeAre;
