import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Advantage from "@/components/assets/advantage.svg";
import Achievement from "@/components/assets/achievement.svg";
import Construction from "@/components/assets/construction.svg";

const ServiceTop = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className=" max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div>
          <div className="flex">
            <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
            <span className="text-black font-medium text-base uppercase">
              Electrical Engineering
            </span>
          </div>
          <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
            <h1 className="text-4xl lg:text-5xl font-bold md:max-w-full py-4">
              We Provide Electrical <br />
              <span className="text-secondary-1"> Engineering Services</span>
            </h1>
            <div>
              <p className="text-lg mt-6 w-[80%] float-right">
                Vestibulum morbi blandit cursus risus at ultrices. Dui nunc
                mattis enim ut tellus. Morbi blandit cursus risus at ultrices.
                Proin nibh nisl condimentum id venenatis
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-1 lg:grid-cols-3 ">
          <div className="md:flex-col md:items-center border border-1">
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
            <div className="py-8 px-10 border border-b-1">
              <h3 className="text-2xl font-bold">Title 1</h3>
            </div>
          </div>

          <div className="col-span-2 border border-black">
            <div className="max-h-[300px] overflow-hidden">
              <Image
                src={"/images/servicepage/choiceisyours.webp"}
                alt="building"
                height={350}
                width={650}
                className="object-cover w-full"
              />
            </div>
            <div>
              <p className="text-[19px] p-8 leading-7">
                Nulla facilisi nullam vehicula ipsum a arcu cursus. Libero
                volutpat sed cras ornare arcu dui vivamus arcu felis. Feugiat
                sed lectus vestibulum mattis ullamcorper velit sed ullamcorper
                morbie enim facilisis gravid. A condimentum vitae sapien
                pellentesque habitant
                <br />A condimentum vitae sapien pellentesque habitant. Ac
                turpis egestas maecenas pharetra convallis posuere morbi. Sed
                sed risus pretium quam vulputate dignissim. Elit eget gravida
                cum sociis natoque penatibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTop;
