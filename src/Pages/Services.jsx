import React from "react";
import ServicesSections from "../Components/Services/ServicesSections";

const Services = () => {
  return (
    <>
    <section id="services" className="min-h-screen w-full py-10 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none">
          <h2 className="text-[50px] sm:text-[80px] lg:text-[130px] font-200 text-[#FFFFFFCC]">
            Our
          </h2>
          <h2 className="ml-6 sm:ml-14 text-[50px] sm:text-[80px] lg:text-[130px] font-300 text-[#FFFFFF]">
            Services
          </h2>
        </div>
        <p className="mt-4 sm:mt-6 lg:mt-0 lg:ml-20 text-base sm:text-lg lg:text-xl font-200 max-w-md sm:max-w-xl text-[#FFFFFFCC] tracking-[0.15px] leading-relaxed sm:leading-normal">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor
        </p>
      </div>
      <div className="border-b-[2px] border-[#3A3A3A] mx-0 sm:mx-6 mb-4"></div>
      <ServicesSections />
    </section>
    </>
  );
};

export default Services;