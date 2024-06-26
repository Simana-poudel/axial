import React from "react";
import { FaFacebook } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import MediaLinks from "./MediaLinks";

const ContactUs = () => {
  return (
    <div className="flex items-center bg-white py-10">
      <div className="md:flex max-w-7xl mx-auto w-full flex-col items-center md:py-6">
        <div className="grid lg:grid-cols-3 lg:gap-4 gap-0 w-[90%] lg:w-full px-4 md:self-start lg:py-10">
          <div className="col-span-2 lg:w-[95%] w-[100%] justify-self-start">
            <div className="px-4 md:self-start">
              <div className="flex">
                <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
                <span className="text-black font-medium text-base uppercase">
                  Contact Us
                </span>
              </div>
              <h1 className="text-4xl md:text-[40px] font-bold max-w-[600px] py-8">
                Your Inquiry, Our Priority <br />
                <span className="text-secondary-1">Leave Us Your Info</span>
              </h1>
            </div>

            <form>
              <div className="grid w-full items-center gap-4 mb-4">
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <div className="">
                    <Input
                      className="rounded-none w-full"
                      id="name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="">
                    <Input
                      className="rounded-none w-full "
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="">
                  <Input
                    className="rounded-none "
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="">
                  <Textarea className="rounded-none " placeholder="Message" />
                </div>
              </div>
            </form>
            <Button className="bg-primary-2 mb-4 uppercase text-black font-bold text-lg hover:bg-primary-2 px-8 w-full rounded-none">
              send message
            </Button>
          </div>
          <div className="flex-col py-4 items-center justify-center lg:justify-end">
            <h1 className="text-lg md:text-[26px] md:w-[300px] md:my-6 font-bold my-4">
              Are You Going to Implement Project?
            </h1>

            <div className=" mb-4 md:mb-6">
              <h1 className="text-grey font-medium text-[17px]">Email</h1>
              <div className="text-lg font-medium ">
                <p className="mb-1">
                  NSW:{" "}
                  <span className="text-gray-700">
                    estimator@aldcorporate.com.au
                  </span>
                </p>
                <p className="mb-1">
                  SA:{" "}
                  <span className="text-gray-700">
                    cavic@aldcorporate.com.au
                  </span>
                </p>
                <p className="mb-1">
                  ACT:{" "}
                  <span className="text-gray-700">
                    estimatoract@aldcorporate.com.au
                  </span>
                </p>
                <p className="mb-1">
                  VIC:{" "}
                  <span className="text-gray-700">
                    estimator@aldcorporate.com.au
                  </span>
                </p>
                <p className="mb-1">
                  QLD:{" "}
                  <span className="text-gray-700">
                    estimatorqld@aldcorporate.com.au
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
