import React from "react";
// import rectangle4 from "../../assets/images/Mask group 44.png";
// import rectangle1 from "../../assets/images/Mask group 1.png";
// import rectangle2 from "../../assets/images/Mask group 2.png";
// import rectangle3 from "../../assets/images/Mask group 3.png";
import Vision from "../../assets/images/vision.png";
import Mission from "../../assets/images/mission.png";

function MissionVission() {
  return (
    <div className="text-white px-6 sm:px-10 md:px-24 py-10 md:py-24">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-300 text-gray-300">
            Our{" "}
            <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent font-500">
              Mission
            </span>
          </h1>
          <p className="mt-4 text-[#ffffffcc] text-base sm:text-lg leading-relaxed max-w-3xl">
            Our mission is to build sustainable solutions that empower
            businesses to thrive in a dynamic and evolving landscape. We believe
            in fostering creativity as a catalyst for original thinking and
            breakthrough ideas. Through continuous innovation, we develop
            strategies and tools that address real-world challenges with
            long-term value. Our focus on impactful service delivery ensures
            that every solution we provide creates measurable and meaningful
            results. By combining sustainability, creativity, innovation, and
            excellence, we help businesses grow with purpose and resilience.{" "}
          </p>
        </div>
        <div className="hidden lg:block w-28 h-28 sm:w-36 sm:h-36 md:w-72 md:h-72 mt-2">
          <img src={Mission} alt="" className="rounded-xl" />
        </div>
        {/* Right-side Design for Mission */}
        {/* <div className="hidden lg:flex w-28 h-28 sm:w-36 sm:h-36 md:w-80 md:h-80 flex-col justify-center items-center relative my-8 xl:pl-8">
          <div className="absolute -top-14 rounded-lg mr-14">
            <img src={rectangle2} alt="" className="w-20 h-20 sm:w-40 sm:h-40 " />
          </div>
          <div className="absolute bottom-8 rounded-lg mr-14">
            <img src={rectangle3} alt="" className="w-20 h-20 sm:w-40 sm:h-40" />
          </div>
            <div className="absolute bottom-32 mr-40 -left-9 rounded-lg">
              <img src={rectangle1} alt="" className="w-20 h-20 sm:w-40 sm:h-40" />
            </div>
          <div className="w-40 h-40 sm:w-60 sm:h-60 relative ml-60 mb-[320px] sm:mb-[500px]">
            <img
              src={rectangle4}
              alt="rect"
              className="absolute w-auto h-auto object-cover"
            />
          </div>
        </div> */}
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-0 md:gap-10 mt-16 md:mt-16">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-300 text-gray-300 mx-0 lg:mx-14">
            Our{" "}
            <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent font-500">
              Vision
            </span>
          </h1>
          <p className="mt-4 text-[#ffffffcc] text-base sm:text-lg leading-relaxed mx-0 lg:mx-14">
            Our vision is to set the benchmark as a trusted partner in
            delivering transformative digital experiences. We aim to go beyond
            conventional solutions by crafting visionary strategies that
            anticipate future needs. Every experience we design is meant to
            resonate deeply with audiences, leaving a lasting impression that
            inspires action. Trust, innovation, and impact form the foundation
            of our approach, ensuring meaningful connections between brands and
            their customers. By consistently exceeding expectations, we strive
            to redefine what it means to be a digital partner in today’s
            ever-evolving landscape.{" "}
          </p>
        </div>

        {/* Right-side Design for Vision */}
        <div className="hidden lg:block w-28 h-28 sm:w-36 sm:h-36 md:w-72 md:h-72 mt-2">
          <img src={Vision} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default MissionVission;
