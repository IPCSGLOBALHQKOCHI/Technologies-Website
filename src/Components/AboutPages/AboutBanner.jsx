import React, { useState, useEffect } from "react";
// import banner from "../../assets/images/Pages/Abouttechnology.png";
const banner="https://res.cloudinary.com/dn9mvkx7k/image/upload/v1746620317/Abouttechnology_fpufnp.png"

import { BsArrowRight } from "react-icons/bs";

function AboutBanner() {
  const words = ["Think.", "Build.", "Grow."];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && letterIndex <= words[wordIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(words[wordIndex].slice(0, letterIndex));
        setLetterIndex(letterIndex + 1);
      }, 200);
    } else if (isDeleting && letterIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(words[wordIndex].slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      }, 150);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setLetterIndex(0);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <div className="relative h-80 md:h-[20rem] xl:h-[30rem] max-w-[1580px] mx-auto bg-cover bg-center flex items-center justify-center">
      <img
        src={banner}
        alt="techno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <div className="text-[#FFFFFF] bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl xl:text-8xl  font-medium mt-4 min-h-24 flex items-center">
          {displayText}
        </div>

        <p className="text-[#ffffff] font-300 text-sm md:text-lg lg:text-xl max-w-4xl mt-0 sm:mt-6 px-4 text-left md:text-center">
          Our approach is rooted in a deep understanding of user behavior,
          market trends, enabling us to create experiences that are not just
          visually compelling but also functionally seamless and strategically
          driven.
        </p>

        <button className="bg-[#003ad6] text-[#ffffff] px-2 sm:px-6 py-1 sm:py-3 w-40 sm:w-52 rounded-md group mt-6 sm:mt-8">
          <a
            href="#"
            className="text-lg sm:text-xl font-normal inline-flex items-center"
          >
            Learn more
            <BsArrowRight className="ml-3 sm:ml-5 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:translate-x-3" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default AboutBanner;
