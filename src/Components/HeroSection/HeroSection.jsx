import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BgVideo from "../../assets/videos/Bento/homevideo.mp4";

const HeroSection = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: true });
  }, []);
  const [showButton, setShowButton] = useState(false);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
      setShowText(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center snap-start">
      <video
        ref={ref}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1
          className="text-3xl md:text-7xl font-800 md:font-600"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          Moonshot To Magnitude
        </h1>
        <p
          className="text-lg md:text-3xl mt-2 font-200"
          data-aos="fade-up"
          data-aos-delay="2300"
          data-aos-duration="4000"
        >
          Propelling The Next Wave Of Digital Excellence
        </p>

        <div
          className={`absolute left-0 bottom-4 px-4 md:px-16 text-left transition-opacity duration-1000 transform ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[10px] md:text-sm font-100">
            IPCS Automation was part of <br /> the{" "}
            <span className="font-400">Chandrayaan 3</span> project.
          </p>
        </div>

        <div
          className={`absolute bottom-4 flex justify-center w-full pb-28 md:pb-14 transition-opacity duration-1000 transform ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="/connect-us"
            className="block bg-[#003ad6] text-white px-4 py-2 w-40 rounded-md text-lg text-center"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
