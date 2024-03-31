import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-4 grid-cols-1">
        <div className="">
          <Image
            src={"/images/imagegrid/grid1.webp"}
            alt="Image1"
            width={560}
            height={400}
          />
        </div>
        <div className="">
          <Image
            src={"/images/imagegrid/grid2.webp"}
            alt="Image2"
            width={560}
            height={400}
          />
        </div>
        <div>
          <Image
            src={"/images/imagegrid/grid3.webp"}
            alt="Image3"
            width={560}
            height={400}
          />
        </div>
        <div>
          <Image
            src={"/images/imagegrid/grid4.webp"}
            alt="Image4"
            width={560}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
