import React from "react";
import { BsArrowRight } from "react-icons/bs";
//Mobile
import godrej from "../../src/assets/images/whiteLogos/Godrej_&_Boyce- BW (2).png";
import eastern from "../../src/assets/images/whiteLogos/Eastern logo (2).png";
import kannanDevan from "../../src/assets/images/whiteLogos/kannan devan BW (2).png";
import keltron from "../../src/assets/images/whiteLogos/keltron BW (1).png";
// import ipcs from "../../src/assets/images/whiteLogos/IPCS GLOBAL logo bk 1.png";
import marriot from "../../src/assets/images/whiteLogos/marriot BW 1 (1).png";
import milma from "../../src/assets/images/whiteLogos/mlma logo BW 1 (1).png";
import ebi from "../../src/assets/images/whiteLogos/ebi-removebg-preview 1 (3).png";
import triple from "../../src/assets/images/whiteLogos/TRIPLE I 1 (1).png";
import glaze from "../../src/assets/images/whiteLogos/Glaze 1 (1).png";
import makayiram from "../../src/assets/images/whiteLogos/mak lolgo 4.png";
import kitex from "../../src/assets/images/whiteLogos/Kitex BW 1 (1).png";
import besideswh from "../../src/assets/images/whiteLogos/besides-logo (1).png";
import skypowerwh from "../../src/assets/images/whiteLogos/LOGO-HOME-PAGE 1 (1).png";
import fernwoodwh from "../../src/assets/images/whiteLogos/PARAYS FINAL FILES_OCTOBER(ALL LOGOS)-04 1 (1).png";
import wagamonwh from "../../src/assets/images/whiteLogos/VAGAMON SAFARI FINAL-06 1 (1).png";

//web
import godrejBL from "../../src/assets/images/blackLogos/godrej-logo-vector.png";
import easternBL from "../../src/assets/images/blackLogos/Eastern logo (4).png";
import kannanDevanBL from "../../src/assets/images/blackLogos/kannan devan BW (4).png";
import keltronBL from "../../src/assets/images/blackLogos/kel-logo.png";
import ipcsBL from "../../src/assets/images/blackLogos/ipcs-global logo.png";
import doubleHorseBL from "../../src/assets/images/blackLogos/Double horses 2 (3).png";
import marriotBL from "../../src/assets/images/blackLogos/marriot BW 2.png";
import milmaBL from "../../src/assets/images/blackLogos/Milma-Logo-.png";
import ebiBL from "../../src/assets/images/blackLogos/ebi logo.png";
import tripleBL from "../../src/assets/images/blackLogos/Group 427319308.png";
import glazeBL from "../../src/assets/images/blackLogos/glaze logo.png";
// import bhanooBL from "../../src/assets/images/blackLogos/LogoImage-bhanoo.png";
import makayiramBL from "../../src/assets/images/blackLogos/mak lolgo 5 (1).png";
import kitexBL from "../../src/assets/images/blackLogos/Kitex BW 1 (3).png";
// import bmgBL from "../assets/images/blackLogos/best-money logo.png";
import BsidesBL from "../assets/images/blackLogos/besides-logo.png";
// import skypower from "../assets/images/blackLogos/LOGO-HOME-PAGE 1.png";
// import wagamon from "../assets/images/blackLogos/VAGAMON SAFARI FINAL-06 1.png";
import fernwoods from "../assets/images/blackLogos/PARAYS FINAL FILES_OCTOBER(ALL LOGOS)-04 1.png";
import burgerin from "../assets/images/blackLogos/Burger-inn-logo-1 1 (1).png";

function ClientSlides() {
  const white = [
    godrej,
    eastern,
    kannanDevan,
    keltron,
    // ipcs,
    marriot,
    milma,
    ebi,
    triple,
    glaze,
    makayiram,
    kitex,
    besideswh,
    wagamonwh,
    fernwoodwh,
    skypowerwh,
  ];

  const Black = [
    easternBL,
    milmaBL,
    ipcsBL,
    glazeBL,
    godrejBL,
    marriotBL,
    BsidesBL,
    kitexBL,
    doubleHorseBL,
    ebiBL,
    kannanDevanBL,
    tripleBL,
    // bhanooBL,
    makayiramBL,
    // bmgBL,
    keltronBL,
    // skypower,
    // wagamon,
    fernwoods,
    burgerin,
  ];

  return (
    <div
      id="clients"
      className="bg-customBg md:bg-[#FFFFFF] flex flex-col items-center justify-center mt-0 leading-none py-16"
    >
      <div className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[72px] xl:text-[80px] text-left font-light text-white md:text-customBg mb-6 lg:mb-8 px-10">
        <h2>
          Partnering with
          <h2 className="ml-0 sm:ml-16 md:ml-28 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mt-2">
            brands you trust.
          </h2>
        </h2>
      </div>
      <div className="hidden md:block w-full mt-16 px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 place-items-center -space-x-12">
          {Black.map((src, i) => (
            <div key={i} className="flex justify-center p-2 mb-3">
              <img
                src={src}
                alt={`Logo ${i}`}
                className="object-contain h-36 w-36 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-[500px] px-4 md:hidden mt-8">
        {white.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`Logo ${i}`}
              className="w-16 h-20 object-contain"
            />
          </div>
        ))}
      </div>
      <button className="md:bg-[#000000] md:text-[#ffffff] bg-[#ffffff] text-[#000000] px-6 py-3 w-52 rounded-md group mt-8">
        <a href="/#connect" className="text-xl font-400 inline-flex items-center">
          Learn more
          <BsArrowRight className="ml-5 mt-1 transition-transform duration-300 group-hover:translate-x-3" />
        </a>
      </button>
    </div>
  );
}

export default ClientSlides;
