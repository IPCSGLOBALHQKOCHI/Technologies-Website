import React, { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: "ease-out" });
  }, []);
  return (
    <div
      data-aos="fade"
      data-aos-duration="4000"
      ref={ref}
      className="h-screen flex flex-col items-center justify-center px-24 py-36 leading-normal text-center tracking-[0.09em] text-[#FFFFFF]"
    >
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
  );
});

export default Vision;
