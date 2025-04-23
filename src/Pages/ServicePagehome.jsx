import React from "react";
// import servicesVideo from "../assets/videos/servicevideo.mp4"
import { GoArrowRight } from "react-icons/go";
import { ServicesDatas } from "../constants/Constants";
const serviceVideo =
  "https://res.cloudinary.com/dn9mvkx7k/video/upload/v1745382250/servicevideo_rkseoj.mp4";
function ServicePagehome() {
  return (
    <>
      <div className="relative h-96 lg:h-screen bg-cover bg-center flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        >
          <source src={serviceVideo} type="video/mp4" />
        </video>
      </div>

      <div className="px-6 md:px-10 lg:px-20 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-500 text-white/80 mb-8 transition-all duration-300">
          Core{" "}
          <span className="bg-gradient-to-r from-[#001BCB] to-[#FF8D89] animate-gradient-fill bg-clip-text text-transparent">
            Expertise
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#001BCB] to-[#f31d1d] animate-gradient-fill bg-clip-text text-transparent">
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
