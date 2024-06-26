import React from "react";
import Count from "./LandingImage/Count";

const NumberItems: {
  index: number;
  title: string;
}[] = [
  {
    index: 1,
    title: "Strip Out & Demolition",
  },
  {
    index: 2,
    title: "Healthcare Sector",
  },
  {
    index: 3,
    title: "Final Cleaning Completed",
  },
  {
    index: 4,
    title: "Minimum Recycling Achieved",
  },
];

const Numbers = () => {
  const stripNumber = 550;
  const healthNumber = 20;
  const cleaningNumber = 300;
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-16 mb-6">
      <div className="max-w-7xl items-center text-sm context w-full mx-auto">
        <div className="grid grid-cols-4 py-4 items-center md:h-[100px]">
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              <div className="inline-flex items-center">
                <Count finalCount={stripNumber} /> K m&sup2;
              </div>
            </h1>
            <p className="font-semibold text-[17px] text-center font-roboto mt-3 text-gray-700">
              Strip Out & Demolition
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              {" "}
              <div className="inline-flex items-center">
                <Count finalCount={healthNumber} />K m&sup2;
              </div>
            </h1>
            <p className="font-semibold text-[17px] text-center font-roboto mt-3 text-gray-700">
              Healthcare Sector{" "}
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              {" "}
              <div className="inline-flex items-center">
                <Count finalCount={cleaningNumber} />K m&sup2;
              </div>
            </h1>
            <p className="font-semibold text-[17px] text-center font-roboto mt-3 text-gray-700">
              Final Cleaning Completed{" "}
            </p>
          </div>
          <div className="py-4">
            <h1 className="text-primary-2 text-5xl font-bold text-center">
              85% - 90%
            </h1>
            <p className="font-semibold text-[17px] text-center font-roboto mt-3 text-gray-700">
              Minimum Recycling Achieved{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
