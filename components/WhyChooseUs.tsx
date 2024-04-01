import Image from "next/image";
import React from "react";

interface WhyChooseUSProps {
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

const grids: {
  index: string;
  title: string;
  description: string;
  path: string;
}[] = [
  {
    index: "1",
    title: "Expertise",
    description:
      "With over a decade of experience, we bring unmatched expertise for high-quality and efficient project execution.",
    path: "/assets/uniqueproject.svg",
  },
  {
    index: "2",
    title: "Commitment to Excellence",
    description:
      "We uphold the highest standards of quality & professionalism, ensuring attention to detail and customer satisfaction in all our work.",
    path: "/assets/inconvenience.svg",
  },
  {
    index: "3",
    title: "Sustainability",
    description:
      "We prioritize environmental sustainability, implementing green practices and waste management strategies to minimize our ecological footprint.",
    path: "/assets/Experience.svg",
  },
  {
    index: "4",
    title: "Reliability",
    description:
      "You can count on our reliable team, advanced equipment, and efficient management for on-time, on-budget project delivery.",
    path: "/assets/innovative.svg",
  },
  {
    index: "5",
    title: "Safety",
    description:
      "Safety is paramount, and we maintain rigorous protocols to ensure a secure work environment for everyone involved.",
    path: "/assets/longterm.svg",
  },
];

const WhyChooseUS: React.FC<WhyChooseUSProps> = ({
  backgroundColor,
  textColor,
  iconColor,
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="flex items-center p-4 md:py-10 lg:py-10 "
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
                className="text-4xl font-bold max-w-[500px] py-8 lg:max-w-[520px] lg:text-5xl"
              >
                <span className="text-secondary-1">Setting </span>
                New Standards in Construction{" "}
              </h1>
              <div style={{ color: textColor }} className=" text-base">
                <div className=" place-content-start flex-col text-left">
                  <div className="flex items-center">
                    <p className="py-1 pl-2 lg:text-[17px] max-w-[350px]">
                      When you choose ALD Corporate, you're choosing a partner
                      you can trust to deliver quality, sustainability, and
                      reliability in every aspect of your construction project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {grids.map((grid) => (
              <div
                key={grid.index}
                className="bg-transparent p-10 border hover:border-primary-2 cursor-pointer "
              >
                <span style={{ color: iconColor }}>
                  <Image
                    src={grid.path}
                    width={56}
                    height={56}
                    alt="icon"
                    className={`py-4 text-${iconColor} `}
                  />
                </span>
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
