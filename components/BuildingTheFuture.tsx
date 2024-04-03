import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./whatweoffer.style.module.css"; // Import CSS module file

const grids: {
  index: string;
  image: string;
  date: string;
  title: string;
  description: string;
}[] = [
  {
    index: "1",
    image: "images/projects/project1.webp",
    date: "july 08, 2022",
    title: "Composite Materials – Applications for the Future",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien ac ultrices ultricies, nunc nunc ultrices urna, .",
  },
  {
    index: "2",
    image: "images/projects/project2.webp",
    date: "july 08, 2022",
    title: "Impact of Technology on Construction Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien ac ultrices ultricies, nunc nunc ultrices urna, .",
  },
  {
    index: "3",
    image: "images/projects/project3.webp",
    date: "july 08, 2022",
    title: "The Importance of Healthy Buildings in a Pandemic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien ac ultrices ultricies, nunc nunc ultrices urna, .",
  },
];

const BuildingTheFuture = () => {
  return (
    <div className="flex items-center p-4 md:py-24 ">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="flex">
            <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
            <span className="text-black font-medium text-base uppercase">
              Building the future
            </span>
          </div>
          <div className="md:flex md:justify-between">
            <h1 className="text-4xl font-bold max-w-[600px] py-8">
              Latest From the <span className="text-secondary-1">Blog</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {grids.map((grid) => (
              <div key={grid.index} className="">
                <div className="relative max-w-full overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={grid.image}
                    alt={grid.title}
                    className="max-w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <p className="uppercase">Materials</p>
                  <p className="uppercase font-thin">{grid.date}</p>
                </div>
                <h2 className="text-2xl py-2 font-bold">{grid.title}</h2>

                <p className="text-lg ">{grid.description}</p>
                <div className="w-full h-[1px] bg-primary-2 my-2" />

                <Link href="/blogs">
                  <button
                    className={` cursor-pointer inline-flex text-primary-2 font-semibold text-lg ${styles.button}`}
                  >
                    DETAILS{" "}
                    <span>
                      {" "}
                      <FaArrowRight className="text-primary-2 py-1 pl-2 size-6" />
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingTheFuture;
