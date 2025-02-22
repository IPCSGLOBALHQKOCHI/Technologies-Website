import React from "react";
import brandix from "../../../src/assets/images/Brandix BW (2).png";
import godrej from "../../../src/assets/images/Godrej_&_Boyce- BW (2).png";
import eastern from "../../../src/assets/images/Eastern logo (2).png";
import kannanDevan from "../../../src/assets/images/kannan devan BW (2).png";
import keltron from "../../../src/assets/images/keltron BW (1).png";
import ipcs from "../../../src/assets/images/IPCS GLOBAL logo bk 1.png";
import doubleHorse from "../../../src/assets/images/Double horses 2.png";
import marriot from "../../../src/assets/images/marriot BW 1 (1).png";
import milma from "../../../src/assets/images/mlma logo BW 1 (1).png";
import ebi from "../../../src/assets/images/ebi-removebg-preview 1 (3).png";
import logro from "../../../src/assets/images/logro-main-logo 1 (1).png";
import triple from "../../../src/assets/images/TRIPLE I 1 (1).png";
import glaze from "../../../src/assets/images/Glaze 1 (1).png";
import bhanoo from "../../../src/assets/images/image 2 (1).png";
import makayiram from "../../../src/assets/images/mak lolgo 4.png";
import kitex from "../../../src/assets/images/Kitex BW 1 (1).png";

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
    // kitex,
  ];

  return (
    <div id="clients" className="bg-customBg md:bg-[#FFFFFF] flex flex-col items-center justify-center mt-0 leading-none py-20">
    <h2 className="text-[50px] md:text-[60px] font-300 md:font-400 text-[#FFFFFF] md:text-customBg text-center">
      We Work With Brands
    </h2>
    <h2 className="text-[50px] md:text-[50px] font-400  md:font-600 text-[#FFFFFF] md:text-customBg mb-20 md:mb-10 text-center">
      You Love
    </h2>
    <div className="hidden md:block relative overflow-hidden w-full max-w-[1200px] group my-10">
      <div className="flex w-max animate-scrollLeft whitespace-nowrap group-hover:[animation-play-state:paused] hover:">
        {[...row1, ...row1].map((src, i) => ( 
          <div key={i} className="flex-shrink-0 w-[200px]">
            <img src={src} alt={`Logo ${i}`} className="w-24 h-28 object-contain  transition-transform duration-300 ease-in-out hover:scale-110 " />
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-[500px] px-4 md:hidden">
      {row1.map((src, i) => (
        <div key={i} className="flex justify-center">
          <img src={src} alt={`Logo ${i}`} className="w-16 h-20 object-contain"/>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ClientSlides;
