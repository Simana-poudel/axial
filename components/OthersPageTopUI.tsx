import Image from "next/image";
import React from "react";
import BreadCrumb from "./BreadCrumb";

interface OthersPageTopUIProps {
  pageTitle?: string;
}

const OthersPageTopUI: React.FC<OthersPageTopUIProps> = ({ pageTitle }) => {
  return (
    <div>
      <div>
        <div className="relative bg-primary-1">
          <div className=" absolute w-[503px] top-[145px] h-[2px] left-5 bg-primary-2 my-2" />

          <div className=" max-w-7xl mx-auto md:relative md:h-[350px] bg-primary-1 overflow-hidden">
            <div className="">
              <div className="p-5 md:max-w-[550px] lg:max-w-[600px] md:pt-36 ">
                <div className="flex">
                  <div className="mb-4 pl-5 text-white uppercase  font-semibold text-base">
                    Building Communities
                  </div>
                </div>
                <h1 className="z-1 relative text-white  font-extrabold text-4xl md:text-5xl lg:text-[58px]">
                  {pageTitle}
                </h1>
                <div className="mb-7 mt-5 px-2">
                  <BreadCrumb pageTitle={pageTitle} />
                </div>
              </div>
              <div className="w-full absolute md:top-[160px] xl:left-[690px] md:h-[280px]">
                <Image
                  src={"/images/home/plan.webp"}
                  alt="building"
                  height={150}
                  width={250}
                  className="object-cover translate-y-20 rotate-[155deg] md:scale-[2.2]	"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersPageTopUI;
