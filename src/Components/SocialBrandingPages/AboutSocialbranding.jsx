import React, { useState } from "react";

function AboutSocialbranding() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto p-6 sm:p-10 md:p-16 lg:p-24 text-[#FFFFFF] flex flex-col sm:flex-row">
      <div
        className="w-full sm:w-2/5 flex flex-col font-500 mb-8 sm:mb-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left mb-6 sm:mb-8 lg:mb-10 bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#001BCB] to-[#7EFFC3] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Identity.
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#001BCB] to-[#7EFFC3] bg-clip-text text-transparent text-center md:text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Influence.
        </h1>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#001BCB] to-[#7EFFC3] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Impact.
        </h1>
      </div>
      <div className="w-full sm:w-3/5  mt-3 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-400">
          Elevate Your Brand with Smart Social Strategies.
        </h1>
        <p className="text-base sm:text-lg font-300 text-justify">
          Elevate your brand with smart social strategies that drive engagement
          and lasting impact. Our social branding services include content
          marketing, crafting compelling and shareable content that resonates
          with your audience. We focus on organic growth strategies, ensuring
          sustainable visibility without relying solely on ads. Our social media
          management keeps your brand active and relevant across platforms,
          while community building fosters authentic connections with your
          audience. Whether you're looking to strengthen your online presence or
          build brand loyalty, our tailored approach helps you stand out in the
          digital space.
        </p>
      </div>
    </div>
  );
}

export default AboutSocialbranding;
