import React from "react";

const grids: {
  index: string;
  image: string;
  location: string;
  title: string;
}[] = [
  {
    index: "1",
    image: "images/projects/project1.webp",
    location: "100 Sunrise Ct Hamel, Minnesota",
    title: "Jazzy Elite Construction Shopping",
  },
  {
    index: "2",
    image: "images/projects/project2.webp",
    location: "Rocky Highway Port Juana",
    title: "Fresh Concept Construction Renovation",
  },
  {
    index: "3",
    image: "images/projects/project3.webp",
    location: "Wuckert Junctions Hermannberg",
    title: "Installation a Supply System",
  },
  {
    index: "4",
    image: "images/projects/project4.webp",
    location: "Stoltenberg Underpass Blockbury",
    title: "Reconstruction of Old Factory Building",
  },
  {
    index: "5",
    image: "images/projects/project1.webp",
    location: "100 Sunrise Ct Hamel, Minnesota",
    title: "Jazzy Elite Construction Shopping",
  },
  {
    index: "6",
    image: "images/projects/project2.webp",
    location: "Rocky Highway Port Juana",
    title: "Fresh Concept Construction Renovation",
  },
];

const Projects = () => {
  return (
    <div className="flex min-h-screen md:py-10 items-center p-4 lg:p-24 bg-primary-1">
      <div className="md:flex  max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="" />
          <span className="text-white">WHAT WE DO</span>
          <h1 className="text-5xl text-white font-bold max-w-[600px] py-8">
            Our <span className="text-secondary-1">Projects</span>
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {grids.map((grid) => (
              <div key={grid.index} className="p-2">
                <img src={grid.image} alt={grid.title} />
                <h2 className="text-2xl py-2 font-bold text-white">
                  {grid.title}
                </h2>
                <div className="w-full h-[1px] bg-primary-2" />

                <div className="flex justify-between py-3">
                  <p className="text-white text-lg ">{grid.location}</p>
                  <button className=" cursor-pointer text-primary-2 py-3 font-semibold text-lg">
                    DETAILS <span> - </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
