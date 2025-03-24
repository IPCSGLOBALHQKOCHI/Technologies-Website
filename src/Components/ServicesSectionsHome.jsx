import React from "react";
// import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { servicesSections } from "../constants/Constants";
const ServicesSections = () => {
  return (
    <section className="px-0 sm:px-6 pb-10 sm:pb-14 lg:pb-0 w-full ">
      {servicesSections.map((section, index) => (
        <div key={index} className="relative group mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-customBg px-6 py-4 rounded-md ">
            {index % 2 === 0 ? (
              <>
                <div className=" group w-full lg:max-w-[50%] mb-8 lg:mb-14">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl  text-[#FFFFFF] font-400">
                      {section.title}
                    </h2>
                    <div className="lg:hidden">
                      <a
                        href={section.href}
                        className="w-10 h-10 flex items-center justify-center text-white bg-[#003ad6] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      >
                        <BsArrowRight className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-200 text-[#FFFFFFCC] mt-6 sm:mt-10">
                    {section.desc}
                  </p>
                  <div className="hidden md:block group">
                    <a
                      href={section.href}
                      className="flex items-center space-x-4 text-[#FFFFFF] mt-4 transition-all duration-300 group-hover:text-[#003ad6]"
                    >
                      <span className="text-xl">Learn More</span>
                      <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-4" />
                    </a>
                  </div>
                </div>
                {/* Show number on desktop, hide on mobile */}
                <p className="hidden lg:block text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
              </>
            ) : (
              <>
                {/* Show number on desktop, hide on mobile */}
                <p className="hidden lg:block text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
                <div className=" group w-full lg:max-w-[50%] mb-8 lg:mb-14">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-400">
                      {section.title}
                    </h2>
                    {/* Show arrow on mobile, hide on desktop */}
                    <div className="lg:hidden">
                      <a
                        href={section.href}
                        className="w-10 h-10 flex items-center justify-center text-white bg-[#003ad6] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      >
                        <BsArrowRight className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-200 text-[#FFFFFFCC] mt-6 sm:mt-10">
                    {section.desc}
                  </p>
                  <div className="hidden md:block group">
                    <a
                      href={section.href}
                      className="flex items-center space-x-4 text-[#FFFFFF] mt-4 transition-all duration-300 group-hover:text-[#003ad6]"
                    >
                      <span className="text-xl">Learn More</span>
                      <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-4" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" hidden md:block w-full border-b-[2px] border-[#3A3A3A] mt-0 sm:mt-12 lg:-mt-40 mb-4"></div>
        </div>
      ))}
      <div className="flex justify-center items-center w-full mt-2 sm:mt-16 lg:min-h-[250px]">
        <button className="bg-[#003ad6] text-[#FFFFFF] px-8 py-4 w-72 rounded-md group">
          <a
            href="/connect-us"
            className="text-2xl font-400 inline-flex items-center"
          >
            Let's Talk
            <BsArrowRight className="ml-5 mt-1 transition-transform duration-300 group-hover:translate-x-3" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default ServicesSections;
