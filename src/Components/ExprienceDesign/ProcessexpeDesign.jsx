import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { processExpeDesign } from "../../constants/Constants";

function ProcessexpeDesign() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 py-0 pb-8 md:py-10 space-y-6 text-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-300 pb-2 bg-gradient-to-r from-[#001BCB] to-[#FE55D9] animate-gradient-fill bg-clip-text text-transparent">
        Crafting Experiences <br />
      </h1>
      {processExpeDesign.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-700 py-8 px-4 sm:px-8 md:px-12 lg:px-16"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left group gap-4"
          >
            <div className="flex items-start gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl leading-none text-white">
                •
              </span>
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-400 mb-4">
                  {item.title}
                </h3>
                <p className="max-w-full sm:max-w-xl md:max-w-2xl text-base sm:text-lg text-[#ffffff]/90">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <FaArrowDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </div>
          </button>

          {openIndex === index && (
            <p className=" ml-4 md:ml-6 mt-3 max-w-full sm:max-w-2xl md:max-w-3xl text-base sm:text-lg text-[#ffffff]/70 transition-all duration-300">
              {item.dropDown}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProcessexpeDesign;
