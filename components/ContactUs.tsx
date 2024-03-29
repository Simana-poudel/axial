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

const ContactUs = () => {
  return (
    <div className="flex items-center bg-white py-4">
      <div className="md:flex max-w-5xl mx-auto w-full flex-col items-center">
        <div className="px-4">
          <div className="" />
          <span className="uppercase">Contact us</span>
          <h1 className="text-4xl font-bold max-w-[600px] py-8">
            Do Yo Have any <span className="text-secondary-1">Questions ?</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-4 gap-0 w-[90%] px-4">
          <div className="col-span-3 w-[100%] justify-self-start">
            <form>
              <div className="grid w-full items-center gap-4 mb-4">
                <div className="">
                  <Input
                    className="rounded-none "
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="">
                  <Input
                    className="rounded-none "
                    id="phone"
                    placeholder="Phone"
                  />
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
          <div className="flex-col py-4 items-center justify-center">
            <h1 className="text-lg font-bold my-4">
              Are You Going to Implement Project?
            </h1>
            <div className=" mb-4">
              <h1 className="text-grey font-medium text-[17px]">Address</h1>
              <div className="text-lg font-semibold">
                <span className=" ">Newyork, USA</span>
                <p className="mb-3">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className=" mb-4">
              <h1 className="text-grey font-medium text-[17px]">Email</h1>
              <div className="text-lg font-semibold">
                <span className=" ">info@construct.com</span>
                <p className="mb-3">support@construct.com</p>
              </div>
            </div>
            <div className=" mb-4">
              <h1 className="text-grey font-medium text-[17px]">Phone</h1>
              <div className="text-lg font-semibold">
                <span className=" ">1-902-909-9098</span>
                <p className="mb-3">1-222-333-5678</p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaFacebook className=" size-8 hover:text-primary-2" />
              <FaSquareInstagram className=" size-8 hover:text-primary-2" />
              <AiFillTwitterCircle className=" size-8 hover:text-primary-2" />
              <RiWhatsappFill className=" size-8 hover:text-primary-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;