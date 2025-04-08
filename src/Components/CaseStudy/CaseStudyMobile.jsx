import React, { useRef, useEffect } from "react";
import { cardData } from "../../constants/Constants";
import { BsArrowRight } from "react-icons/bs";

const CaseStudyMobile = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
      <div className="flex flex-wrap justify-center gap-6 md:gap-6">
           {cardData.slice(0, 3).map(({ id, videoSrc, title1, title2, description, thumbnail }) => (
               <div
                 key={id}
                 className="w-full md:w-[48%] lg:w-[30%] transition-shadow duration-300 group "
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
                     {/* Thumbnail image shown by default */}
                     <img
                       src={thumbnail}
                       alt={title1}
                       className="w-full h-full object-cover"
                     />
                     {/* Video only visible on hover */}
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
                   <h1 className="text-[#cccccc] font-300 text-xl mt-1">
                     {title2}
                   </h1>
                   <p className="text-[#bbbbbbcc] mt-2 font-200 text-base line-clamp-4">
                     {description}
                   </p>
                   <div className="group">
                     <a
                       href=""
                       className="flex items-center space-x-4 text-[#ffffff] mt-4 transition-all duration-300 group-hover:text-[#003ad6]"
                     >
                       <span className="text-xl">Learn More</span>
                       <BsArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-4" />
                     </a>
                   </div>
                 </div>
               </div>
             )
           )}
         </div>
  );
};

export default CaseStudyMobile;
