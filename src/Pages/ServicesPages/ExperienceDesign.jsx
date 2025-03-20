import MakayiramMob from "../../../src/assets/videos/Bento/Experience design/Makayiram Mobile.mp4";
import MakayiramDesktop from "../../../src/assets/videos/Bento/Experience design/Makayiram Web.mp4";
import ipcsglobal from "../../../src/assets/videos/Bento/Experience design/IPCS Global Web.mp4";
import Fonts from "../../../src/assets/videos/Bento/Experience design/Favorite Fonts.mp4";
import UIUX from "../../../src/assets/videos/Bento/Experience design/UI UX.mp4";

const ExperienceDesign = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row justify-between leading-none text-left mb-10">
        <div className="order-1 sm:order-2 text-[#FFFFFF] text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[100px] font-200 mt-14 sm:mt-8 px-4">
          05
        </div>
        <div className="order-2 sm:order-1 text-[#FFFFFF] text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] font-200 mt-4 sm:mt-20 px-4">
          Experience Design
        </div>
      </div>

      {/* Services Section */}
      <div className="text-[#FFFFFF] p-4 sm:p-4 md:p-6 mt-4 sm:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">Website Design</h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-1 sm:mt-2">
                Tailored Strategies to Boost Conversions and Maximize ROI.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">Web App Design</h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-1 sm:mt-2">
                Functional, intuitive interfaces to optimize user engagement.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">Mobile App Design</h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-1 sm:mt-2">
                Smart, efficient solutions to enhance operational flow.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">Software Design</h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-1 sm:mt-2">
                Industry-specific workflows designed for operational efficiency.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4 md:p-6 pt-8 sm:pt-12">
        <div className="col-span-1 row-span-1 rounded-2xl sm:rounded-3xl bg-black overflow-hidden h-32 sm:h-48 md:h-60 lg:h-80">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Dining"
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl sm:rounded-3xl">
          <video
            src={MakayiramDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden">
          <video
            src={MakayiramMob}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-1 row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col">
          <video
            src={Fonts}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-gray-100 overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-black rounded-2xl sm:rounded-3xl overflow-hidden">
          <video
            src={UIUX}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl sm:rounded-3xl">
          <video
            src={Fonts}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-2 row-span-1 rounded-2xl sm:rounded-3xl overflow-hidden h-32 sm:h-48 md:h-60">
          <video
            src={ipcsglobal}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ExperienceDesign;