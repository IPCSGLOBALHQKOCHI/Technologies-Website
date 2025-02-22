import sisuLogo from "../../../src/assets/images/sisiu logo.png";
import makayiramLogo from "../../../src/assets/images/makayiram logo.png";
import image1 from "../../../src/assets/images/casestudyimage.png";
import image2 from "../../../src/assets/images/bentoimage2.png";
import figmaLogo from "../../../src/assets/images/figma logo.png";
import jsLogo from "../../../src/assets/images/js logo.png";
import reactLogo from "../../../src/assets/images/react logo.png";
import globalLogo from "../../../src/assets/vectors/logo global.png";
import highGraph from "../../../src/assets/images/high graph.png";
import lowGraph from "../../../src/assets/images/low graph.png";
import seoGraph from "../../../src/assets/images/seo graph.png";

const CaseStudyMobile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-4">
      {/* First Row - Full Width on all screens (col-span-1 on mobile, col-span-2 on sm and above) */}
      <div className="bg-[#0B0B0B] p-4 rounded-3xl h-48 sm:col-span-2">
        <div className="border-[1px] border-[#B659FF] rounded-full text-center justify-center mx-4">
          <h2 className="text-2xl font-200 text-center py-2 text-[#FFFFFF]">
            16-Year Legacy
          </h2>
        </div>
        <p className="text-lg text-center pt-4 text-[#FFFFFFB2]">
          We’re part of a 16-Year Legacy and that’s our Strength.
        </p>
      </div>

      {/* Second and Third Rows - Side by Side on sm and above (col-span-1 on mobile, col-span-1 on sm and above) */}
      <div className="p-4 rounded-3xl flex flex-col h-48 bg-[#0B0B0B] sm:col-span-1">
        <h2 className="text-xl font-500 text-[#FDDA21] text-center">Branding</h2>
        <img
          src={sisuLogo}
          alt="sisu logo"
          className="w-16 h-16 mx-auto mt-4"
        />
        <p className="text-xs text-[#EB7231] font-400 px-3 text-center mt-2">
          Curating Art with Passion, Delivering Masterpieces with Precision
        </p>
      </div>

      <div className="h-48 p-4 bg-[#0B0B0B] rounded-3xl flex flex-col justify-center sm:col-span-1">
        <h2 className="text-lg font-500 text-[#A1FFAC] text-center">
          Landing Page
        </h2>
        <img
          src={makayiramLogo}
          alt="makayiram logo"
          className="w-16 h-16 mx-auto mt-4"
        />
        <p className="text-[#DEDCB2] text-center font-500 text-sm">
          UI/UX Design
        </p>
      </div>

      {/* Fourth and Fifth Rows - Side by Side on sm and above (col-span-1 on mobile, col-span-1 on sm and above) */}
      <div className="bg-[#0B0B0B] p-4 rounded-3xl h-48 sm:col-span-1">
        <h2 className="text-2xl text-center font-500 text-[#FFFFFFCC]">
          Tools We Use
        </h2>
        <p className="font-400 text-sm text-[#FFFFFFCC] pt-4 px-3">
          Discover the powerful tools we use to craft, enhance, and elevate our
          content for maximum impact.
        </p>
      </div>

      <div className="flex flex-col h-40 space-y-10 sm:col-span-1">
        <div className="flex flex-row space-x-6 pt-4 justify-center">
          <div className="bg-[#000000] text-[#FFFFFFFF] text-xl font-700 w-10 h-10 rounded-xl flex items-center justify-center border-[#00005B] border shadow-[0_0_1px_#9999FF,inset_0_0_1px_#9999FF,0_0_2px_#00005B,0_0_5px_#00005B,0_0_15px_#9999FF]">
            Pr
          </div>
          <div className="bg-[#000000] text-[#FFFFFFFF] text-xl font-700 w-10 h-10 rounded-xl flex items-center justify-center border-[#022957] border shadow-[0_0_1px_#00A9FF,inset_0_0_1px_#00A9FF,0_0_3px_#022957,0_0_6px_#022957,0_0_15px_#00A9FF]">
            Ps
          </div>
          <div className="bg-[#000000] text-[#FFFFFFFF] text-xl font-700 w-10 h-10 rounded-xl flex items-center justify-center border-[#390000] border shadow-[0_0_1px_#FF9A00,inset_0_0_1px_#FF9A00,0_0_3px_#390000,0_0_6px_#390000,0_0_15px_#FF9A00]">
            Ai
          </div>
        </div>
        <div className="flex flex-row space-x-6 pl-16 text-center items-center pt-2">
          <div className="w-10 h-10 bg-[#000000] text-[#FFFFFFFF] rounded-xl flex items-center justify-center border-[#fa3c3c] border shadow-[0_0_2px_#00CF7F,inset_0_0_2px_#00CF7F,0_0_4px_#FF0000,0_0_8px_#FF0000,0_0_15px_#00CF7F]">
            <img src={figmaLogo} alt="figma" className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-[#000000] rounded-xl flex items-center justify-center border-[#F6FF00] border shadow-[0_0_2px_#555803,inset_0_0_2px_#555803,0_0_4px_#F6FF00,0_0_8px_#F6FF00,0_0_15px_#555803]">
            <img src={jsLogo} alt="js" className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-[#000000] rounded-xl flex items-center justify-center border-[#57C4DD] border shadow-[0_0_2px_#034155,inset_0_0_2px_#034155,0_0_4px_#57C4DD,0_0_8px_#57C4DD,0_0_15px_#034155]">
            <img src={reactLogo} alt="react" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Sixth Row - Full Width on all screens (col-span-1 on mobile, col-span-2 on sm and above) */}
      <div className="bg-[#0B0B0B] p-4 pt-2 rounded-3xl flex flex-col space-x-4 h-40 sm:col-span-2">
        <div className="flex justify-between w-full">
          <div className="max-w-[50%]">
            <p className="text-[#9999FF] text-[10px]">Before (Feb 2024)</p>
            <p className="text-[#FFFFFF] text-[8px]">
              Zero Organic reach, no Google Ranking!
            </p>
          </div>
          <div className="max-w-[50%] text-left">
            <p className="text-[#B659FF] text-[10px]">After (Nov 2024)</p>
            <p className="text-[#FFFFFF] text-[8px]">
              In 8 months, Organic reach multiplied and keyword rankings to the
              Top 10.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <img
            src={lowGraph}
            alt="Low Graph"
            className="w-12 h-auto object-contain"
          />
          <div className="border border-[#B659FF] rounded-full px-4 py-1 flex items-center justify-center">
            <h2 className="text-[#FFFFFF] font-medium text-xs">MAKAYIRAM</h2>
          </div>
          <img
            src={highGraph}
            alt="High Graph"
            className="w-12 h-auto object-contain"
          />
        </div>
      </div>

      {/* Seventh Row - Full Width on all screens (col-span-1 on mobile, col-span-2 on sm and above) */}
      <div className="bg-[#0B0B0B] p-4 pt-6 rounded-3xl flex flex-col h-40 sm:col-span-2">
        <h2 className="text-lg font-400 text-[#FFF]">
          Client:{" "}
          <span className="text-lg text-[#FFFFFF] font-500">MAKAYIRAM</span>
        </h2>
        <p className="text-lg font-400 text-[#FFFFFF] pt-2 text-opacity-50">
          From zero organic reach to Top 10 Google rankings in just 8 months!
        </p>
      </div>

      {/* Tenth Row - Full Width on all screens (col-span-1 on mobile, col-span-2 on sm and above) */}
      <div className="bg-[#0B0B0B] text-white p-2 rounded-3xl flex flex-col sm:col-span-2">
        <h2
          className="text-3xl font-600 text-start"
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
    </div>
  );
};

export default CaseStudyMobile;