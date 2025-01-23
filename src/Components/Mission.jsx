import React from "react";
import { motion } from "framer-motion";
import {
  parentVariant,
  childVariant,
} from "../../src/Variants/FadeInAnimation";

function Mission() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="show"
      className="h-screen flex flex-col items-center justify-center px-24 py-24 leading-normal text-center tracking-[0.09em] text-[#FFFFFFCC] "
    >
      <motion.h1
        variants={childVariant}
        initial="hidden"
        whileInView={"show"}
        className="text-[250px] font-200 leading-none"
      >
        Mission
      </motion.h1>
      <motion.p
        variants={childVariant}
        initial="hidden"
        whileInView={"show"}
        className="max-w-2xl leading-relaxed font-300 text-lg text-left"
      >
        To build sustainable solutions that empower Businesses by fostering
        Creativity, Innovation and Impactful service delivery.
      </motion.p>
    </motion.div>
  );
}

export default Mission;
