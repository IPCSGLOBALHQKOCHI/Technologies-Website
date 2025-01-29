import React, { forwardRef } from "react";
import sisuLogo from "../../../src/assets/images/sisiu logo.png"
import makayiramLogo from "../../../src/assets/images/makayiram logo.png"

const CaseStudySection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 px-6 lg:px-20">
      {/* Heading */}
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none tracking-[2.68px]">
          <h2 className="text-[130px] font-200 text-[#FFFFFFCC]">Case</h2>
          <h2 className="ml-14 text-[130px] font-400 text-[#FFFFFF]">Study</h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-6 text-xl max-w-xl text-[#FFFFFFCC] tracking-[0.56px] leading-normal">
          This case study highlights the transformative solutions we have
          implemented, showcasing the Growth, Success, and Positive changes we
          have driven for our Clients through Innovative Strategies and
          Impactful Execution.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-5 gap-4 p-6 min-h-screen">
        {/* Box 1 */}
        <div className="col-span-2 bg-[#0B0B0B] p-6 rounded-3xl flex flex-col justify-center h-64">
          <h2 className="text-5xl text-[#FFFFFF] font-300">Hi there!</h2>
          <p className="text-[#FFFFFF] text-opacity-50 font-300 text-2xl mt-8">
            Let's walk you through our Success Stories.
          </p>
        </div>
        {/* Box 2 */}
        <div
  className="p-6 rounded-3xl flex flex-col h-64 
 bg-[#0B0B0B] bg-[radial-gradient(circle_at_5%_top,#293327_0%,transparent_100%)] "
>
  <h2 className="text-2xl font-medium text-[#FDDA21] text-center ">Branding</h2>
  <img src={sisuLogo}></img>
</div>


        {/* Box 3 */}
        <div className=" h-64 bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-xl flex flex-col justify-center">
          <h2 className="text-xl font-bold text-center">Landing Page</h2>
          <img src={makayiramLogo}></img>
          <p>UI/UX Design</p>
        </div>

        {/* Box 4 */}
        <div className="bg-[#1A1A1A] text-white p-6 rounded-xl h-64">
          <h2 className="text-lg font-semibold">Tools We Use</h2>
          <p className="text-gray-400">
            Discover the powerful tools we use to craft, enhance, and elevate
            our content for maximum impact.
          </p>
        </div>

        {/* Box 5 */}
        <div className="bg-[#222] text-white p-6 rounded-xl flex flex-col justify-center">
          <h2 className="text-xl font-semibold">16-Year Legacy</h2>
          <p className="text-gray-400">We’re part of a 16-Year Legacy.</p>
        </div>

        {/* Box 6 */}
        <div className="col-span-2 bg-[#111] text-white p-6 rounded-xl">
          <h2 className="text-xl font-semibold">SEO Growth</h2>
          <p className="text-gray-400">Organic reach skyrocketed.</p>
        </div>

        {/* Box 7 */}
        <div className="bg-[#222] text-white p-6 rounded-xl flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Client: MAKAYIRAM</h2>
          <p className="text-gray-400">
            From zero organic reach to Top 10 Google rankings.
          </p>
        </div>
      </div>
    </section>
  );
});

export default CaseStudySection;
