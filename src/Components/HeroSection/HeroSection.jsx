import React from "react";
import BgVideo from "../../assets/videos/Bento/homevideo.mp4"
const HeroSection = React.forwardRef((props, ref) => {
  return (
    <div
      className=" h-screen bg-cover bg-center snap-start"
          >
       <video
        ref={ref}
          className="top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
    </div>
  );
});

export default HeroSection;
