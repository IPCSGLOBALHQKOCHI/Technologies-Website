import React from "react";
import servicesbg from "../assets/images/servicesbg.png";
import { GoArrowRight } from "react-icons/go";
import dmservice from "../assets/images/dmservice.png"
const sectionsData = [
  {
    title: "Digital Marketing",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    imageUrl:dmservice,
    services: [
      "Brand Consulting",
      "Brand Identity",
      "Logo Design",
      "Brand Collateral",
      "2D/3D Visualization",
      "Product Design",
    ],
  },
  {
    title: "Branding",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    imageUrl: "/images/branding.png",
    services: [
      "Brand Consulting",
      "Brand Identity",
      "Logo Design",
      "Brand Collateral",
      "2D/3D Visualization",
      "Product Design",
    ],
  },
  // 🔁 Add more sections here
];
function ServicePagehome() {
  return (
    <>
      <div className=" relative  h-60 md:h-96 bg-cover bg-center flex items-center justify-center">
        <img
          src={servicesbg}
          alt="techno"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-[#FFFFFF] text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-200 mt-12 md:mt-6">
            Services
          </div>
        </div>
      </div>
      <div className="p-20">
      <h1 className="text-5xl sm:text-5xl lg:text-7xl font-normal text-white/80 px-2 sm:px-6 mb-8 transition-all duration-300">
          Our{" "}
          <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <div className=" text-white py-16 px-4 md:px-10 space-y-24">
          {sectionsData.map((section, index) => (
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
                  className="w-full h-[80vh]"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-600  bg-gradient-to-r from-[#6A7AFF] to-[#B158FF] bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-[#ffffff]/70 font-400 mt-4 mb-6">{section.description}</p>
                <div className="space-y-4">
                  {section.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b-2 border-gray-600 px-4 py-3 hover:bg-[#1a1a1a] transition"
                    >
                      <span>{service}</span>
                      <GoArrowRight className="w-5 h-5 text-[#ffffff] hover:text-[#003ad6]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicePagehome;
