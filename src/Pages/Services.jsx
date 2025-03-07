import React from "react";
import ServicesSections from "../Components/Services/ServicesSections";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="min-h-screen w-full py-10 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#FFFFFF] md:bg-customBg"
      >
        <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="leading-none hidden md:block">
            <h2 className="text-[50px] sm:text-[80px] lg:text-[130px] font-200 text-[#FFFFFFCC]">
              Our
            </h2>
            <h2 className="ml-6 sm:ml-14 text-[50px] sm:text-[80px] lg:text-[130px] font-300 text-[#FFFFFF]">
              Services
            </h2>
          </div>
          <div className="block md:hidden">
            <h2 className="text-5xl font-300 text-[#121212]">Our Services</h2>
          </div>
          <p className="mt-4 sm:mt-6 px-0 md:px-10 text-base sm:text-lg lg:text-xl font-300 text-[#000000] md:text-[#FFFFFF] tracking-[0.85px] leading-relaxed sm:leading-normal">
            We offer marketing, social branding, website and app development,
            and SEO services. Our solutions enhance online presence, engage
            audiences, and drive business growth through strategic branding,
            innovative technology, and result-driven marketing, ensuring lasting
            impact and success in the digital space.
          </p>
        </div>
        <div className="border-b-[2px] border-[#3A3A3A] mx-0 sm:mx-6 mb-4"></div>
        <ServicesSections />
      </section>
    </>
  );
};

export default Services;
