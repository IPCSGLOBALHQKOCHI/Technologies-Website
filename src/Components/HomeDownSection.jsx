import React from "react";
import { motion } from "framer-motion";
import {
  parentVariant,
  childVariant,
} from "../../src/Variants/FadeInAnimation";

function CaseStudy() {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="show"
      className="h-screen flex flex-col items-center justify-center px-24 py-24 leading-normal text-4xl tracking-[0.05em] text-[#FFFFFFCC]"
    >
      <div className="text-left">
        <motion.p
          variants={childVariant}
          initial="hidden"
          whileInView={"show"}
          className="font-300"
        >
          This case study highlights transformative solutions
        </motion.p>
        <motion.p
          variants={childVariant}
          initial="hidden"
          whileInView={"show"}
          className="font-300"
        >
          we have implemented, showcasing the Growth,
        </motion.p>
        <motion.p
          variants={childVariant}
          initial="hidden"
          whileInView={"show"}
          className="font-300"
        >
          Success and Positive changes we have driven for
        </motion.p>
        <motion.p
          variants={childVariant}
          initial="hidden"
          whileInView={"show"}
          className="font-300"
        >
          our Clients.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default CaseStudy;
