import React from "react";
import makVideo from "../../assets/videos/Bento/Experience design/Makayiram Web.mp4";
import bhanooVideo from "../../assets/videos/Bento/Technology/Bhanoo Web.mp4";
import skypower from "../../assets/videos/Bento/Branding/SISU Logo.mp4"
const cardData = [
  {
    id: 1,
    videoSrc: makVideo,
    title1: "Makayiram Retreat",
    title2: "Hospitality",
    locat: "Munnar-Kerala",
    description:
      "We revamped the resort's website based on a wild and luxury concept. The design reflects the environment and enhances the customer experience on the property.",
  },
  {
    id: 2,
    videoSrc: bhanooVideo,
    title1: "Bhanoo Hospital & Eye Care",
    title2: "Health Care",
    locat: "Chandigarh",
    description:
      "We have completed the rebranding process for the entire website, making it more meaningful, functional, and user-friendly. It now enables users to act faster and connect more easily with departments and doctors.",
  },
  {
    id: 3,
    videoSrc: skypower,
    title1: "Sisu Eclipse",
    title2: "Art Dealer",
    locat: "Ireland",
    description:
      "Sisu Eclipse is an art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform. The logo reflects the themes of an eclipse and paintings.",
  },
];

const CaseStudyMobile = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-6 px-4">
    {cardData.map(({ id, videoSrc, title1, title2, description, locat }) => (
      <div
        key={id}
        className="w-full md:w-[48%] lg:w-[30%] bg-[#FFFFFF]  shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <video
          className="w-full h-48 sm:h-54 object-cover"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="p-4">
          <h1 className="text-[#121212] text-xl font-bold">{title1}</h1>
          <h1 className="text-[#121212] font-semibold text-lg mt-1">{title2}</h1>
          {/* <h3 className="text-[#121212] text-base">{locat}</h3> */}
          <p className="text-[#121212] mt-2 text-sm">{description}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default CaseStudyMobile;
