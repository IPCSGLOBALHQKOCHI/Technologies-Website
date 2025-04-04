import React from "react";
import AboutImg from "../../assets/images/aboutmain.png"
function HeroSectionAbout() {
  return (
    <div className=" relative  h-60 md:h-screen bg-cover bg-center flex items-center justify-center">
      <img
        src={AboutImg}
        alt="techno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-[#FFFFFF] text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-500 mt-4 ">
          Empowering Innovation,<br/><span className="leading-5">Enabling Success</span> 
        </div>
      </div>
    </div>
  );
}

export default HeroSectionAbout;
