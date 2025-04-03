import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { servicesTechno } from "../../constants/Constants";
import { BsArrowRight } from "react-icons/bs";

function ServicesTechno() {
  const [openIndex, setOpenIndex] = useState({ col: null, index: null });

  const toggleDropdown = (column, index) => {
    setOpenIndex((prev) =>
      prev.col === column && prev.index === index
        ? { col: null, index: null }
        : { col: column, index }
    );
  };

  return (
    <div className="px-6 lg:px-20 pt-16 pb-8 md:pb-16 bg-[radial-gradient(60%_60%_at_100%_50%,#010741_0%,rgba(2,6,52,0)_80%)] ">
      <h1 className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl font-400 mb-8">
        Technology Solutions We Provide
      </h1>
      <div className="text-[#FFFFFF] py-4 mt-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {servicesTechno.map((columnServices, colIndex) => (
            <div key={colIndex} className="space-y-4 sm:space-y-8">
              {columnServices.map((service, index) => (
                <div key={index}>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-400 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleDropdown(colIndex, index)}
                  >
                    {service.title}
                    <span className="text-xl sm:text-2xl">
                      {openIndex.col === colIndex &&
                      openIndex.index === index ? (
                        <HiMinus />
                      ) : (
                        <HiPlus />
                      )}
                    </span>
                  </h3>
                  <div
                    className={`${
                      openIndex.col === colIndex && openIndex.index === index
                        ? "max-h-96"
                        : "max-h-0"
                    } overflow-hidden text-md sm:text-lg font-300 text-[#FFFFFF]/90 mt-2 duration-500 ease-in-out transition-max-height`}
                  >
                    {service.details}
                  </div>
                  <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center items-center justify-center mt-0 md:mt-10">
      <button className="bg-[#003ad6] text-white w-60 h-14 px-6 sm:px-8 py-2 mt-6 sm:mt-8 md:mt-0 rounded-md border border-[#003ad6] transition-colors duration-300  group">
            <a
              href="#connect"
              className="flex items-center justify-center gap-6"
            >
              GET A QUOTE
              <BsArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-3" />
            </a>
          </button>
      </div>
    </div>
  );
}

export default ServicesTechno;
