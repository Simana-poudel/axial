import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const DealingWithWorries = () => {
  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className="md:flex max-w-7xl items-center justify-between text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="md:flex-col md:items-center">
            <div className="flex">
              <div className=" w-10 h-[2px] bg-primary-2 my-2 mr-4" />
              <span className="text-black font-medium text-base uppercase">
                Dealing with your questions
              </span>
            </div>
            <h1 className="text-5xl font-bold md:max-w-full max-w-[600px] py-4">
              Got A Question? <br />
              <span className="text-secondary-1">Get Your Answer!</span>
            </h1>
            <p className="text-lg leading-7 my-5 md:max-w-full lg:max-w-[500px]">
              We are easily accessible with locations across Australia. Feel
              free to reach out to us for all your construction needs and
              inquiries. Our team is ready to assist you.
            </p>
            <Button className="bg-primary-2 uppercase text-black font-bold text-lg md:max-w-min hover:bg-primary-2 md:my-3 px-8 w-full rounded-none">
              Contact Us
            </Button>
          </div>

          <div>
            <div className="border border-secondary-1 p-4 mt-5">
              <h5 className="text-lg text-secondary-1 font-bold max-w-[600px]">
                What services does ALD Corporate offer?
              </h5>
              <p className="text-[17px] leading-6">
                ALD Corporate provides a range of services including structural
                demolition, strip out & demolition, labour hire, asbestos
                removal, floor grinding, waste management, and final cleaning,
                among others.
              </p>
            </div>
            <div className="border border-secondary-1 p-4 mt-5">
              <h5 className="text-lg text-secondary-1 font-bold max-w-[600px]">
                How can I contact ALD Corporate?{" "}
              </h5>
              <p className="text-[17px] leading-6">
                You can reach us at any of our regional offices located in NSW,
                SA, ACT, VIC, and QLD. Contact details are available on our
                website, including email addresses and phone numbers for each
                location or you can
                <Link className="underline text-secondary-1" href={"/request"}>
                  {" "}
                  click on this link{" "}
                </Link>
                to contact us.
              </p>
            </div>
            <div className="border border-secondary-1 p-4 mt-5">
              <h5 className="text-lg text-secondary-1 font-bold max-w-[600px]">
                What industries does ALD Corporate serve?
              </h5>
              <p className="text-[17px] leading-6">
                We work across various sectors including commercial,
                residential, healthcare, retail, hospitality, government, and
                institutional projects.
              </p>
            </div>
            <div className="border border-secondary-1 p-4 mt-5">
              <h5 className="text-lg text-secondary-1 font-bold max-w-[600px]">
                How does ALD Corporate ensure quality in its services?
              </h5>
              <p className="text-[17px] leading-6">
                We maintain high standards of quality through meticulous
                attention to detail, regular training, and continuous
                improvement processes. Customer satisfaction is paramount to us,
                and we strive to deliver excellence in all our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealingWithWorries;
