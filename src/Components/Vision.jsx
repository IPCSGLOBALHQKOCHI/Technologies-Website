import React, { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: "ease-out" });
  }, []);

  return (
    <div
      ref={ref}
      className="lg:h-screen flex flex-col items-center justify-center px-12 md:px-24  lg:py-36 leading-normal text-center tracking-[0.09em] text-[#FFFFFF]"
    >
      {/* Desktop View with Animation */}
      <div className="hidden lg:block">
        <h1 data-aos="fade-up" className="text-[250px] font-200 leading-none">
          Vision
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="max-w-2xl leading-relaxed font-300 text-lg text-left text-[#FFFFFFCC] tracking-wide"
        >
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
      </div>

      {/* Mobile View without Animation */}
      <div className="lg:hidden text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-200 leading-none mb-4">
          Vision
        </h1>
        <p className="max-w-xl leading-relaxed font-300 text-base sm:text-lg text-left text-[#FFFFFFCC] tracking-wide">
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
      </div>
    </div>
  );
});

export default Vision;
