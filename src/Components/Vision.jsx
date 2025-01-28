import React, { forwardRef,useEffect } from "react";
import { motion } from "framer-motion";
import {
  parentVariant,
  childVariant,
} from "../../src/Variants/FadeInAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      ref={ref}
      // variants={parentVariant}
      // initial="hidden"
      // animate="show"
      // viewport={{ once: true }}
      className="h-screen flex flex-col items-center justify-center px-24 py-24 leading-normal text-center tracking-[0.09em] text-[#FFFFFFCC] snap-start"
    >
      <h1 className="text-[250px] font-200 leading-none">Vision</h1>

      <p className="max-w-2xl leading-relaxed font-300 text-lg text-left">
        To set the benchmark as a Trusted Partner for delivering Visionary and
        Impactful Digital Experiences that resonate and inspire.
      </p>
    </div>
  );
});

export default Vision;
