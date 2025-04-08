import React, { useEffect, useRef } from "react";
import showreel from "../../assets/videos/Showreel 60 FPS.mp4";

function Portfolio() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="block sm:hidden px-6 py-16 min-h-screen mb-20">
      <h1 className="text-5xl font-light text-white mb-8">
        Our{" "}
        <span className="bg-gradient-to-r from-[#001BCB] to-[#B3BCFE] bg-clip-text text-transparent font-medium">
          Works
        </span>
      </h1>
      <video
        ref={videoRef}
        className="absolute w-80 h-[26rem] object-cover"
        muted
        loop
        preload="auto"
        playsInline
      >
        <source src={showreel} type="video/mp4" />
      </video>
    </div>
  );
}

export default Portfolio;
