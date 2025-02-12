import MakayiramMob from "../../../src/assets/videos/Bento/Experience design/Makayiram Mobile.mp4";
import MakayiramDesktop from "../../../src/assets/videos/Bento/Experience design/Makayiram Web.mp4";
import ipcsglobal from "../../../src/assets/videos/Bento/Experience design/IPCS Global Web.mp4"
import Fonts from "../../../src/assets/videos/Bento/Experience design/Favorite Fonts.mp4"
import UIUX from "../../../src/assets/videos/Bento/Experience design/UI UX.mp4"

const ExperienceDesign = () => {
  return (
    <div className="flex flex-col  p-16">
      <div className="flex justify-between leading-none">
        <div className="text-[#FFFFFF] text-[220px] font-200 mt-14">
          Experience Design
        </div>
        <div className="text-[#FFFFFF] text-[120px] font-200 mt-4">05</div>
      </div>
      <div className="text-[#FFFFFF] p-6 mt-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-400 px]">Website Design</h3>
              <p className="text-xl text-[#FFFFFF99] px] mt-2">
                Tailored Strategies to Boost Conversions and Maximize ROI.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400px] ">Web App Design</h3>
              <p className="text-xl text-[#FFFFFF99]px] mt-2">
                Functional, intuitive interfaces to optimize user engagement.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
          {/* Right Side */}
          <div className="space-y-8 text-left ml-8">
            <div>
              <h3 className="text-3xl font-400px] ">Mobile App Design</h3>
              <p className="text-xl text-[#FFFFFF99]px] mt-2">
                Smart, efficient solutions to enhance operational flow.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400px] ">Software Design</h3>
              <p className="text-xl text-[#FFFFFF99]px] mt-2">
                Industry-specific workflows designed for operational efficiency.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 p-6 pt-24">
        <div className="col-span-1 row-span-1 rounded-3xl bg-black overflow-hidden h-64">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Dining"
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden -mr-[40%]  rounded-3xl">
          <video
            src={MakayiramDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill"
          />
        </div>
        <div className="col-span-2 row-span-1 rounded-3xl ml-[20%] overflow-hidden">
        <video
            src={MakayiramMob}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill"
          />
        </div>

        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl flex flex-col">
        <video
            src={Fonts}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-gray-100 overflow-hidden rounded-3xl">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-black rounded-3xl overflow-hidden">
        {/* <video
            src={}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
        <video
            src={UIUX}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden h-60">
        <video
            src={ipcsglobal}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDesign;
