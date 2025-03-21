import React,{useRef} from "react";
import makVideo from "../../assets/videos/Bento/Experience design/Makayiram Web.mp4";
import bhanooVideo from "../../assets/videos/Bento/Technology/Bhanoo Web.mp4";
import skypower from "../../assets/videos/Bento/Branding/SISU Logo.mp4"
import bhanoothumb from "../../assets/images/bhanoothumb.png"
import sisuthumb from "../../assets/images/sisuthumb.png"
import makthumb from "../../assets/images/makayriamthumb.png"

const cardData = [
  {
    id: 1,
    videoSrc: makVideo,
    title1: "Makayiram Retreat",
    title2: "Hospitality",
    thumbnail:makthumb,
    description:
      "We revamped the resort's website based on a wild and luxury concept. The design reflects the environment and enhances the customer experience on the property.",
  },
  {
    id: 2,
    videoSrc: bhanooVideo,
    title1: "Bhanoo Hospital & Eye Care",
    title2: "Health Care",
    thumbnail:bhanoothumb,
    description:
      "We have completed the rebranding process for the entire website, making it more meaningful, functional, and user-friendly. It now enables users to act faster and connect more easily with departments and doctors.",
  },
  {
    id: 3,
    videoSrc: skypower,
    title1: "Sisu Eclipse",
    title2: "Art Dealer",
    thumbnail:sisuthumb,
    description:
      "Sisu Eclipse is an art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform. The logo reflects the themes of an eclipse and paintings.",
  },
];

const CaseStudyMobile = () => {
  const videoRefs = useRef([]);
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-6">
      {cardData.map(({ id, videoSrc, title1, title2, description,thumbnail }, index) => (
        <div
          key={id}
          className="w-full md:w-[48%] lg:w-[30%] bg-[#FFFFFF] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="w-full h-52 sm:h-60 object-cover rounded-t-md"
            preload="auto"
            playsInline
            autoPlay={false}
            muted
            poster={thumbnail}
            onMouseEnter={(e) => e.target.play()} 
            onMouseLeave={(e) => e.target.pause()} 
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="p-4">
            <h1 className="text-[#121212] text-xl font-bold">{title1}</h1>
            <h1 className="text-[#121212] font-semibold text-lg mt-1">{title2}</h1>
            <p className="text-[#121212] mt-2 text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyMobile;
