import React from "react";

const ClientReviews = () => {
  return (
    <div id="testimonials" className="py-20 px-6 lg:px-20">
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none">
          <h2 className="text-[130px] font-200 text-[#FFFFFFCC]">Trusted </h2>
          <h2 className="ml-20 text-[130px] font-300 text-[#FFFFFF]">Voices</h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-xl max-w-xl text-[#FFFFFFCC] leading-normal">
          Hear from those who’ve experienced the Transformation. See how our
          Unique Approach has empowered Brands to overcome Challenges and
          achieve remarkable Success.
        </p>
      </div>
      <div className="flex flex-row items-center justify-around mt-20">
        <div className="w-72 h-72 rounded-3xl bg-[#000000]">
          <h3 className="items-center text-center p-6 font-400 text-4xl text-[#FFFFFF]">Makayiram</h3>
          <p className="px-6 pt-1 text-lg font-300 text-[#E1E1E1] ">
            IPCS Technologies transformed our minimal Google Visibility into a
            top-ranked Website through their proper SEO Strategies.
          </p>
        </div>
        <div className="w-80 h-72 rounded-3xl bg-[#000000]">
          <h3 className="items-center text-center p-6 font-400 text-4xl text-[#FFFFFF]">Sky Power Energy</h3>
          <p className="px-6 text-lg font-300 text-[#E1E1E1]">
            Our Organic leads were very low, but with the support of IPCS
            Technologies, we achieved Steady and Rewarding Growth.
          </p>
        </div>
        <div className="w-72 h-72 rounded-3xl bg-[#000000]">
          <h3 className="items-center text-center p-6 font-400 text-4xl text-[#FFFFFF]">Sisu</h3>
          <p className="px-6 text-lg font-300 text-[#E1E1E1]">
            Creating the perfect blend of Creativity and Professionalism for our
            Art Website felt impossible until IPCS Technologies delivered 
            brilliance.
          </p>
        </div>
      </div>
      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-20"></div>
    </div>
  );
};

export default ClientReviews;
