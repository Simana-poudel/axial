import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const TruthInEngineering = () => {
  return (
    <div className="flex items-center p-4 lg:py-24 bg-primary-1">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="grid grid-cols-1">
          <div>
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-white font-medium text-base uppercase">
                Together we thrive
              </span>
            </div>
            <div className="lg:flex lg:justify-between">
              <h1 className="text-4xl text-white font-bold max-w-[600px] py-8">
                <span className="text-secondary-1">
                  Versatile Team, Diverse Projects{" "}
                </span>
                Building Excellence Everywhere
              </h1>
              <Button className="bg-primary-2 uppercase text-black font-bold text-lg hover:bg-primary-2 px-8 md:w-min lg:mt-4 w-full rounded-none">
                Our Team
              </Button>
            </div>
          </div>
          <div className="mt-6 w-full bg-black">
            <Image
              className="md:hidden w-full bg-slate-200 bg-cover aspect-video	"
              src={"/images/aboutimage/wideimage.webp"}
              width={1300}
              height={605}
              alt="Video"
            />
          </div>
          <div>
            <div className="max-w-full">
              <Image
                className=" flex"
                src={"/images/aboutimage/wideimage.webp"}
                width={1300}
                height={605}
                alt="Video"
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <div className="my-8 ">
              <p className="text-lg text-white leading-7 font-roboto text-justify pr-6">
                Having the right management team within any business is
                critical, not only for the successful delivery of projects and
                services but also for the effective coordination of day-to-day
                operations. Our experienced, loyal and trustworthy team are
                committed to providing high standards of service to all our
                clients. We are committed to providing
              </p>
              <div className="text-white text-lg mb-6 mt-2 font-roboto ">
                <div className="flex">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">
                      Safe and healthy work environment for all
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">
                      Regular safety training and updates{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">Ongoing commitment to safety </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">
                      Extending safety measures to public stakeholders{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center py-1">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2">
                      Continuous upskilling for best safety practices.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:my-10 bg-gradient-to-r from-[#a9a9a9] to-white p-6 pb-0">
              <h1 className="text-2xl font-bold mb-5">
                Senectus et netus et malesuada. Nunc proin pulvinar sapien et
                ligula ulamcorper malesuada proin
              </h1>
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/founder.webp"
                  width={100}
                  height={100}
                  alt="CEO"
                  className="rounded-full"
                />
                <div>
                  <p className="text-[19px] leading-6">Daniel Strickland</p>
                  <h1 className="text-[19px] font-medium leading-6">
                    Founder of the Company
                  </h1>
                </div>
                <div className="float-right ml-10">
                  <Image
                    className="float-right"
                    src="/assets/founder.svg"
                    width={90}
                    height={90}
                    alt="founder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruthInEngineering;
