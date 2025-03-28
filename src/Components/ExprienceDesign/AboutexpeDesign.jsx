import React, { useState } from "react";

function AboutexpeDesign() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-auto p-6 sm:p-10 md:p-16 lg:p-24 text-[#FFFFFF] flex flex-col sm:flex-row">
      <div className="w-full sm:w-2/5 flex flex-col font-500 mb-8 sm:mb-0"
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
          Dream.
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#003ad6] to-[#ff0080] bg-clip-text text-transparent text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Design.
        </h1>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
        >
          Deliver.
        </h1>
      </div>
      <div className="w-full sm:w-3/5  mt-3 sm:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-400">
          Transforming Design for Seamless User Engagement.
        </h1>
        <p className="text-base sm:text-lg font-300 text-justify">
          We specialize in transforming design strategies to ensure seamless
          user engagement across digital platforms. Our experience design
          services focus on creating intuitive and visually compelling websites,
          web apps, software interfaces, and mobile app designs. By prioritizing
          user experience, we craft designs that are not only aesthetically
          pleasing but also functional, ensuring smooth navigation and
          interaction. Whether you’re looking to revamp your website, enhance
          your web app, or develop a user-friendly mobile app, our approach
          guarantees an engaging and efficient experience for your users.
        </p>
      </div>
    </div>
  );
}

export default AboutexpeDesign;
