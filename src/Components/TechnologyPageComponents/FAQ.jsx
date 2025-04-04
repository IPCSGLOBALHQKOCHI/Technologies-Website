import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { servicesfaq } from "../../constants/Constants";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pb-6 md:py-20 px-6 sm:px-6 md:px-16 lg:px-32 xl:px-40 2xl:px-48">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-500 text-[#ffffff] mb-8 md:mb-12">
        FAQ
      </h1>
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {servicesfaq.map((service, index) => (
          <div
            key={index}
            className="border-b-2 border-b-[#000000] pb-4 p-4 bg-[#F3F3F3] rounded-t-lg shadow-sm"
          >
            <button
              className="w-full text-left text-lg sm:text-xl md:text-2xl font-semibold flex justify-between items-center"
              onClick={() => toggleDropdown(index)}
            >
              {service.title}
              {openIndex === index ? (
                <HiMinus className="text-2xl md:text-3xl" />
              ) : (
                <HiPlus className="text-2xl md:text-3xl" />
              )}
            </button>
            <div
              className={`transition-all overflow-hidden duration-500 ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-md md:text-lg text-[#000000]/90 mt-2">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
