import React from "react";
import brandix from "../../../src/assets/images/whiteLogos/Brandix BW (2).png";
import godrej from "../../../src/assets/images/whiteLogos/Godrej_&_Boyce- BW (2).png";
import eastern from "../../../src/assets/images/whiteLogos/Eastern logo (2).png";
import kannanDevan from "../../../src/assets/images/whiteLogos/kannan devan BW (2).png";
import keltron from "../../../src/assets/images/whiteLogos/keltron BW (1).png";
import ipcs from "../../../src/assets/images/whiteLogos/IPCS GLOBAL logo bk 1.png";
import doubleHorse from "../../../src/assets/images/whiteLogos/Double horses 2.png";
import marriot from "../../../src/assets/images/whiteLogos/marriot BW 1 (1).png";
import milma from "../../../src/assets/images/whiteLogos/mlma logo BW 1 (1).png";
import ebi from "../../../src/assets/images/whiteLogos/ebi-removebg-preview 1 (3).png";
import logro from "../../../src/assets/images/whiteLogos/logro-main-logo 1 (1).png";
import triple from "../../../src/assets/images/whiteLogos/TRIPLE I 1 (1).png";
import glaze from "../../../src/assets/images/whiteLogos/Glaze 1 (1).png";
import bhanoo from "../../../src/assets/images/whiteLogos/image 2 (1).png";
import makayiram from "../../../src/assets/images/whiteLogos/mak lolgo 4.png";
// import kitex from "../../../src/assets/images/whiteLogos/Kitex BW 1 (1).png";

// import brandixBL from "../../../src/assets/images/blackLogos/Brandix BW (3).png";
import godrejBL from "../../../src/assets/images/blackLogos/Godrej_&_Boyce- BW (3).png";
import easternBL from "../../../src/assets/images/blackLogos/Eastern logo (3).png";
import kannanDevanBL from "../../../src/assets/images/blackLogos/kannan devan BW (3).png";
import keltronBL from "../../../src/assets/images/blackLogos/keltron BW (2).png";
import ipcsBL from "../../../src/assets/images/blackLogos/IPCS GLOBAL logo bk 1 (1).png";
import doubleHorseBL from "../../../src/assets/images/blackLogos/Double horses 2 (1).png";
import marriotBL from "../../../src/assets/images/blackLogos/marriot BW 1 (2).png";
import milmaBL from "../../../src/assets/images/blackLogos/mlma logo BW 1 (2).png";
import ebiBL from "../../../src/assets/images/blackLogos/ebi-removebg-preview 1 (4).png";
import logroBL from "../../../src/assets/images/blackLogos/logro-main-logo 1 (3).jpg";
import tripleBL from "../../../src/assets/images/blackLogos/TRIPLE I 1 (2).png";
import glazeBL from "../../../src/assets/images/blackLogos/Glaze 2.png";
import bhanooBL from "../../../src/assets/images/blackLogos/image 3.png";
import makayiramBL from "../../../src/assets/images/blackLogos/mak lolgo 5.png";
import kitexBL from "../../../src/assets/images/blackLogos/Kitex BW 1 (2).png";


function ClientSlides() {
  const white = [
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

  const Black=[
    // brandixBL,
    godrejBL,
    easternBL,
    kannanDevanBL,
    keltronBL,
    ipcsBL,
    doubleHorseBL,
    marriotBL,
    milmaBL,
    ebiBL,
    logroBL,
    tripleBL,
    glazeBL,
    bhanooBL,
    makayiramBL,
    kitexBL,
  ]

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
        {[...Black, ...Black].map((src, i) => ( 
          <div key={i} className="flex-shrink-0 w-[200px]">
            <img src={src} alt={`Logo ${i}`} className="w-24 h-28 object-contain  transition-transform duration-300 ease-in-out hover:scale-110 " />
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-[500px] px-4 md:hidden">
      {white.map((src, i) => (
        <div key={i} className="flex justify-center">
          <img src={src} alt={`Logo ${i}`} className="w-16 h-20 object-contain"/>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ClientSlides;
