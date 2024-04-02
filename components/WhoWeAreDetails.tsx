import React from "react";

const WhoWeAreDetails = () => {
  return (
    <div>
      <div className="flex md:py-10 items-center p-4 lg:py-10 bg-primary-1">
        <div className="md:flex  max-w-7xl items-center justify-between text-sm context w-full mx-auto">
          <div>
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-white font-medium text-base">
                OUR MISSION
              </span>
            </div>
            <h1 className="text-4xl text-white font-bold w-full py-8">
              We aim to redefine the standards of excellence in the construction
              industry while preserving the environment and promoting safety at
              every step. With over a decade if industry expertise we aim to
              create value for our clients, communities, and stakeholders.
            </h1>
            <p className="text-primary-2 font-medium text-base">
              BENJAMIN MILLER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreDetails;
