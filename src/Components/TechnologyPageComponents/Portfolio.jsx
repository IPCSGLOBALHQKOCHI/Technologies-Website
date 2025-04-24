import React, { useEffect, useRef } from "react";
import showreel from "../../assets/videos/Showreel 60 FPS.mp4";
// import showreelhorizontl from "../../assets/videos/Showreel Horizontal Compressed.mp4";
const showreelhorizontl = "https://res.cloudinary.com/dn9mvkx7k/video/upload/v1745483200/Showreel_Horizontal_Compressed_gy3nd7.mp4"

function Portfolio() {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (ref) => ([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.play();
      } else {
        ref.current?.pause();
      }
    };

    const options = { threshold: 0.5 };

    const observers = [];

    if (mobileVideoRef.current) {
      const observer = new IntersectionObserver(handleIntersection(mobileVideoRef), options);
      observer.observe(mobileVideoRef.current);
      observers.push(observer);
    }

    if (desktopVideoRef.current) {
      const observer = new IntersectionObserver(handleIntersection(desktopVideoRef), options);
      observer.observe(desktopVideoRef.current);
      observers.push(observer);
    }

    return () => {
      if (mobileVideoRef.current) observers[0]?.unobserve(mobileVideoRef.current);
      if (desktopVideoRef.current) observers[1]?.unobserve(desktopVideoRef.current);
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-20 py-8 md:py-20 min-h-screen relative flex flex-col">
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-light text-white mb-8 text-left">
        Our{" "}
        <span className="bg-gradient-to-r from-[#001BCB] to-[#B3BCFE] bg-clip-text text-transparent font-medium">
          Works
        </span>
      </h1>
      
      {/* Mobile Video */}
      <div className="w-full max-w-xs sm:max-w-md md:hidden">
        <video
          ref={mobileVideoRef}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          muted
          loop
          preload="auto"
          playsInline
        >
          <source src={showreel} type="video/mp4" />
        </video>
      </div>

      {/* Desktop Video */}
      <div className="w-full hidden md:block max-w-6xl">
        <video
          ref={desktopVideoRef}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          muted
          loop
          preload="auto"
          playsInline
        >
          <source src={showreelhorizontl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Portfolio;
