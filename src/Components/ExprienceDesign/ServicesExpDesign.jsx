import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { servicesExpeDesign } from "../../constants/Constants";
const ExpeVideo =
  "https://res.cloudinary.com/dn9mvkx7k/video/upload/v1745479219/uiuxvideo_bn7o5c.mp4";
const ExpevideoMob ="https://res.cloudinary.com/dn9mvkx7k/video/upload/v1745900707/uiuxmob_grhlwo.mp4"  
function ServicesExpDesign() {
  const [openIndexes, setOpenIndexes] = useState([null, null]);

  const toggleDropdown = (column, index) => {
    setOpenIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[column] = newIndexes[column] === index ? null : index;
      return newIndexes;
    });
  };
  return (
    <div className="px-6 lg:px-20 pt-16 pb-32">
      <h1 className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl font-400 mb-8 ">
        Experience Design Solutions We Provide
      </h1>
      <div className="text-[#FFFFFF] py-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {servicesExpeDesign.map((columnServices, colIndex) => (
            <div key={colIndex} className="space-y-4 sm:space-y-8">
              {columnServices.map((service, index) => (
                <div key={index}>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-400 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleDropdown(colIndex, index)}
                  >
                    {service.title}
                    <span className="text-xl sm:text-2xl">
                      {openIndexes[colIndex] === index ? (
                        <HiMinus />
                      ) : (
                        <HiPlus />
                      )}
                    </span>
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 mt-2 font-300">
                    {service.description}
                  </p>
                  <div
                    className={`${
                      openIndexes[colIndex] === index ? "max-h-96" : "max-h-0"
                    } overflow-hidden text-md sm:text-lg font-300 text-[#FFFFFF]/90 mt-2 duration-500 ease-in-out transition-max-height`}
                  >
                    {service.details}
                  </div>
                  <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full h-auto mt-20 hidden md:block">
          <video
            className="w-full h-[80svh] object-cover rounded-lg shadow-lg"
            muted
            loop
            autoPlay
            preload="auto"
            playsInline
          >
            <source src={ExpeVideo} type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-auto mt-20 block md:hidden">
        <video
          className="w-full h-[80svh] object-cover rounded-lg shadow-lg"
          muted
          loop
          autoPlay
          preload="auto"
          playsInline
        >
          <source src={ExpevideoMob} type="video/mp4" />
        </video>
      </div>
      </div>
    </div>
  );
}

export default ServicesExpDesign;
