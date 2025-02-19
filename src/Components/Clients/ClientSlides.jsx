import React from "react";
import brandix from "../../../src/assets/images/Brandix BW.png";
import godrej from "../../../src/assets/images/Godrej.png";
import eastern from "../../../src/assets/images/Eastern logo.png";
import kannanDevan from "../../../src/assets/images/kannan devan.png";
import keltron from "../../../src/assets/images/keltron BW.png";
import ipcs from "../../../src/assets/images/ipcs global.svg";
import doubleHorse from "../../../src/assets/images/Double horses 1.png";
import marriot from "../../../src/assets/images/marriot BW.png";
import milma from "../../../src/assets/images/mlma logo.png";
import ebi from "../../../src/assets/images/ebi.svg";
import logro from "../../../src/assets/images/logro.svg";
import triple from "../../../src/assets/images/triple.svg";
import glaze from "../../../src/assets/images/Glaze 1.png";
import bhanoo from "../../../src/assets/images/banoo hospital.png";
import makayiram from "../../../src/assets/images/mak lolgo.png";
import kitex from "../../../src/assets/images/Kitex.png";

function ClientSlides() {
  const row1 = [
    brandix,
    godrej,
    eastern,
    kannanDevan,
    keltron,
    ipcs,
    doubleHorse,
    marriot,
    milma,
    ebi,
    logro,
    triple,
    glaze,
    bhanoo,
    makayiram,
    kitex,
  ];

  return (
    <div id="clients" className="bg-customBg md:bg-[#FFFFFF] flex flex-col items-center justify-center mt-0 leading-none py-20">
    <h2 className="text-[50px] md:text-[60px] font-300 md:font-400 text-[#FFFFFF] md:text-[#0B0B0BCC] text-center">
      We Work With Brands
    </h2>
    <h2 className="text-[50px] md:text-[50px] font-400  md:font-600 text-[#FFFFFF] md:text-[#0B0B0B] mb-20 md:mb-10 text-center">
      You Love
    </h2>
  
    {/* Desktop View with Animation */}
    <div className="hidden md:block relative overflow-hidden w-full max-w-[1200px] group my-10">
      <div className="flex w-max animate-scrollLeft whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[...row1, ...row1].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[200px]">
            <img src={src} alt={`Logo ${i}`} className="w-24 h-28 object-contain" />
          </div>
        ))}
      </div>
    </div>
  
    {/* Mobile View without Animation */}
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-[500px] px-4 md:hidden">
      {row1.map((src, i) => (
        <div key={i} className="flex justify-center">
          <img src={src} alt={`Logo ${i}`} className="w-16 h-20 object-contain" />
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ClientSlides;
