import React, { forwardRef } from "react";
// import sisuLogo from "../../../src/assets/images/sisiu logo.png";
// import makayiramLogo from "../../../src/assets/images/maklogoclient.png";
// import image1 from "../../../src/assets/images/casestudyimage.png";
// import image2 from "../../../src/assets/images/bentoimage2.png";
// import figmaLogo from "../../../src/assets/images/figma logo.png";
// import jsLogo from "../../../src/assets/images/js logo.png";
// import reactLogo from "../../../src/assets/images/react logo.png";
// import globalLogo from "../../../src/assets/vectors/logo global.png";
// import highGraph from "../../../src/assets/images/high graph.png";
// import lowGraph from "../../../src/assets/images/low graph.png";
// import seoGraph from "../../../src/assets/images/seo graph.png";
import CaseStudyMobile from "./CaseStudyMobile";

const CaseStudySection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="casestudy"
      className="min-h-screen py-6 lg:py-20 px-6 lg:px-20 text-[#0F191E]"
    >
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block px-16 ">
          <h2 className="text-[50px] md:text-[130px] font-200 text-[#FFFFFFCC]">
            Case
          </h2>
          <h2 className="ml-14 text-[50px] md:text-[130px] font-300 text-[#FFFFFF]">
            Study
          </h2>
        </div>
        <div className="block md:hidden">
          <h2 className="text-[#FFFFFF] text-5xl font-300 mb-4">Case Study</h2>
        </div>
        <p className="mt-2 md:px-20 font-200 md:font-200 text-base sm:text-lg md:text-xl text-[#FFFFFFCC] tracking-[1px] md:tracking-[0.86px] leading-relaxed">
          This case study highlights the transformative solutions we have
          implemented, showcasing the Growth, Success, and Positive changes we
          have driven for our Clients through Innovative Strategies and
          Impactful Execution.
        </p>
      </div>
      <div className="pt-10">
        <CaseStudyMobile/>
      </div>

    </section>
  );
});

export default CaseStudySection;
{/* <div className="md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2 md:p-6 hidden">
        <div className="col-span-1 md:col-span-2 bg-[#0B0B0B] p-4 md:p-6 rounded-3xl flex flex-col justify-center h-48 md:h-64 hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <h2 className="text-3xl md:text-5xl text-[#FFFFFF] font-300">
            Hi there!
          </h2>
          <p className="text-[#FFFFFF] text-opacity-50 font-300 text-lg md:text-2xl mt-4 md:mt-8">
            Let's walk you through our Success Stories.
          </p>
        </div>

        <div className="p-4 md:p-6 rounded-3xl flex flex-col h-48 md:h-64 bg-[#0B0B0B] hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <h2 className="text-xl md:text-2xl font-500 text-[#FDDA21] text-center">
            Branding
          </h2>
          <img
            src={sisuLogo}
            alt="sisu logo"
            className="w-16 h-16 md:w-24 md:h-24 mx-auto mt-4"
          />
          <p className="text-xs md:text-sm text-[#EB7231] font-400 px-3 text-center mt-2">
            Curating Art with Passion, Delivering Masterpieces with Precision
          </p>
        </div>

        <div className="h-48 md:h-64 p-4 md:p-6 bg-[#0B0B0B] bg-[radial-gradient(circle_at_0%_top,rgba(41,51,39,0.6)_0%,transparent_100%)] hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)] rounded-3xl flex flex-col justify-center">
          <h2 className="text-lg md:text-xl font-500 text-[#A1FFAC] text-center">
            Landing Page
          </h2>
          <img
            src={makayiramLogo}
            alt="makayiram logo"
            className="w-16 h-16 md:w-24 md:h-24 mx-auto mt-4"
          />
          <p className="text-[#DEDCB2] text-center font-500 text-sm md:text-base">
            UI/UX Design
          </p>
        </div>

        <div className="bg-[#0B0B0B] p-4 rounded-3xl h-48 md:h-64 hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <h2 className="text-2xl md:text-3xl text-center font-500 text-[#FFFFFFCC]">
            Tools We Use
          </h2>
          <p className="font-400 text-sm md:text-base text-[#FFFFFFCC] pt-4 md:pt-6 px-3">
            Discover the powerful tools we use to craft, enhance, and elevate
            our content for maximum impact.
          </p>
        </div>

        <div className="rounded-3xl h-40 md:h-60 p-1 flex items-center justify-center">
          <img
            src={image1}
            alt="bentoimage"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="bg-[#0B0B0B] col-span-1 md:col-span-2 mr-0 md:mr-[2%] p-4 md:p-6 pt-2 rounded-3xl flex flex-col space-x-4 h-40 md:h-60 hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <div className="flex justify-between w-full">
            <div className="max-w-[50%]">
              <p className="text-[#9999FF] text-[10px] md:text-[12px]">
                Before (Feb 2024)
              </p>
              <p className="text-[#FFFFFF] text-[8px] md:text-[10px]">
                Zero Organic reach, no Google Ranking!
              </p>
            </div>
            <div className="max-w-[50%] text-left">
              <p className="text-[#B659FF] text-[10px] md:text-[12px]">
                After (Nov 2024)
              </p>
              <p className="text-[#FFFFFF] text-[8px] md:text-[10px]">
                In 8 months, Organic reach multiplied and keyword rankings to
                the Top 10.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 md:space-x-4 mt-4">
            <img
              src={lowGraph}
              alt="Low Graph"
              className="w-12 md:w-20 h-auto object-contain mt-14"
            />
            <div className="border border-[#B659FF] rounded-full px-4 md:px-6 py-1 md:py-2 flex items-center justify-center">
              <h2 className="text-[#FFFFFF] font-medium text-xs md:text-sm">
                MAKAYIRAM
              </h2>
            </div>
            <img
              src={highGraph}
              alt="High Graph"
              className="w-12 md:w-20 h-auto object-contain"
            />
          </div>
          <div className="flex justify-between text-[8px] md:text-[10px] text-start mt-1">
            <div className="hidden xl:block">
              <p className="text-[#FFFFFF]">
                Total Clicks: <span className="text-[#9999FF]">52</span>
              </p>
              <p className="text-[#FFFFFF]">
                Impressions: <span className="text-[#9999FF]">801</span>
              </p>
            </div>
            <div className="hidden xl:block">
              <p className="text-[#FFFFFF]">
                Total Clicks: <span className="text-[#B659FF]">526</span>
              </p>
              <p className="text-[#FFFFFF]">
                Impressions: <span className="text-[#B659FF]">25.7 k</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0B0B0B] col-span-1 -ml-0 md:-ml-[2%] p-4 md:p-6 pt-6 md:pt-10 rounded-3xl flex flex-col h-40 md:h-60 hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <h2 className="text-lg md:text-xl font-400 text-[#FFF]">
            Client:{" "}
            <span className="text-lg md:text-xl text-[#FFFFFF] font-500">
              MAKAYIRAM
            </span>
          </h2>
          <p className="text-lg md:text-xl font-400 text-[#FFFFFF] pt-2 text-opacity-50">
            From zero organic reach to Top 10 Google rankings in just 8 months!
          </p>
        </div>

        <div className="flex flex-col h-40 md:h-52 space-y-2 md:space-y-4">
          <div className="flex flex-row space-x-2 md:space-x-4 px-4 md:px-6 pt-4 md:pt-8 justify-center">
            <div className="bg-[#000000] text-[#FFFFFFFF] text-xl md:text-2xl font-700 w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center border-[#00005B] border shadow-[0_0_1px_#9999FF,inset_0_0_1px_#9999FF,0_0_2px_#00005B,0_0_5px_#00005B,0_0_15px_#9999FF]">
              Pr
            </div>
            <div className="bg-[#000000] text-[#FFFFFFFF] text-xl md:text-2xl font-700 w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center border-[#022957] border shadow-[0_0_1px_#00A9FF,inset_0_0_1px_#00A9FF,0_0_3px_#022957,0_0_6px_#022957,0_0_15px_#00A9FF]">
              Ps
            </div>
            <div className="bg-[#000000] text-[#FFFFFFFF] text-xl md:text-2xl font-700 w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center border-[#390000] border shadow-[0_0_1px_#FF9A00,inset_0_0_1px_#FF9A00,0_0_3px_#390000,0_0_6px_#390000,0_0_15px_#FF9A00]">
              Ai
            </div>
          </div>
          <div className="flex flex-row space-x-2 md:space-x-4 px-4 md:px-6 pt-2 md:pt-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#000000] text-[#FFFFFFFF] rounded-xl flex items-center justify-center border-[#fa3c3c] border shadow-[0_0_2px_#00CF7F,inset_0_0_2px_#00CF7F,0_0_4px_#FF0000,0_0_8px_#FF0000,0_0_15px_#00CF7F]">
              <img
                src={figmaLogo}
                alt="figma"
                className="w-5 h-5 md:w-7 md:h-7"
              />
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#000000] rounded-xl flex items-center justify-center border-[#F6FF00] border shadow-[0_0_2px_#555803,inset_0_0_2px_#555803,0_0_4px_#F6FF00,0_0_8px_#F6FF00,0_0_15px_#555803]">
              <img src={jsLogo} alt="js" className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#000000] rounded-xl flex items-center justify-center border-[#57C4DD] border shadow-[0_0_2px_#034155,inset_0_0_2px_#034155,0_0_4px_#57C4DD,0_0_8px_#57C4DD,0_0_15px_#034155]">
              <img
                src={reactLogo}
                alt="react"
                className="w-5 h-5 md:w-7 md:h-7"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-[#0B0B0B] p-4 md:p-6 rounded-3xl h-48 md:h-60 2xl:h-80 hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <div className="border-[1px] border-[#B659FF] rounded-full text-center justify-center mx-4 md:mx-8">
            <h2 className="text-2xl md:text-3xl font-200 text-center py-2 md:py-3 text-[#FFFFFF]">
              16-Year Legacy
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-center pt-4 md:pt-6 text-[#FFFFFFB2]">
            We’re part of a 16-Year Legacy and that’s our Strength.
          </p>
        </div>

        <div className="bg-[#0B0B0B] col-span-1 -mr-0 md:-mr-[25%] text-white p-2 md:p-4 rounded-3xl flex flex-col hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <h2
            className="text-3xl md:text-5xl font-600 text-start"
            style={{
              background: "linear-gradient(90deg, #58A2FD 0%, #063C80 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            SEO
          </h2>
          <p className="text-xs font-300">Keyword Ranking</p>
          <img src={seoGraph} alt="seo graph" className="w-full h-auto mt-2" />
          <p className="text-xs font-400 mt-2">
            Keyword : “Best Plantation Resort in Munnar”
          </p>
        </div>

        <div className="bg-[#0B0B0B] col-span-1 ml-0 md:ml-[25%] p-4 md:p-6 rounded-3xl flex flex-col justify-center hover:shadow-[0px_0px_20px_5px_rgba(0,169,255,0.3)]">
          <img src={globalLogo} alt="global logo" className="w-full h-auto" />
        </div>

        <div className="rounded-3xl flex flex-col justify-center ">
          <img src={image2} alt="image 2" className="w-full h-40 md:h-60" />
        </div>
      </div> */}