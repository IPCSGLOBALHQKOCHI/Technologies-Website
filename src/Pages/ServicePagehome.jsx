import React from "react";
import servicesbg from "../assets/images/servicesbg.png";
import { GoArrowRight } from "react-icons/go";
import { ServicesDatas } from "../constants/Constants";

function ServicePagehome() {
  return (
    <>
      <div className="relative h-60 sm:h-72 md:h-96 bg-cover bg-center flex items-center justify-center">
        <img
          src={servicesbg}
          alt="techno"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="text-[#FFFFFF] text-4xl sm:text-6xl md:text-[100px] lg:text-[140px] xl:text-[180px] font-200 mt-12 md:mt-6 leading-none">
            Services
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-20 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal text-white/80 mb-8 transition-all duration-300">
          Our{" "}
          <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <div className="text-white space-y-24">
          {ServicesDatas.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-auto max-h-[80vh] object-cover rounded-md"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-600 bg-gradient-to-r from-[#6A7AFF] to-[#B158FF] bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-[#ffffff]/70 font-400 mt-4 mb-6 text-sm sm:text-base">
                  {section.description}
                </p>

                <a href={section.link}>
                  <div className="space-y-4">
                    {section.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between border-b-2 border-gray-600 px-4 py-3 hover:bg-[#1a1a1a] transition text-sm sm:text-base"
                      >
                        <span>{service}</span>
                        <GoArrowRight className="w-5 h-5 text-[#ffffff] hover:text-[#003ad6]" />
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicePagehome;
