import React from "react";
import { brandingProcess } from "../../constants/Constants";
function ProcessBranding() {
  return (
    <div className="space-y-8 px-4 md:px-24 py-16">
      <div>
        <h1 className="text-2xl pb-4 sm:text-3xl lg:text-7xl font-400 bg-gradient-to-r from-[#001BCB] to-[#FE55D9] animate-gradient-fill bg-clip-text text-transparent">
          Strategies of Branding
        </h1>
      </div>
      {brandingProcess.map((section, index) => (
        <div
          key={index}
          className=" rounded-xl py-6 px-16 ml-0 "
        >
          <div
            className={`flex flex-col md:flex-row ${
              section.reverse ? "md:flex-row-reverse" : ""
            } gap-6`}
          >
            <div className=" z-10 flex">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg object-cover h-72"
              />
            </div>
            <div className="w-3/5 text-white mx-10 flex flex-col justify-center ">
              <h2 className="text-xl md:text-5xl font-normal mb-2 capitalize underline underline-offset-[12px]">
                {section.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mt-4 text-justify">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessBranding;
