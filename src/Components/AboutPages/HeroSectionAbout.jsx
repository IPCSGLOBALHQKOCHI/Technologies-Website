import React from "react";
import AboutImg from "../../assets/images/Aboutimg.png"
function HeroSectionAbout() {
  return (
    <div className=" relative  h-72 md:h-screen bg-cover bg-center flex items-center justify-center">
      <img
        src={AboutImg}
        alt="techno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-400 mt-4">
          Empowering Innovation, Enabling Success
        </div>
      </div>
    </div>
  );
}

export default HeroSectionAbout;
