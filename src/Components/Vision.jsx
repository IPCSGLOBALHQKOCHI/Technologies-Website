import React, { forwardRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: "ease-out" });
  }, []);

  return (
    <div
      ref={ref}
      className="lg:h-screen flex flex-col items-center justify-center px-6 md:px-24 py-6  lg:py-36 leading-normal text-center tracking-[0.09em] text-[#FFFFFF]"
    >
      {/* Desktop View with Animation */}
      <div className="hidden lg:block">
        <h1 data-aos="fade-up" className="text-[250px] font-200 leading-none bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
          Vision
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="max-w-2xl leading-relaxed ml-10 font-300 text-xl text-left text-[#FFFFFFCC] tracking-wide"
        >
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
      </div>

      {/* Mobile View without Animation */}
      <div className="lg:hidden text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-400 leading-none mb-4 bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
          Vision
        </h1>
        <p className="max-w-xl leading-normal font-200 text-base sm:text-lg text-left text-[#FFFFFFCC]">
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
        <a
          href="/your-link"
          className="flex items-center space-x-2 text-[#FFFFFF] mt-4"
        >
          <span>Learn More</span>
          <BsArrowRight className="w-4 h-4" />
        </a>
        <div className="border-b-[2px] border-[#3A3A3A] mx-0 sm:mx-6 mt-4"></div>
      </div>
    </div>
  );
});

export default Vision;
