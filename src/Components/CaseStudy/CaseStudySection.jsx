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
