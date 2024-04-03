import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LandingPage3 = () => {
  return (
    <div>
      <div>
        <div>
          <div className=" pt-10 relative bg-slate-400">
            <div className=" absolute w-[300px] top-[155px] h-[2px] left-5 bg-primary-2 my-2" />

            <div className="lg:flex max-w-7xl mx-auto lg:justify-between md:relative md:h-[790px] flex-col overflow-hidden">
              <div className="lg:flex lg:justify-between">
                <div className="p-5 md:max-w-[550px] lg:max-w-[660px] md:pt-28">
                  <div className="mb-4 pl-5 text-white uppercase  font-semibold text-base">
                    Innovation. Integrity. Impact
                  </div>
                  <h1 className="z-1 relative text-white  font-extrabold text-4xl md:text-5xl lg:text-[50px]">
                    Transforming Spaces, Empowering Businesses
                  </h1>
                  <div className="mb-7 mt-5 px-2">
                    <span className="text-white text-[17px] font-roboto">
                      With a dedicated team of professionals and a commitment to
                      excellence, ALD Corporate is your trusted partner in
                      demolition and workplace solutions
                    </span>
                  </div>
                </div>

                <div className="flex-col items-center my-4 p-5 z-20 lg:mt-36">
                  <div className="text-end">
                    <h1 className="text-primary-2 text-4xl lg:text-5xl font-bold inline-flex"></h1>
                    <p className="text-white text-[17px] font-bold	">
                      Projects Nationally{" "}
                    </p>
                  </div>
                  <div className="mt-6 pl-6 flex-col text-end">
                    <div className="flex justify-end">
                      <Image
                        src="/images/gbcaus_logo.png"
                        alt="green building council"
                        width={50}
                        height={50}
                        className="place"
                      />
                    </div>

                    <div>
                      <p className="text-white text-[17px] font-bold	">
                        Green Building
                        <br />
                        Council Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-10 w-full md:flex hidden md:absolute md:top-[500px] xl:left-[70px] overflow-hidden md:h-80 h-52">
                <Image
                  src={"/images/home/plan.webp"}
                  alt="building"
                  height={150}
                  width={250}
                  className="object-cover translate-x-5 translate-y-20 rotate-45 xl:scale-125	"
                />
              </div>

              <div className="md:flex  flex-col hidden z-30 absolute w-96 lg:w-[390px] top-[470px] lg:top-[450px] lg:left-[600px] xl:left-[860px] left-[400px] my-10 bg-gradient-to-r to-[#a9a9a9] from-white">
                <h1 className="text-2xl lg:text-3xl font-bold mt-2 ml-2 lg:p-6 lg:pb-0 inline-block ">
                  15 yrs of Industry Experience
                </h1>
                <div className="flex justify-between">
                  <div className="ml-2 lg:p-6 lg:pt-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage3;
