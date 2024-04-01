import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MediaLinks from "./MediaLinks";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosCall, IoIosSend } from "react-icons/io";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex items-center bg-sky-blue md:pt-10 bg-primary-1">
      <div className=" md:flex max-w-7xl mx-auto w-full  flex-col items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <div>
            <div className="">
              <Image
                src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
                alt="Logo"
                width={150}
                height={30}
              />
            </div>
            <div className="">
              <div className="flex gap-3 md:gap-4">
                <FaFacebook className=" size-8 md:size-10 text-primary-2" />
                <FaSquareInstagram className=" size-8 md:size-10 text-primary-2" />
                <AiFillTwitterCircle className=" size-8 md:size-10 text-primary-2" />
                <RiWhatsappFill className=" size-8 md:size-10 text-primary-2" />
              </div>
            </div>
          </div>
          <div className=" md:mx-6">
            <div className="">
              <h1 className="text-white text-2xl mb-7 font-bold">
                Address Company
              </h1>
              <div className="font-medium text-gray-200 text-[17px]">
                <div className="flex">
                  <FaLocationDot className="text-blue-900 mt-2" />
                  <div className="ml-3 font-light">
                    <p className="block">37 San Juan Lane</p>
                    <p className="block mb-3">
                      Graff Florisstraat 22A, 3021 CH
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  <IoIosCall className="text-blue-900 size-5" />
                  <div className="ml-3 font-light">
                    <p className="block"> Call Us: +1.809.1206705</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  <MdMail className="text-blue-900 size-5" />
                  <div className="ml-3 font-light">
                    <p className="block"> Mail: Graconstruction@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-white text-2xl mb-4 font-bold">
              Subscribe to Our News
            </h1>
            <div className="font-light text-gray-200 text-[17px] mb-3">
              <p className="block mb-6">
                Subscribe to receive the latest news from us, we make sure not
                to span your inbox.
              </p>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    className="rounded-none"
                    id="name"
                    placeholder="Your Email"
                  >
                    {/* <IoIosSend /> */}
                  </Input>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full md:w-full  h-[1px] bg-white my-10" />
        <div className="md:grid md:grid-cols-2 md:w-full">
          <div className="font-medium text-white text-[17px] mb-3">
            <p className="block m-6">
              © BLACK TECH PVT.LTD.
              <br />
              All rights reserved Copyrights 2024.
            </p>
          </div>
          <div className="md:flex hidden justify-end">
            <div className="flex gap-3 md:gap-4">
              <FaFacebook className=" size-8 md:size-10 text-primary-2" />
              <FaSquareInstagram className=" size-8 md:size-10 text-primary-2" />
              <AiFillTwitterCircle className=" size-8 md:size-10 text-primary-2" />
              <RiWhatsappFill className=" size-8 md:size-10 text-primary-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
