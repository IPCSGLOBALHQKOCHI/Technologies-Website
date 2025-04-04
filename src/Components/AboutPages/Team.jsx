import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { teamMembers } from "../../constants/Constants";
function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-auto overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full overflow-hidden">
        <p className="text-[15rem] font-bold uppercase text-[#ffffff15] whitespace-nowrap animate-marquee">
          #{teamMembers[activeIndex].name} #{teamMembers[activeIndex].name} #
        </p>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row p-6 sm:p-12 md:p-16 lg:p-24">
          <div className="w-full lg:w-1/2 font-200 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#ffffffcc]">
            Expert
            <br />
            <span className="font-500 text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent ml-12 sm:ml-20 md:ml-28 lg:ml-36">
              Team
            </span>
          </div>
          <div className="w-full lg:w-1/2 flex py-4 sm:py-8 md:py-12 lg:py-16">
            <p className="text-lg sm:text-xl md:text-2xl font-300 text-[#ffffff]">
              Our expert team drives branding, technology, and digital
              marketing, crafting powerful identities
              and strategic campaigns that fuel business growth, captivate
              audiences, and lead the digital frontier.
            </p>
          </div>
        </div>
        <div className="bg-[#FFFFFF0A] flex flex-col lg:flex-row items-center justify-center pt-8 sm:pt-12 md:pt-14 lg:pt-16 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 md:px-16 lg:px-24">
            <div className="text-start">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-400 text-[#ffffff] whitespace-nowrap">
                {teamMembers[activeIndex].name}
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-200 text-[#ffffffcc] mt-0 md:mt-2">
                {teamMembers[activeIndex].role}
              </p>
            </div>
            <img
              src={teamMembers[activeIndex].image}
              alt={teamMembers[activeIndex].name}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-[35rem] lg:h-[35rem] object-contain mt-6 lg:mt-0"
            />
          </div>

          <button
            onClick={handlePrev}
            className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-14 sm:right-20 md:right-28 lg:right-32 text-white bg-[#FFFFFF40] p-2 sm:p-3 rounded-full"
          >
            <BiLeftArrowAlt className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-12 md:right-20 lg:right-16 bottom-6 sm:bottom-8 md:bottom-10 text-white bg-[#FFFFFF40] p-2 sm:p-3 rounded-full"
          >
            <BiRightArrowAlt className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
