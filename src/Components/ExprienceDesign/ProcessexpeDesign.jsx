import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { processExpeDesign } from "../../constants/Constants";
function ProcessexpeDesign() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" mx-auto px-40 py-10 space-y-6 text-white">
      <h1 className="text-8xl font-300">
        Crafting Experiences <br />
        {/* <span className="text-6xl font-500" >That Inspire, Engage, and Deliver</span> */}
      </h1>
      {processExpeDesign.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-8 px-16">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left group"
          >
            <div className="flex items-start gap-2">
              <span className="text-4xl leading-none text-white">•</span>
              <div>
                <h3 className="text-xl md:text-5xl font-light mb-4">{item.title}</h3>
                <p className="max-w-4xl text-lg text-[#ffffff]/80">{item.description}</p>
              </div>
            </div>

            <FaArrowDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              size={28}
            />
          </button>

          {openIndex === index && (
            <p className="ml-7 mt-3 max-w-4xl text-lg text-[#ffffff]/70 transition-all duration-300">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProcessexpeDesign;
