import React from "react";
import About2Img from "../../assets/images/about1.png";
function AboutSection() {
  return (
    <div className="h-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 lg:py-24">
  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-300 text-white text-center lg:text-left">
    Blending Experience & Innovation - Redefining Digital Success.
  </h1>
  
  <p className="font-200 text-base md:text-lg lg:text-xl mt-6 sm:mt-8 text-[#D9D9D9]  text-justify md:text-left md:leading-relaxed">
    Building on 16 years of educational excellence, our 9-year journey in technology drives innovation forward. 
    We specialize in cutting-edge technology solutions, strategic branding, and data-driven digital marketing, 
    empowering businesses to thrive in the digital era. Our expertise blends innovation with experience, 
    delivering tailored solutions that drive growth, enhance visibility, and create impactful digital experiences. 
    From software development and IT consulting to brand identity and online marketing, we are your trusted 
    partner in navigating the evolving tech landscape.
  </p>

  <div className="flex justify-center mt-8 sm:mt-12 mx-auto">
    <img 
      src={About2Img} 
      alt="team" 
      className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-5xl h-[100vh]  p-4 sm:p-8 " 
    />
  </div>

  <div className="w-full border-b-2 border-[#3A3A3A] mt-8 sm:mt-12"></div>
</div>

  );
}

export default AboutSection;
