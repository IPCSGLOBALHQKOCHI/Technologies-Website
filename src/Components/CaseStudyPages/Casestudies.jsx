import React, { useState, useRef } from "react";
import { cardData } from "../../constants/Constants";
import { MdOutlinePlayCircle,MdOutlinePauseCircle} from "react-icons/md";
function Casestudies() {
  const [playingVideos, setPlayingVideos] = useState({});
  const [expandedCards, setExpandedCards] = useState({});
  const videoRefs = useRef({}); 

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <div className="w-full h-auto py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1580px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-5xl sm:text-5xl lg:text-7xl font-normal text-white/80 px-2 sm:px-6 mb-8 transition-all duration-300">
          Impact{" "}
          <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
            Delivered
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-6 md:gap-8">
        {cardData.map(
          ({ id, videoSrc, title1, description, thumbnail, sector }) => (
            <div
              key={id}
              className="w-full sm:w-[90%] md:w-[47%] lg:w-[30%] transition-shadow duration-300 group mt-8 sm:mt-10"
            >
              {videoSrc ? (
                <div className="relative w-full h-80 sm:h-96">
                  <div className="relative group w-full h-full overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[id] = el)}
                      className={`absolute top-0 left-0 w-full h-full object-cover ${
                        playingVideos[id]
                      }`}
                      preload="none"
                      playsInline
                      loop
                      muted
                      poster={thumbnail}
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>

                    <button
                      onClick={() => handlePlayPause(id)}
                      className="absolute inset-0 flex items-center justify-center transition-colors duration-300 z-10"
                    >
                      <svg
                        className="w-14 h-14 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {playingVideos[id] ? (
                          <MdOutlinePauseCircle/> 
                        ) : (
                          <MdOutlinePlayCircle/> 
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={thumbnail}
                  alt={title1}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              )}

              <div className="py-4 px-2">
                <h1 className="text-white text-xl md:text-2xl font-normal">
                  {title1}
                </h1>
                <p className="text-[#cccccc] font-light text-base mt-1">
                  {sector}
                </p>
                <p
                  className={`text-[#bbbbbbcc] mt-2 font-light text-sm md:text-base ${
                    expandedCards[id] ? "" : "line-clamp-4"
                  }`}
                >
                  {description}
                </p>

                {description.length > 100 && (
                  <button
                    className="mt-2 text-[#003ad6] text-sm underline"
                    onClick={() => toggleExpand(id)}
                  >
                    {expandedCards[id] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Casestudies;
