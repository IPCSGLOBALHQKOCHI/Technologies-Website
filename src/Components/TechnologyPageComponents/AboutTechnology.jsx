import React, { useState } from "react";

function AboutTechnology() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-auto p-6 sm:p-10 md:p-16 lg:p-24 text-[#FFFFFF] flex flex-col sm:flex-row">
      <div className="w-full sm:w-2/5 flex flex-col font-500 mb-8 sm:mb-0" 
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left mb-6 sm:mb-8 lg:mb-10 bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#001BCB] to-[#B7C0FF] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Innovate.
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#001BCB] to-[#B7C0FF] bg-clip-text text-transparent text-center md:text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Build.
        </h1>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#001BCB] to-[#B7C0FF] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Grow.
        </h1>
      </div>
      <div className="w-full sm:w-3/5  mt-3 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-400">
          Technology Services to Drive Your Business Forward.
        </h1>
        <p className="text-base sm:text-lg font-300 text-justify">
          We specialize in delivering high-quality web applications, websites,
          mobile apps, custom software, and e-commerce solutions tailored to
          meet the evolving needs of businesses. Our expertise lies in
          developing scalable, secure, and user-friendly digital solutions that
          enhance efficiency and drive growth. Whether you need a dynamic web
          application, a responsive website, or a fully customized software
          solution, we leverage the latest technologies to ensure optimal
          performance and seamless user experiences. With a strong focus on
          innovation, reliability, and customer satisfaction, we help businesses
          harness the power of technology to achieve their goals in an
          ever-changing digital landscape.
        </p>
      </div>
    </div>
  );
}

export default AboutTechnology;
