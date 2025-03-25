import React from "react";
import useCountUp from "../../Hooks/CountUp"; 
function OurStory() {
    const projects = useCountUp(100); 
    const years = useCountUp(9);
    const countries = useCountUp(15);
  return (
    <div className="px-24 py-16 h-auto">
      <h1 className="font-300 text-9xl text-[#FFFFFFCC]">
        Our <span className="text-[#ffffff] font-400">Story</span>
      </h1>
      <p className="font-300 text-xl text-[#ffffff] my-8 max-w-4xl">
        Creating valuable, audience-focused content, producing innovative
        visuals, and building communities that engage and foster brand loyalty
        for lasting connections and impact.Creating valuable, audience-focused
        content, producing innovative visuals, and building communities that
        engage and foster brand loyalty for lasting connections and impact.
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 px-10 py-10">
        <div className="p-8 " ref={years.ref}>
          <h1 className="text-8xl font-200 text-[#ffffff]">{years.count}+</h1>
          <div className="w-full border-b-[2px] border-[#3A3A3A] my-4"></div>
          <h2 className="text-4xl font-400 text-[#ffffff] mb-2">Years Of Excellence</h2>
          <p className="text-lg text-[#ffffffcc] font-300">
            Hear from those who’ve experienced the Transformation. See how our
            Unique Approach .Hear from those who’ve experienced the
            Transformation.
          </p>
        </div>

        <div className="p-8" ref={projects.ref}>
          <h1 className="text-8xl font-200 text-[#ffffff]">{projects.count}+</h1>
          <div className="w-full border-b-[2px] border-[#3A3A3A] my-4"></div>
          <h2 className="text-4xl font-400 text-[#ffffff] mb-2">Projects Globally</h2>
          <p className="text-lg text-[#ffffffcc] font-300">
            Hear from those who’ve experienced the Transformation. See how our
            Unique Approach .Hear from those who’ve experienced the
            Transformation.
          </p>
        </div>

        <div className="p-8" ref={countries.ref}>
          <h1 className="text-8xl font-200 text-[#ffffff]">{countries.count}+</h1>
          <div className="w-full border-b-[2px] border-[#3A3A3A] my-4"></div>
          <h2 className="text-4xl font-400 text-[#ffffff] mb-2">Countries</h2>
          <p className="text-lg text-[#ffffffcc] font-300">
            Hear from those who’ve experienced the Transformation. See how our
            Unique Approach .Hear from those who’ve experienced the
            Transformation.
          </p>
        </div>
        <div className="p-8">
          <h1 className="text-8xl font-200 text-[#ffffff]">$ 1M+</h1>
          <div className="w-full border-b-[2px] border-[#3A3A3A] my-4"></div>
          <h2 className="text-4xl font-400 text-[#ffffff] mb-2">Projects Valuation</h2>
          <p className="text-lg text-[#ffffffcc] font-300">
            Hear from those who’ve experienced the Transformation. See how our
            Unique Approach .Hear from those who’ve experienced the
            Transformation.
          </p>
        </div>
      </div>
      <div className=" w-full border-b-[2px] border-[#3A3A3A] mt-10"></div> 
    </div>
  );
}

export default OurStory;
