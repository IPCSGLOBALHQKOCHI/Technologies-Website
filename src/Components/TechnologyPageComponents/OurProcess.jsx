import React, { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { steps } from "../../constants/Constants";

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
          {steps
            .filter((step) => step.side === "left")
            .map((step) => (
              <div
                key={step.id}
                className="relative bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)] backdrop-blur-[1px] rounded-lg mb-48 p-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-4xl font-500 text-[#ffffff]">
                      {step.title}
                    </h2>
                    <p className="text-[#ffffffcc] text-xl font-300 mt-4">
                      {step.description}
                    </p>
                  </div>
                  <span className="text-6xl font-400 text-[#D6DBFF] mb-14">
                    {String(step.id).padStart(2, "0")}
                  </span>
                </div>
                <button
                  className="absolute bottom-4 right-4 mr-2 text-[#D6DBFF] transition-transform duration-300"
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
                    openDropdown === step.id
                      ? "max-h-40 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-white text-lg rounded-lg mr-4">
                    <p>{step.dropdown}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-1/2 px-12 mt-48">
          {steps
            .filter((step) => step.side === "right")
            .map((step) => (
              <div
                key={step.id}
                className="relative bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)] backdrop-blur-[1px] rounded-lg mb-48 p-6"
              >
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-6xl font-400 text-[#D6DBFF] mb-14">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-500 text-[#ffffff]">
                      {step.title}
                    </h2>
                    <p className="text-[#ffffffcc] text-xl font-300 mt-4">
                      {step.description}
                    </p>
                  </div>
                </div>
                <button
                  className="absolute bottom-4 left-4 ml-6 text-[#D6DBFF] transition-transform duration-300"
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
                    openDropdown === step.id
                      ? "max-h-40 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-white text-lg  rounded-lg ml-24">
                    <p>{step.dropdown}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
{/* mobile */}
      <div className="flex flex-col mt-12 space-y-8 md:hidden">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)]
          backdrop-blur-[1px] rounded-lg p-6 flex flex-col ${
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
            <p className="text-[#ffffffcc] text-lg font-300 ">
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
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openDropdown === step.id
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-white text-base rounded-lg">
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
