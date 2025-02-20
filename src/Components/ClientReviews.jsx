import React from "react";

const ClientReviews = () => {
  return (
    <div id="testimonials" className="py-8 md:py-20 px-7 lg:px-20">
      {/* Heading Section */}
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
      {/* Reviews Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-20 mt-10 md:mt-20 px-3">
        <div className="w-full sm:w-80 md:w-72 h-auto md:h-72 rounded-3xl bg-[#0B0B0BCC] p-6 flex flex-col">
          <h3 className="text-center font-400 text-3xl sm:text-4xl text-[#FFFFFF]">
            Makayiram
          </h3>
          <p className="mt-2 text-lg font-300 text-[#E1E1E1]">
            IPCS Technologies transformed our minimal Google Visibility into a
            top-ranked Website through their proper SEO Strategies.
          </p>
        </div>
        <div className="w-full sm:w-80 md:w-80 h-auto md:h-72 rounded-3xl bg-[#0B0B0BCC] p-6 flex flex-col">
          <h3 className="text-center font-400 text-3xl sm:text-4xl text-[#FFFFFF]">
            Sky Power Energy
          </h3>
          <p className="mt-2 text-lg font-300 text-[#E1E1E1]">
            Our Organic leads were very low, but with the support of IPCS
            Technologies, we achieved Steady and Rewarding Growth.
          </p>
        </div>
        <div className="w-full sm:w-80 md:w-72 h-auto md:h-72 rounded-3xl bg-[#0B0B0BCC] p-6 flex flex-col">
          <h3 className="text-center font-400 text-3xl sm:text-4xl text-[#FFFFFF]">
            Sisu
          </h3>
          <p className="mt-2 text-lg font-300 text-[#E1E1E1]">
            Creating the perfect blend of Creativity and Professionalism for our
            Art Website felt impossible until IPCS Technologies delivered
            brilliance.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-20"></div>
    </div>
  );
};

export default ClientReviews;
