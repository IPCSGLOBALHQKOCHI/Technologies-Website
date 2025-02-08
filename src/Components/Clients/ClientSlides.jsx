import React from "react";
import brandix from "../../../src/assets/images/1200px-Brandix_Apparel_Limited_Logo.png";
import godrej from "../../../src/assets/images/Godrej_&_Boyce-Logo.wine.png";
import eastern from "../../../src/assets/images/cropped-logo-easternapp.png";
import kannanDevan from "../../../src/assets/images/Kannan devan.png";
import keltron from "../../../src/assets/images/keltron BW.png";
import ipcs from "../../../src/assets/images/ipcs blue logo.jpg";
import doubleHorse from "../../../src/assets/images/Website-Logo.webp";
import marriot from "../../../src/assets/images/marriott-logo.png";
import milma from "../../../src/assets/images/mlma logo.png";
import ebi from "../../../src/assets/images/ebi-removebg-preview 1 (2).png";
import logro from "../../../src/assets/images/logro-main-logo 1 (1).jpg";
import triple from "../../../src/assets/images/TRIPLE I 1.png";
import glaze from "../../../src/assets/images/Glaze 1.png";
import bhanoo from "../../../src/assets/images/banoo hospital.png";
import makayiram from "../../../src/assets/images/makayiram logo.png";
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
    <div id="clients" className="h-[80vh] bg-[#FFFFFF] flex flex-col items-center justify-center mt-0">
      <h2 className="text-6xl font-400 text-[#0B0B0B]">We Work With <span className="font-600">BRANDS</span> </h2>
      <h2 className="text-6xl font-400 text-[#0B0B0B] mb-20">You Love</h2>
      <div className="relative overflow-hidden w-full max-w-[1200px] group">
        <div className="flex w-max animate-scrollLeft whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[200px] p-4">
              <img
                src={src}
                alt={`Logo ${i}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientSlides;
