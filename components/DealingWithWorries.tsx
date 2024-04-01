"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const DealingWithWorries = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // Initialize with 0

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Toggle to -1 if clicked question is already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  const faqData = [
    {
      question: "What services does ALD Corporate offer?",
      answer:
        "We work across various sectors including commercial, residential, healthcare, retail, hospitality, government, and institutional projects.",
    },
    {
      question: "How can I contact ALD Corporate?",
      answer:
        "You can reach us at any of our regional offices located in NSW, SA, ACT, VIC, and QLD. Contact details are available on our website, including email addresses and phone numbers for each location.",
    },
    {
      question: "What industries does ALD Corporate serve?",
      answer:
        "We work across various sectors including commercial, residential, healthcare, retail, hospitality, government, and institutional projects.",
    },
    {
      question: "How does ALD Corporate ensure quality in its services?",
      answer:
        "We maintain high standards of quality through meticulous attention to detail, regular training, and continuous improvement processes. Customer satisfaction is paramount to us, and we strive to deliver excellence in all our services.",
    },
  ];

  return (
    <div className="flex items-center p-4 md:py-10 lg:py-10">
      <div className="max-w-7xl text-sm context w-full mx-auto">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="md:flex-col md:items-center mt-40">
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
          <div className=" w-full col-span-1">
            {faqData.map((faq, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`border p-4 mt-5 cursor-pointer ${
                  expandedIndex === index ? "border-secondary-1" : ""
                } transition duration-500 delay-1000	 ease-in-out`}
              >
                <div className="flex justify-between">
                  <h5
                    className={`text-2xl p-7 pl-2 ${
                      expandedIndex === index ? "text-secondary-1" : ""
                    }   font-bold `}
                  >
                    {faq.question}
                  </h5>
                  <p>
                    <span className="text-secondary-1 text-2xl font-bold">
                      {expandedIndex === index ? "-" : "+"}
                    </span>
                  </p>
                </div>
                {expandedIndex === index && (
                  <p className="text-[17px] pl-2 leading-6">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealingWithWorries;
