import React from "react";

const grids: { index: string; title: string; description: string }[] = [
  {
    index: "1",
    title: "Process Engineering",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
  {
    index: "2",
    title: "Container 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
  {
    index: "3",
    title: "Container 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
  {
    index: "4",
    title: "Container 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
  {
    index: "5",
    title: "Container 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
];

const WhyChooseUS = () => {
  return (
    <div className="flex min-h-screen items-center p-4 md:p-24 bg-primary-1">
      <div className="md:flex hidden max-w-5xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="" />
              <span className="text-white">WHY CHOOSE US</span>
              <h1 className="text-4xl font-bold max-w-[300px] text-white py-8">
                <span className="text-secondary-1">Design </span>
                Future with Excellence{" "}
              </h1>
              <div className="text-white text-base">
                <div className="flex">
                  <p className="py-1">Building the future with ideas</p>
                </div>
                <p className="py-1">Designing future with excellence</p>
                <p className="py-1">Discovering possibility concrete</p>
              </div>
            </div>
            {grids.map((grid) => (
              <div
                key={grid.index}
                className="bg-transparent p-10 border border-white hover:border-primary-2"
              >
                <div className="text-5xl font-extrabold text-[#e9e6e6]">
                  {grid.index}
                </div>
                <h2 className="text-2xl font-bold text-white">{grid.title}</h2>
                <p className="text-white text-lg">{grid.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
