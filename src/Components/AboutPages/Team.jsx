import React, { useState } from "react";
import { BiLeftArrowAlt,BiRightArrowAlt } from "react-icons/bi";
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
        <div className="flex p-24">
          <div className="w-1/2 font-200 text-9xl text-[#ffffffcc]">
            Expert
            <br />
            <span className="font-300 text-9xl text-[#ffffff] ml-36">Team</span>
          </div>
          <div className="w-1/2 flex py-16">
            <p className="text-2xl font-300 text-[#ffffff]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
        </div>
        <div className="bg-[#FFFFFF0A] flex items-center justify-center pt-16 relative">
          <div className="flex items-center justify-between px-24">
            <div className="text-start">
              <p className="text-7xl font-400 text-[#ffffff] whitespace-nowrap">
                {teamMembers[activeIndex].name}
              </p>
              <p className="text-6xl font-200 text-[#ffffffcc] mt-2">
                {teamMembers[activeIndex].role}
              </p>
            </div>
            <img
              src={teamMembers[activeIndex].image}
              alt={teamMembers[activeIndex].name}
              className="w-[35rem] h-[35rem] object-contain"
            />
          </div>

          <button
            onClick={handlePrev}
            className="absolute bottom-10 right-32 text-white bg-[#FFFFFF40] p-3 rounded-full"
          >
            <BiLeftArrowAlt className="w-7 h-7"/>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-16 bottom-10 text-white bg-[#FFFFFF40] p-3 rounded-full"
          >
            <BiRightArrowAlt className="w-7 h-7"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
