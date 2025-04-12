import React, { useState } from "react";
import { cardData } from "../../constants/Constants";
// import { BsArrowRight } from "react-icons/bs";

function Casestudies() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-auto py-24 px-20 ">
      <div className="flex flex-row">
        <h1 className="text-7xl text-white hover:bg-gradient-to-r hover:from-[#001BCB] hover:to-[#CC92FF] hover:bg-clip-text hover:text-transparent font-normal px-8 mb-8 transition-all duration-300">
          Give.
        </h1>
        <h1 className="text-7xl bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent hover:text-white hover:bg-none font-normal px-8 mb-8 transition-all duration-300">
          Impact.
        </h1>
        <h1 className="text-7xl text-white hover:bg-gradient-to-r hover:from-[#001BCB] hover:to-[#CC92FF] hover:bg-clip-text hover:text-transparent font-normal px-8 mb-8 transition-all duration-300">
          Delivered.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-6">
        {cardData.map(
          ({ id, videoSrc, title1, description, thumbnail, sector }) => (
            <div
              key={id}
              className="w-full md:w-[48%] lg:w-[30%] transition-shadow duration-300 group mt-12"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              {videoSrc ? (
                <div className="relative w-80 h-72 sm:h-80 hover:scale-105">
                  <img
                    src={thumbnail}
                    alt={title1}
                    className="w-full h-full object-cover"
                  />
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    preload="none"
                    playsInline
                    loop
                    muted
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <img
                  src={thumbnail}
                  alt={title1}
                  className="w-80 h-72 sm:h-80 object-cover"
                />
              )}

              <div className="py-4 pr-8">
                <h1 className="text-[#ffffff] text-2xl font-400">{title1}</h1>
                <p className="text-[#cccccc] font-300 text-xl mt-2">{sector}</p>
                <p className="text-[#bbbbbbcc] mt-2 font-200 text-base line-clamp-4 ">
                  {description}
                </p>
                {/* <p
                className={`text-[#bbbbbbcc] mt-2 font-200 text-base ${
                  expandedCards[id] ? "" : "line-clamp-4"
                }`}
              >
                {description}
              </p>

              {description.length > 100 && (
                <button
                  className="mt-2 text-[#ffffff] text-sm"
                  onClick={() => toggleExpand(id)}
                >
                  {expandedCards[id] ? "Read Less" : "Read More"}
                </button> */}
                {/* )} */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Casestudies;
