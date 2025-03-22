import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import besides from "../../src/assets/images/besides-logo.png";
import bmg from "../../src/assets/images/best-money logo.jpg";
import sisiulogo from "../../src/assets/images/sisiulogo.png";
import { BsArrowRight } from "react-icons/bs";

const cardData = [
  {
    imgSrc: besides,
    title: "Bsides",
    category: "Event Branding",
    description:
      "We worked closely with the BSides team to develop a cohesive visual identity for the event, ensuring that the curtain raiser, branding board, brochures, and standees not only aligned with the conference theme but also effectively engaged attendees by reflecting the dynamic and innovative spirit of the cybersecurity hackathon community.",
  },
  {
    imgSrc: bmg,
    title: "Best Money Gold",
    category: "Finance",
    description:
      "Best Money is a gold seller in the finance industry. We managed their Google campaigns for a long term, driving significant sales growth and multiplying their revenue compared to the previous financial year.Through strategic ad placements and data-driven optimization, we helped them reach the right audience.",
  },
  {
    imgSrc: sisiulogo,
    title: "Sisu Eclipse",
    category: "ART Dealer",
    description:
      "Sisu Eclipse is a distinguished art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform, ensuring a seamless and visually engaging interface. The logo creatively reflects the themes of an eclipse and paintings, capturing the essence of their artistic vision and brand identity.",
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
      id="testimonials"
      className=" h-auto py-8 md:py-20 px-7 lg:px-20 bg-[radial-gradient(50%_60%_at_100%_50%,#010741_0%,rgba(2,6,52,0)_80%)] backdrop-blur-[50px]"
    >
      <div className=" mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block">
          <h2 className="text-[80px] sm:text-[100px] md:text-[130px] font-200 text-[#FFFFFFCC]">
            Our
          </h2>
          <h2 className="ml-10 sm:ml-16 md:ml-20 text-[80px] sm:text-[100px] md:text-[130px] font-300 text-[#FFFFFF]">
            Impact
          </h2>
        </div>
        <div className="leading-none block md:hidden">
          <h2 className="text-[44px] font-300 text-[#FFFFFF]">Our Impact</h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-lg sm:text-xl max-w-xl text-[#FFFFFFCC] leading-relaxed tracking-[0.85px]">
          Hear from those who’ve experienced the Transformation. See how our
          Unique Approach has empowered Brands to overcome Challenges and
          achieve remarkable Success.
        </p>
      </div>
      <div className="relative w-full max-w-5xl lg:max-w-6xl mx-auto">
        <div className="relative w-full bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)] backdrop-blur-[1px] rounded-lg p-6 flex flex-wrap md:flex-nowrap items-center shadow-lg">
          <div className="flex text-white w-full sm:w-2/4 mt-8 sm:mt-[30%]">
            <img
              src={cardData[currentIndex].imgSrc}
              alt={cardData[currentIndex].title}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black"
            />
            <div className="flex flex-col ml-4">
              <p className="text-white mt-2 sm:mt-4 text-lg sm:text-xl">
                {cardData[currentIndex].title}
              </p>
              <p className="text-white text-sm sm:text-base">
                {cardData[currentIndex].category}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/3 bg-black/80 mt-6 md:mt-0 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-4xl font-semibold">
              {cardData[currentIndex].title}
            </h2>
            <p className="mt-4 text-white text-lg sm:text-xl font-light leading-relaxed">
              {cardData[currentIndex].description}
            </p>
            <button className="mt-8 flex items-center bg-[#003ad6] text-white px-4 py-2 rounded-md transition hover:bg-blue-700">
              Know More <BsArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)] text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-[linear-gradient(81deg,#132025_0.63%,rgba(9,29,127,0.60)_39.18%,#4B5A7B_97.78%)] text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-10 md:mt-20"></div>
    </div>
  );
};

export default ClientReviews;
