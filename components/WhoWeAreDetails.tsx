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
                WHO WE ARE
              </span>
            </div>
            <h1 className="text-4xl text-white font-bold w-full py-8">
              Pulvinar elementum integer enim neque volutpat ac. Amet dictum sit
              amet justo donec enim diam vulputate ut. Egestas sed sed risus
              pretium quam. Viverra accumsan in nisl nisi scelerisque eu
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
