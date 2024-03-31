import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MediaLinks from "./MediaLinks";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex items-center bg-sky-blue md:pt-10 bg-primary-1">
      <div className=" md:flex max-w-7xl mx-auto w-full  flex-col items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          <div>
            <div className="">
              <Image
                src={"/images/ALD Logo/PNG/Artboard 1@4x.png"}
                alt="Logo"
                width={150}
                height={30}
              />
            </div>
            <p className=" text-lg text-white">
              Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
              habitasse platea. Velit egestas
            </p>
          </div>
          <div className=" md:mx-6">
            <div className="">
              <h1 className="text-white text-2xl mb-7 font-bold">Contact Us</h1>
              <div className="font-medium text-white text-[17px]">
                <p className="block">+23 333 4444 555</p>
                <p className="block mb-3">+23 333 4444 555</p>
                <p className="block">2047, Cyrus Viaduct</p>
                <p className="block mb-3">East Janayster</p>
              </div>
            </div>
          </div>
          <div className="md:mx-6">
            <h1 className="text-white text-2xl mb-7 font-bold">Company</h1>
            <div className="font-medium text-white text-[17px]">
              <a className="block mb-3" href="#">
                About
              </a>
              <a className="block mb-3" href="#">
                Service
              </a>
              <a className="block mb-3" href="#">
                Project
              </a>
              <a className="block mb-3" href="#">
                Blog
              </a>
              <a className="block mb-3" href="#">
                Request/Quote
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-white text-2xl mb-4 font-bold">
              Subscribe to Our News
            </h1>
            <div className="font-medium text-white text-[17px] mb-3">
              <p className="block mb-6">
                Subscribe our newsletter to get updates about our services
              </p>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    className="rounded-none"
                    id="name"
                    placeholder="Your Email"
                  />
                  <Button className="bg-primary-2 mb-4 uppercase text-black font-bold text-lg hover:bg-primary-2 px-8 w-full rounded-none">
                    Suscribe
                  </Button>
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
