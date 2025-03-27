import React, { useState } from "react";

function AboutDM() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto p-6 sm:p-10 md:p-16 lg:p-24 text-[#FFFFFF] flex flex-col sm:flex-row">
      <div
        className="w-full sm:w-2/5 flex flex-col font-500 mb-8 sm:mb-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left mb-6 sm:mb-8 lg:mb-10 bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Trends.
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#003ad6] to-[#ff0080] bg-clip-text text-transparent text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Leads.
        </h1>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Results.
        </h1>
      </div>
      <div className="w-full sm:w-3/5  mt-3 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-400">
          Innovative Digital Marketing Strategies for Digital Revamp.
        </h1>
        <p className="text-base sm:text-lg font-300 text-justify">
          Transform your brand with cutting-edge digital marketing strategies
          designed for a complete digital revamp. We specialize in social media
          management, LinkedIn campaigns, performance marketing, Google Ads,
          Meta Ads, and SEO strategy to enhance your online presence. Our
          data-driven approach ensures targeted reach, higher engagement, and
          increased conversions. Whether it’s optimizing your ad spend, boosting
          brand visibility, or crafting compelling content, we create tailored
          solutions to maximize your ROI. Let’s take your digital growth to the
          next level with innovative and result-driven marketing strategies.
        </p>
      </div>
    </div>
  );
}

export default AboutDM;
