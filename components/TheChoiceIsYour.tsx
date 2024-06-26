import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Advantage from "@/components/assets/advantage.svg";
import Achievement from "@/components/assets/achievement.svg";
import Construction from "@/components/assets/construction.svg";

const TheChoiceIsYour = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-24">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                FLOOR GRINDING
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Smoothing Surfaces
              <br />
              while Enhancing Your
              <span className="text-secondary-1"> Spaces </span>
            </h1>
            <p className="text-lg leading-7 my-5 md:max-w-full lg:max-w-[500px]">
              We specialize in floor grinding services, backed by our asbestos A
              Class License within NSW & QLD. Our extensive range of floor
              preparation equipment, including single to 3-phase heavy grinders,
              allows us to handle projects ranging from 1m² to 40,000m² and
              beyond.
            </p>
            <div className=" text-base mt-6 font-semibold">
              <div className=" place-content-start flex-col text-left w-[350px]">
                <div className="flex items-center py-4">
                  <Image src={Advantage} alt="icon" />

                  <p className="py-1 pl-4">
                    We have the right equipment for floor preparation.
                  </p>
                </div>

                <div className="flex items-center py-4">
                  <Image src={Achievement} alt="icon" />

                  <p className="py-1 pl-4">
                    Our operators are skilled in various grinding tasks.{" "}
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <Image src={Construction} alt="icon" />

                  <p className="py-1 pl-4">
                    We ensure the legal disposal of silica dust and provide
                    disposal reports.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={"/images/servicepage/choiceisyours.webp"}
              alt="building"
              height={350}
              width={650}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheChoiceIsYour;
