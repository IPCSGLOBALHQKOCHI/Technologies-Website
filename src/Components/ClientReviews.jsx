import besides from "../../src/assets/images/besides-logo.png";
import bmg from "../../src/assets/images/best-money logo.jpg";
import sisiulogo from "../../src/assets/images/sisiulogo.png";
import bsidesbg from "../../src/assets/images/bsidesbg.jpg";
import bmgbg from "../../src/assets/images/bmgbg.png";
import sisubg from "../../src/assets/images/sisiubg.png";

const cardData = [
  {
    imgSrc: besides,
    bgSrc: bsidesbg,
    title: "Bsides",
    description:
      "We helped the BSides team create event branding collaterals, including a curtain raiser, branding board, brochures, and standees. The design captures the essence of the cybersecurity hackathon community conference.",
  },
  {
    imgSrc: bmg,
    bgSrc: bmgbg,
    title: "Best Money Gold",
    description:
      "Best Money is a gold seller in the finance industry. We managed their Google campaigns for nearly a year, driving significant sales growth and multiplying their revenue compared to the previous financial year.",
  },
  {
    imgSrc: sisiulogo,
    bgSrc: sisubg,
    title: "Sisu Eclipse",
    description:
      "Sisu Eclipse is an art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform. The logo reflects the themes of an eclipse and paintings.",
  },
];

const ClientReviews = () => {
  return (
    <div id="testimonials" className="py-8 md:py-20 px-7 lg:px-20 bg-[radial-gradient(50%_60%_at_100%_50%,#010741_0%,rgba(2,6,52,0)_80%)] backdrop-blur-[50px]">
      <div className=" mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block">
          <h2 className="text-[80px] sm:text-[100px] md:text-[130px] font-200 text-[#FFFFFFCC]">
            Trusted
          </h2>
          <h2 className="ml-10 sm:ml-16 md:ml-20 text-[80px] sm:text-[100px] md:text-[130px] font-300 text-[#FFFFFF]">
            Voices
          </h2>
        </div>
        <div className="leading-none block md:hidden">
          <h2 className="text-[44px] font-300 text-[#FFFFFF]">
            Trusted Voices
          </h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-lg sm:text-xl max-w-xl text-[#FFFFFFCC] leading-relaxed tracking-[0.85px]">
          Hear from those who’ve experienced the Transformation. See how our
          Unique Approach has empowered Brands to overcome Challenges and
          achieve remarkable Success.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10 md:mt-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-72 md:w-80 h-auto bg-[#FFFFFF] flex flex-col mb-4 md:mt-0"
          >
            <div className="relative">
              <img
                src={card.bgSrc}
                alt="bg"
                className="h-48 w-full "
              />
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-20 h-20 p-2 object-cover rounded-full bg-[#0B1215] absolute -translate-x-1/2 left-12 -bottom-8"
              />
            </div>
            <h3 className="text-left font-500 text-xl sm:text-3xl text-[#0B1215] mt-10 px-4">
              {card.title}
            </h3>
            <p className="mt-1 text-base font-300 text-[#0B1215] p-3">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-20"></div>
    </div>
  );
};

export default ClientReviews;
