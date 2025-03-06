import React from "react";
import makVideo from "../../assets/videos/Bento/Experience design/Makayiram Web.mp4";
import bhanooVideo from "../../assets/videos/Bento/Technology/Bhanoo Web.mp4";
// import skypower from "../../assets/images/image.png"
const cardData = [
  {
    id: 1,
    videoSrc: makVideo,
    title1: "Makayiram Retreat",
    title2: "Resort",
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
  // {
  //   id: 3,
  //   videoSrc: skypower,
  //   title1: "Sky Power Energy",
  //   title2: "Energy",
  //   locat: "Australia",
  //   description:
  //     "Sky Power Energy is an Australian solar product company. We helped boost their organic traffic from zero to thousands within the first five months through our SEO practices.",
  // },
];

const CaseStudyMobile = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:flex-row">
      {cardData.map(({ id, videoSrc, title1, title2, description, locat }) => (
        <div key={id} className=" w-full max-w-md">
          <video
            className="w-full h-60"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <h1 className="text-[#FFFFFF] text-xl font-700">{title1}</h1>
          <h1 className="text-[#FFFFFF] font-600 text-lg">{title2}</h1>
          <h3 className="text-[#FFFFFF] text-base">{locat}</h3>
          <p className="text-[#FFFFFF] mt-2">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyMobile;
