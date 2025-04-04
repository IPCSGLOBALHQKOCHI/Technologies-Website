import React from "react";
import useCountUp from "../../Hooks/CountUp";
function OurStory() {
  const projects = useCountUp(100);
  const years = useCountUp(9);
  const countries = useCountUp(15);
  return (
    <div className="h-auto px-4 sm:px-8 md:px-16 lg:px-24 py-6 md:py-16 ">
      <h1 className="font-300 text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-[#FFFFFFCC] text-left">
        Our <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent font-400">Story</span>
      </h1>
      <p className="font-300 text-base sm:text-lg md:text-xl text-[#ffffff] my-6 sm:my-8 max-w-4xl text-left leading-relaxed">
        Creating valuable, audience-focused content, producing innovative
        visuals, and building communities that foster brand loyalty for lasting
        connections and impact. Creating valuable, audience-focused content,
        producing innovative visuals, and building communities that foster brand
        loyalty for lasting connections and impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-0 py-8 bg-[radial-gradient(50%_50%_at_50%_50%,_#010741_0%,_rgba(2,6,52,0)_100%)]">
        <div className="p-6 sm:p-8 text-left" ref={years.ref}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-400 text-center text-[#ffffff]">
            {years.count}+
          </h1>
          <div className="w-full border-b-2 border-[#3A3A3A] my-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#ffffff] mb-2">
            Years Of Excellence
          </h2>
          <p className="text-base sm:text-lg text-[#ffffffcc] font-300">
            Hear from those who’ve experienced the transformation. See how our
            unique approach makes an impact.
          </p>
        </div>
        <div className="p-6 sm:p-8 text-left" ref={projects.ref}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-400 text-center text-[#ffffff]">
            {projects.count}+
          </h1>
          <div className="w-full border-b-2 border-[#3A3A3A] my-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#ffffff] mb-2">
            Projects Globally
          </h2>
          <p className="text-base sm:text-lg text-[#ffffffcc] font-light">
            Hear from those who’ve experienced the transformation. See how our
            unique approach makes an impact.
          </p>
        </div>
        <div
          className="p-6 sm:p-8 text-left"
          ref={countries.ref}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-400 text-center text-[#ffffff]">
            {countries.count}+
          </h1>
          <div className="w-full border-b-2 border-[#3A3A3A] my-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#ffffff] mb-2">
            Countries
          </h2>
          <p className="text-base sm:text-lg text-[#ffffffcc] font-light">
            Hear from those who’ve experienced the transformation. See how our
            unique approach makes an impact.
          </p>
        </div>
        <div className="p-6 sm:p-8 text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-400 text-center text-[#ffffff]">
            $1M+
          </h1>
          <div className="w-full border-b-2 border-[#3A3A3A] my-4"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#ffffff] mb-2">
            Projects Valuation
          </h2>
          <p className="text-base sm:text-lg text-[#ffffffcc] font-light">
            Hear from those who’ve experienced the transformation. See how our
            unique approach makes an impact.
          </p>
        </div>
      </div>
      <div className="w-full border-b-2 border-[#3A3A3A] mt-8 sm:mt-10"></div>
    </div>
  );
}

export default OurStory;
