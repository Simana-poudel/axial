import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MediaLinks from "./MediaLinks";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookFill, RiWhatsappFill } from "react-icons/ri";
import { IoIosCall, IoIosSend, IoLogoSkype } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center bg-sky-blue md:pt-10 bg-primary-1">
      <div className=" md:flex max-w-7xl overflow-hidden mx-auto w-full context items-center md:justify-between ">
        <div>
          <div className="relative">
            <div className="pb-10">
              <h1 className="text-4xl font-bold pt-3 text-white">
                Ready To Work Together?
              </h1>
              <p className="text-base leading-7 my-6 text-gray-200 w-[750px]">
                Whether you have a project in mind and you're looking for a
                reliable construction partner or you're looking to take the next
                step in your career of experience, we want to hear from you.
              </p>
              <div className="flex gap-4">
                <div className="flex bg-blue-900 text-white items-center">
                  <Input
                    className="rounded-none bg-blue-900 placeholder:text-white text-white w-44 mr-2 border-none"
                    id="email"
                    placeholder="GET A QUOTE"
                  ></Input>

                  <IoIosSend className="bg-black size-10 text-white p-2 h-full cursor-pointer  " />
                </div>

                <div className="flex bg-white text-black items-center">
                  <Input
                    className="rounded-none w-44 mr-2 border-none"
                    id="email"
                    placeholder="CAREERS WITH US"
                  ></Input>

                  <IoIosSend className="bg-black size-10 p-2 text-white h-full cursor-pointer  " />
                </div>
              </div>
            </div>
            <div className="z-30 w-[500px] md:absolute md:top-[30px] lg:left-[800px] overflow-hidden md:h-80 h-52">
              <Image
                src={"/images/home/building_mini.webp"}
                alt="building"
                height={450}
                width={750}
                className="object-cover translate-x-5 translate-y-20  grayscale hue-rotate-15 filter"
              />
            </div>
          </div>
          <div className="md:flex mt-12">
            <Link href={"/projects"} className="cursor-pointer">
              <h1 className="text-white font-medium text-base uppercase mx-4 hover:text-primary-2">
                Projects
              </h1>
            </Link>
            <Link href={"/services"} className="cursor-pointer">
              <h1 className="text-white font-medium text-base uppercase mx-4 hover:text-primary-2">
                Services
              </h1>
            </Link>
            <Link href={"/blogs"} className="cursor-pointer">
              <h1 className="text-white font-medium text-base uppercase mx-4 hover:text-primary-2">
                Latest News
              </h1>
            </Link>
            <Link href={"/contactus"} className="cursor-pointer">
              <h1 className="text-white font-medium text-base uppercase mx-4 hover:text-primary-2">
                Contact Us
              </h1>
            </Link>
          </div>
          <div className="w-full md:w-[40%] h-[1px] bg-gray-200 my-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div className="flex-col">
              <div className="">
                <Image
                  src={"/assets/Artboard.svg"}
                  alt="Logo"
                  width={190}
                  height={30}
                />
              </div>
              <div className="self-end mt-8">
                <div className="flex">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/aldcorporate"
                  >
                    <RiFacebookFill className=" size-8 md:size-10 hover:text-primary-2 hover:bg-gray-600 text-gray-500 bg-gray-700 p-[10px] m-1" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/aldexpertdemo"
                  >
                    <FaLinkedin className=" size-8 md:size-10 hover:text-primary-2 hover:bg-gray-600 text-gray-500 bg-gray-700 p-[10px] m-1" />
                  </Link>{" "}
                  <Link target="_blank" href="https://www.gmail.com">
                    <MdMail className=" size-8 md:size-10 hover:text-primary-2 hover:bg-gray-600 text-gray-500 bg-gray-700 p-[10px] m-1" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/aldcorporate"
                  >
                    <GrInstagram className=" size-8 md:size-10 hover:text-primary-2 hover:bg-gray-600 text-gray-500 bg-gray-700 p-[10px] m-1" />
                  </Link>
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
                  <div className="flex bg-white text-black items-center px-1">
                    <Input
                      className="rounded-none w-96 mt-1 mr-2 border-none"
                      id="email"
                      placeholder="Your Email"
                    ></Input>

                    <IoIosSend className="bg-black size-10 text-white h-full cursor-pointer  " />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%] mx-auto  h-[1px] bg-gray-200 my-10" />
          <div className="md:grid md:grid-cols-2 md:w-full">
            <div className="font-light text-gray-200 mb-3 text-[17px]">
              <p className="block">
                Copyright &copy; 2024 ALD Corporate. All Right Reserved.
              </p>
            </div>
            <div className="md:flex hidden text-gray-200 justify-end">
              <div className="flex gap-3 md:gap-4">
                <div className="ml-3 font-light">
                  <Link href={"/privacypolicy"} className="cursor-pointer">
                    <p className="block hover:text-primary-2">
                      {" "}
                      Privacy Policy.
                    </p>
                  </Link>
                </div>
                <div className="ml-3 font-light">
                  <Link href={"/privacypolicy"} className="cursor-pointer">
                    <p className="block hover:text-primary-2"> Terms of use</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
