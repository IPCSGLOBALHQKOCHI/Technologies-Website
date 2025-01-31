import React from "react";
import ServicesSections from "../Components/Services/ServicesSections";

const Services = () => {
  return (
    <section className="min-h-screen py-20 px-6 lg:px-20">
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none tracking-[2.68px]">
          <h2 className="text-[130px] font-200 text-[#FFFFFFCC]">Our</h2>
          <h2 className="ml-14 text-[130px] font-400 text-[#FFFFFF]">
            Services
          </h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 text-xl max-w-xl text-[#FFFFFFCC] tracking-[0.56px] leading-normal">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor
        </p>
      </div>
        <div className="border-b-[2px] border-[#3A3A3A] mx-6"></div>
        <ServicesSections/>
    </section>
  );
};

export default Services;
