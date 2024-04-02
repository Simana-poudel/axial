import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Advantage from "@/components/assets/advantage.svg";
import Achievement from "@/components/assets/achievement.svg";
import Construction from "@/components/assets/construction.svg";

const AboutUsTop = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div>
            <Image
              src={"/images/servicepage/qualitythings.webp"}
              alt="building"
              height={550}
              width={650}
              className="object-cover"
            />
          </div>

          <div className="md:flex-col md:items-center pl-16">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                WE BUILD ONLY QUALITY THINGS
              </span>
            </div>

            <p className="text-lg leading-7 my-5 md:max-w-full text-justify">
              Established in 2008 by Deepak Serchan, we are a leading
              construction company operating nationwide in Australia. Our
              services lie in providing comprehensive solutions for fit-out,
              refurbishment, construction, and commercial workplace sectors.
            </p>
            <p className="text-lg leading-7 my-5 md:max-w-full text-justify">
              We are deeply committed to ethical practices and environmental
              sustainability, ensuring the safety and well-being of our
              employees and partners. With a strong emphasis on fostering a
              culture of safety, excellence, and integrity, we aim to surpass
              client expectations on every project.
            </p>
            <p className="text-lg leading-7 my-5 md:max-w-full text-justify">
              Behind our success is a seasoned management team, dedicated to
              orchestrating seamless project deliveries and ensuring operational
              efficiency on a day-to-day basis. Our extensive storage and yard
              facilities, spanning over 10,500 m&sup2;, strategically located
              near major waste transfer stations and recycling facilities,
              further underscore our commitment to responsible waste management
              practices.
            </p>
            <p className="text-lg leading-7 my-5 md:max-w-full text-justify">
              Our dedicated team is at the heart of everything we do. We're
              committed to providing top-notch service and ensuring our clients
              are satisfied. We're always looking for ways to improve and
              innovate, all while prioritizing safety and sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTop;
