import React, { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { technologyProcess } from "../../constants/Constants";

function OurProcess() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen py-24 px-6 sm:px-6 md:px-16 lg:px-32 xl:px-40 2xl:px-48  ">
      <h1 className="text-5xl md:text-8xl text-[#D6DBFF] font-300">
        Our{" "}
        <span className="font-500 bg-gradient-to-r from-[#001BCB] to-[#B7C0FF] bg-clip-text text-transparent">
          Process
        </span>
      </h1>
      <div className="mt-16 hidden md:flex ">
        <div className="w-1/2 border-r border-white px-12">
          {technologyProcess
            .filter((step) => step.side === "left")
            .map((step) => (
                <div
                key={step.id}
                className="relative border rounded-lg border-[#c0bebe99]
                hover:bg-[linear-gradient(79deg,rgba(19,32,37,0)_0%,rgba(0,28,160,0.5)_100%)]
                transition-all duration-300 mb-8 p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-4xl font-600 text-[#ffffff]">{step.title}</h2>
                    <p className="text-[#ffffffcc] text-xl font-500 mt-4">{step.description}</p>
                    <div className="w-full border-b-[1px] border-[#3A3A3A] mt-3"></div>
                  </div>
                  <span className="text-6xl font-400 text-[#FFFFFF] mb-14">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <button
                  className="absolute bottom-4 right-4 mr-2 text-[#ffffff] transition-transform duration-300"
                  onClick={() => toggleDropdown(step.id)}
                >
                  {openDropdown === step.id ? (
                    <HiOutlineMinus className="w-8 h-8" />
                  ) : (
                    <AiOutlinePlus className="w-8 h-8" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openDropdown === step.id ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-[#FFFFFF99] font-400 text-lg rounded-lg mr-4">
                    <p>{step.dropdown}</p>
                  </div>
                </div>
              </div>
              
            ))}
        </div>

        <div className="w-1/2 px-12">
          {technologyProcess
            .filter((step) => step.side === "right")
            .map((step) => (
                <div
                key={step.id}
                className="relative border border-[#c0bebe99] rounded-lg mb-8 p-6 transition-all duration-300 group hover:bg-[linear-gradient(79deg,rgba(19,32,37,0)_0%,rgba(0,28,160,0.5)_100%)]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-4xl font-600 text-[#ffffff]">{step.title}</h2>
                    <p className="text-[#ffffffcc] text-xl font-500 mt-4">{step.description}</p>
                    <div className="w-full border-b-[1px] border-[#3A3A3A] mt-3"></div>
                  </div>
                  <span className="text-6xl font-400 text-[#ffffff] mb-14">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <button
                  className="absolute bottom-4 right-4 mr-2 text-[#ffffff] transition-transform duration-300"
                  onClick={() => toggleDropdown(step.id)}
                >
                  {openDropdown === step.id ? (
                    <HiOutlineMinus className="w-8 h-8" />
                  ) : (
                    <AiOutlinePlus className="w-8 h-8" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openDropdown === step.id ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-[#ffffff99] font-400 text-lg rounded-lg mr-4">
                    <p>{step.dropdown}</p>
                  </div>
                </div>
              </div>
              
            ))}
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col mt-12 space-y-8 md:hidden">
        {technologyProcess.map((step, index) => (
          <div
            key={step.id}
            className={`relative border border-[#c0bebe99] bg-[linear-gradient(79deg,rgba(19,32,37,0)_0%,rgba(0,28,160,0.5)_100%)] rounded-lg p-6 flex flex-col ${
            index % 2 === 0 ? "items-start" : "items-end"
          }`}
          >
            <div className="w-full flex justify-between">
              <h2 className="text-2xl font-500 text-[#ffffff]">{step.title}</h2>
              <span className="text-5xl font-400 text-[#D6DBFF]">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>

            <div className="flex justify-between items-center w-full ">
              <p className="text-[#dad8d8cc] text-lg font-300 ">
                {step.description}
              </p>

              <button
                className="text-[#D6DBFF] transition-transform duration-300 mt-8"
                onClick={() => toggleDropdown(step.id)}
              >
                {openDropdown === step.id ? (
                    <HiOutlineMinus className="w-5 h-5" />
                ) : (
                    <AiOutlinePlus className="w-5 h-5" />
                )}
              </button>
            </div>
                <div className="w-full border-b-[1px] border-[#3A3A3A] mt-3"></div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDropdown === step.id
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-[#ffffff99] text-base rounded-lg">
                <p>{step.dropdown}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProcess;
