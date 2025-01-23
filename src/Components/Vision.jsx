import React from "react";
import { motion } from "framer-motion";
import {parentVariant,childVariant} from "../../src/Variants/FadeInAnimation"


function Vision() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="show"
      className="h-screen flex flex-col items-center justify-center px-24 py-24 leading-normal text-center tracking-[0.09em] text-[#FFFFFFCC] snap-start"
    >
      <motion.h1
        variants={childVariant}
        initial="hidden"
        whileInView={"show"}
        className="text-[250px] font-200 leading-none"
      >
        Vision
      </motion.h1>
      <motion.p
        variants={childVariant}
        initial="hidden"
        whileInView={"show"}
        className="max-w-2xl leading-relaxed font-300 text-lg text-left"
      >
        To set the benchmark as a Trusted Partner for delivering Visionary and
        Impactful Digital Experiences that resonate and inspire.
      </motion.p>
    </motion.div>
  );
}

export default Vision;
