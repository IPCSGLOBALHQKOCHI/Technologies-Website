import React, { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      ref={ref}
      className="h-screen flex flex-col items-center justify-center px-24 py-24 leading-normal text-center tracking-[0.09em] text-[#FFFFFFCC]"
    >
      {/* "Mission" appears first */}
      <h1 data-aos="fade-up" className="text-[250px] font-200 leading-none">
        Mission
      </h1>

      {/* Sentence appears after a delay */}
      <p
        data-aos="fade-up"
        data-aos-delay="500"
        className="max-w-2xl leading-relaxed font-300 text-lg text-left"
      >
        To build sustainable solutions that empower Businesses by fostering
        Creativity, Innovation, and Impactful service delivery.
      </p>
    </div>
  );
});

export default Mission;
