import React, { useState } from "react";

function AboutBranding() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto p-6 sm:p-10 md:p-16 lg:p-24 text-[#FFFFFF] flex flex-col sm:flex-row">
      <div className="w-full sm:w-2/5 flex flex-col font-500 mb-8 sm:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left mb-6 sm:mb-8 lg:mb-10 bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
          
        >
          Rethink.
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#003ad6] to-[#ff0080] bg-clip-text text-transparent text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Rebuild.
        </h1>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Rebrand.
        </h1>
      </div>
      <div className="w-full sm:w-3/5  mt-3 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-400">
          Creative Branding Solutions for Business Growth.
        </h1>
        <p className="text-base sm:text-lg font-300 text-justify">
          We craft powerful brand identities that make a lasting impact Our
          comprehensive branding services include logo design, where we create
          visually stunning and memorable logos that define your brand. We
          enhance your storytelling with professional video editing, ensuring
          engaging content that resonates with your audience. Through brand
          consulting, we help businesses develop strategic positioning and
          effective market presence. Our brand identity services ensure cohesive
          visuals, messaging, and design that align with your business values.
          Additionally, we bring ideas to life with product design and 2D/3D
          visualization, providing high-quality renders and designs that
          showcase your products with precision. Whether you're a startup or an
          established brand, our creative solutions are designed to elevate your
          business and drive growth.
        </p>
      </div>
    </div>
  );
}

export default AboutBranding;
