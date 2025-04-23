import React from "react";
import { DmProcess } from "../../constants/Constants";

function ProcessDM() {
  return (
    <>
      <h1 className="px-6 md:px-10 lg:px-20 text-2xl sm:text-3xl lg:text-5xl font-400 bg-gradient-to-r from-[#001BCB] to-[#FE55D9] animate-gradient-fill bg-clip-text text-transparent">
        Digital Strategies that Drive Results
      </h1>
      <div className="px-4 md:px-20 py-10 mb-14 space-y-16">
        {DmProcess.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full text-[#ffffff] mt-2">
              <h2 className="text-4xl font-400 mb-4">{section.title}</h2>
              <p className="text-lg text-[#ffffff]/80">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProcessDM;
