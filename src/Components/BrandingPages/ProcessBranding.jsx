import React from "react";
import { brandingProcess } from "../../constants/Constants";

function ProcessBranding() {
  return (
    <div className="space-y-8 px-4 md:px-24 py-0 md:py-16">
      <div>
        <h1 className="pb-4 text-5xl lg:text-7xl font-400 bg-gradient-to-r from-[#001BCB] to-[#FE55D9] animate-gradient-fill bg-clip-text text-transparent">
          Strategies of Branding
        </h1>
      </div>
      {brandingProcess.map((section, index) => (
        <div key={index} className="rounded-xl py-0 md:py-6 px-4 sm:px-6 md:px-10 lg:px-16">
          <div
            className={`flex flex-col md:flex-row ${
              section.reverse ? "md:flex-row-reverse" : ""
            } gap-6`}
          >
            <div className="z-10 flex justify-center md:justify-start w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[20rem] 2xl:h-[26rem]"
              />
            </div>
            <div className="w-full md:w-1/2 text-white md:mx-6 lg:mx-10 flex flex-col justify-center">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-normal mb-2 capitalize underline underline-offset-[12px]">
                {section.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg mt-4 text-justify">
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
