import React from "react";
import rectangle from "../../assets/images/Rectangle 196.png";
function MissionVission() {
  return (
    <div className="text-white px-6 sm:px-10 md:px-24 py-10 md:py-24">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-300">
            Our <span className="text-white font-semibold">Mission</span>
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Our mission is to set the benchmark as a Trusted Partner in
            delivering visionary and impactful digital experiences that not only
            meet but exceed expectations. By combining cutting-edge technology,
            creative excellence, and strategic insights, we craft immersive
            digital solutions that resonate with audiences and leave a lasting
            impression. Our approach is rooted in a deep understanding of user
            behavior, market trends, and evolving digital landscapes, enabling
            us to create experiences that are not just visually compelling but
            also functionally seamless and strategically driven.{" "}
          </p>
        </div>

        {/* Right-side Design for Mission */}
        <div className="hidden xl:flex w-28 h-28 sm:w-36 sm:h-36 md:w-80 md:h-80 flex-col justify-center items-center relative my-8 pl-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gray-400 rotate-45 absolute -top-6 rounded-lg mr-14"></div>
          <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gray-400 rotate-45 absolute bottom-12 rounded-lg mr-14"></div>
          <div className="flex flex-row absolute bottom-36">
            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gray-400 rotate-45 mr-64 mt-20 rounded-lg"></div>
          </div>
          <div className="w-40 h-40 sm:w-60 sm:h-60 relative ml-60 mb-[320px] sm:mb-[520px]">
            <img
              src={rectangle}
              alt="rect"
              className="absolute w-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-0 md:gap-10 my-16 md:mt-16">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-300 mx-0 sm:mx-14">
            Our <span className="text-white font-semibold">Vision</span>
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed mx-0 sm:mx-14">
            Our vision is to set the benchmark as a Trusted Partner in
            delivering visionary and impactful digital experiences that not only
            meet but exceed expectations. By combining cutting-edge technology,
            creative excellence, and strategic insights, we craft immersive
            digital solutions that resonate with audiences and leave a lasting
            impression. Our approach is rooted in a deep understanding of user
            behavior, market trends, and evolving digital landscapes, enabling
            us to create experiences that are not just visually compelling but
            also functionally seamless and strategically driven.{" "}
          </p>
        </div>

        {/* Right-side Design for Vision */}
        <div className="hidden lg:block w-28 h-28 sm:w-36 sm:h-36 md:w-72 md:h-72 bg-gray-400 mt-2 rounded-xl"></div>
      </div>
    </div>
  );
}

export default MissionVission;
