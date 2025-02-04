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
  ];

  const row2 = [milma, ebi, logro, triple, glaze, bhanoo, makayiram, kitex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-0">
      <h2 className="text-7xl font-200 text-[#FFFFFF] mb-20">Clients</h2>
      <div className="relative overflow-hidden w-full max-w-[1200px] mb-4 group">
        <div className="flex animate-scrollLeft whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[200px] p-4">
              <img
                src={src}
                alt={`Logo ${i}`}
                className="w-24 h-24 object-contain rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden w-full max-w-[1200px] mt-4 group">
        <div className="flex animate-scrollRight whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[200px] p-4">
              <img
                src={src}
                alt={`Logo ${i}`}
                className="w-24 h-24 object-contain rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientSlides;
