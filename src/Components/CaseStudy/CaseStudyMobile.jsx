import React, { useRef, useEffect, useState } from "react";
import { cardData } from "../../constants/Constants";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlinePauseCircle, MdOutlinePlayCircle } from "react-icons/md";

const CaseStudyMobile = () => {
  const videoRefs = useRef([]);
  const [playingVideos, setPlayingVideos] = useState({});

  const handlePlayPause = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideos[id]) {
      video.pause();
    } else {
      video.play();
    }

    setPlayingVideos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-6">
      {cardData
        .slice(0, 3)
        .map(({ id, videoSrc, title1, title2, description, thumbnail }) => (
          <div key={id} className="w-80">
            <div className="relative w-80 h-72 sm:h-80 group overflow-hidden">
              {videoSrc ? (
                <>
                  <img
                    src={thumbnail}
                    alt={title1}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                  />
                  <video
                    ref={(el) => (videoRefs.current[id] = el)}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                    preload="none"
                    playsInline
                    loop
                    muted
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>

                  <button
                    onClick={() => handlePlayPause(id)}
                    className="absolute inset-0 flex items-center justify-center z-20 text-white transition"
                  >
                    {playingVideos[id] ? (
                      <MdOutlinePauseCircle className="w-8 h-8" />
                    ) : (
                      <MdOutlinePlayCircle className="w-8 h-8" />
                    )}
                  </button>
                </>
              ) : (
                <img
                  src={thumbnail}
                  alt={title1}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="py-4 pr-8">
              <h1 className="text-[#ffffff] text-2xl font-400">{title1}</h1>
              <h1 className="text-[#cccccc] font-300 text-xl mt-1">{title2}</h1>
              <p className="text-[#bbbbbbcc] mt-2 font-200 text-base line-clamp-4">
                {description}
              </p>
              <div className="group">
                <a
                  href="/casestudy"
                  className="flex items-center space-x-4 text-[#ffffff] mt-4 transition-all duration-300 group-hover:text-[#003ad6]"
                >
                  <span className="text-xl">Learn More</span>
                  <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      <button className="bg-[#003ad6] text-[#ffffff] px-6 py-3 w-52 rounded-md group mt-8">
        <a
          href="/casestudy"
          className="text-xl font-400 inline-flex items-center"
        >
          View More
          <BsArrowRight className="ml-5 mt-1 transition-transform duration-300 group-hover:translate-x-3" />
        </a>
      </button>
    </div>
  );
};

export default CaseStudyMobile;
