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
  {
    index: "6",
    title: "Container 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit soluta aspernatur tempore.",
  },
];

const AboutUs = () => {
  return (
    <div className="flex items-center lg:py-24 p-6">
      <div className="md:flex  max-w-7xl items-center justify-between text-sm context w-full mx-auto mt-8 ">
        <div>
          <div className="" />
          <span>WHAT WE DO</span>
          <h1 className="text-5xl font-bold max-w-[600px] py-8">
            Multi-Disciplined Engineering{" "}
            <span className="text-secondary-1">Solutions</span>
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {grids.map((grid) => (
              <div
                key={grid.index}
                className="bg-white p-10 border border-gray-200 hover:border-secondary-1"
              >
                <div className="text-5xl font-extrabold text-[#e9e6e6]">
                  {grid.index}
                </div>
                <h2 className="text-2xl font-bold">{grid.title}</h2>
                <p className="text-[#202c38] text-lg">{grid.description}</p>
                <button className=" cursor-pointer text-secondary-1 py-3 font-semibold text-lg">
                  DETAILS <span> - </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
