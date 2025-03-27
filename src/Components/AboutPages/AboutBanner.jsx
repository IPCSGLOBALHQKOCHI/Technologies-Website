import React, { useState, useEffect } from "react";
import banner from "../../assets/images/Pages/technology.jpg";
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
    <div className="relative h-60 sm:h-72 md:h-[30rem] xl:h-[35rem] max-w-[1580px] mx-auto bg-cover bg-center flex items-center justify-center">
  <img
    src={banner}
    alt="techno"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
    
    <div className="text-[#FFFFFF] bg-gradient-to-r from-[#001BCB] to-[#B7C0FF] bg-clip-text text-transparent text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-8xl  font-medium mt-4 min-h-24 flex items-center">
      {displayText}
    </div>

    <p className="text-[#ffffff] font-light text-sm sm:text-lg md:text-xl lg:text-2xl max-w-4xl mt-4 sm:mt-6 px-4">
      Our approach is rooted in a deep understanding of user behavior,
      market trends, and evolving digital landscapes, enabling us to create
      experiences that are not just visually compelling but also
      functionally seamless and strategically driven.
    </p>

    <button className="bg-[#003ad6] text-[#ffffff] px-4 sm:px-6 py-2 sm:py-3 w-20 sm:w-52 rounded-md group mt-6 sm:mt-8">
      <a href="#" className="text-lg sm:text-xl font-normal inline-flex items-center">
        Learn more
        <BsArrowRight className="ml-3 sm:ml-5 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:translate-x-3" />
      </a>
    </button>

  </div>
</div>
  );
}

export default AboutBanner;
