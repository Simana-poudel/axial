import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface WhyChooseUSProps {
  backgroundColor?: string;
  textColor?: string;
}

const grids: {
  index: string;
  title: string;
  description: string;
  path: string;
}[] = [
  {
    index: "1",
    title: "Process Engineering",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
    path: "/assets/uniqueproject.svg",
  },
  {
    index: "2",
    title: "Container 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
    path: "/assets/inconvenience.svg",
  },
  {
    index: "3",
    title: "Container 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
    path: "/assets/Experience.svg",
  },
  {
    index: "4",
    title: "Container 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
    path: "/assets/innovative.svg",
  },
  {
    index: "5",
    title: "Container 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
    path: "/assets/longterm.svg",
  },
];

const WhyChooseUS: React.FC<WhyChooseUSProps> = ({
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="flex items-center p-4 md:py-10 lg:py-24 "
    >
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6">
            <div className="">
              <div className="flex">
                <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
                <span
                  style={{ color: textColor }}
                  className=" font-medium text-base uppercase"
                >
                  WHy choose us
                </span>
              </div>
              <h1
                style={{ color: textColor }}
                className="text-4xl font-bold max-w-[300px] py-8 lg:max-w-[400px] lg:text-5xl"
              >
                <span className="text-secondary-1">Design </span>
                Future with Excellence{" "}
              </h1>
              <div style={{ color: textColor }} className=" text-base">
                <div className=" place-content-start flex-col text-left">
                  <div className="flex items-center">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2 lg:text-[17px]">
                      Making lives easier
                    </p>
                  </div>

                  <div className="flex items-center">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2 lg:text-[17px]">
                      Get every solution right here
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaArrowRight className="text-secondary-1 " />

                    <p className="py-1 pl-2 lg:text-[17px]">
                      Innovation and creativity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {grids.map((grid) => (
              <div
                key={grid.index}
                style={{ borderColor: textColor }}
                className="bg-transparent p-10 border hover:border-primary-2 cursor-pointer "
              >
                <Image
                  src={grid.path}
                  width={56}
                  height={56}
                  alt="icon"
                  className="py-4"
                />
                <h2
                  style={{ color: textColor }}
                  className="text-2xl font-bold "
                >
                  {grid.title}
                </h2>
                <p style={{ color: textColor }} className=" text-lg">
                  {grid.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
