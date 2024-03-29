import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex items-center bg-sky-blue md:py-24 bg-primary-1">
      {/* <div className="md:flex hidden max-w-5xl mx-auto w-full flex-col items-center">
        <div className="grid grid-cols-4 gap-4 w-[100%]">
          <div className="">
            <h1 className="text-blue text-xl mb-7 font-bold">Company</h1>
            <div className="font-light text-gray">
              <a className="block mb-3" href="#">
                Why choose us
              </a>
              <a className="block mb-3" href="#">
                Review
              </a>
              <a className="block mb-3" href="#">
                Customers
              </a>
              <a className="block mb-3" href="#">
                Blog
              </a>
              <a className="block mb-3" href="#">
                Carrier
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-blue text-xl mb-7 font-bold">Production</h1>
            <div className="font-light text-gray">
              <a className="block mb-3" href="#">
                Technology
              </a>
              <a className="block mb-3" href="#">
                Products
              </a>
              <a className="block mb-3" href="#">
                Quality
              </a>
              <a className="block mb-3" href="#">
                Sales geography
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="text-blue text-xl mb-7 font-bold">Contact Us</h1>
            <div className="font-light text-gray">
              <p className="block mb-3">Address: 726/B green</p>
              <p className="block mb-6">avenue Kaski, Pokhara</p>
              <p className="block mb-4">Phone: +23 333 4444 555</p>
              <p className="block mb-3">Email: company@gmail.com</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-blue text-xl mb-7 font-bold">Newsletter</h1>
            <div className="font-light text-gray">
              <p className="block mb-6">
                Subscribe our newsletter to get updates about our services
              </p>
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Your Email" />
                  <Button className="bg-gradient-to-r from-gradient-1 to-gradient-2">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* mobile navigation */}

      <div className=" md:flex max-w-5xl mx-auto w-full  flex-col items-center">
        <div className="grid grid-cols-1 gap-4 px-4">
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
          <div className="">
            <div className="">
              <h1 className="text-white text-2xl mb-7 font-bold">Contact Us</h1>
              <div className="font-medium text-white text-[17px]">
                <p className="block">+23 333 4444 555</p>
                <p className="block mb-3">+23 333 4444 555</p>
                <p className="block">2047, Cyrus Viaduct</p>
                <p className="block mb-3">East Janayster</p>
              </div>
            </div>
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
            <div className="w-full h-[1px] bg-white my-10" />
            <div>
              <div className="font-medium text-white text-[17px] mb-3">
                <p className="block m-6 ">
                  © BLACK TECH PVT.LTD.
                  <br />
                  All rights reserved Copyrights 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
