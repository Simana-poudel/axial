"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const images = [
    { src: "/images/imagegrid/grid1.webp", alt: "Image1" },
    { src: "/images/imagegrid/grid2.webp", alt: "Image2" },
    { src: "/images/imagegrid/grid3.webp", alt: "Image3" },
    { src: "/images/imagegrid/grid4.webp", alt: "Image4" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-4 grid-cols-1">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer relative"
          >
            <Image src={image.src} alt={image.alt} width={1000} height={400} />
            {hoveredIndex === index && (
              <div className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end justify-center">
                <div className="m-5 pb-4 pl-4">
                  <div className="flex">
                    <div className="w-10 h-[2px] bg-primary-2 my-2 mr-4" />
                    <span className="font-medium text-white text-base uppercase">
                      Our GallERY
                    </span>
                  </div>
                  <h1 className="text-3xl text-white font-bold py-4">
                    Fresh Concept Construction{" "}
                    <span className="">
                      {" "}
                      Renovation <br />{" "}
                    </span>
                  </h1>
                  <p className="font-semibold text-primary-2 text-base uppercase">
                    Special Projects
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
