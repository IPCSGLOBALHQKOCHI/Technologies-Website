import BhanooDesktop from "../../../src/assets/videos/Bento/Technology/Bhanoo Web.mp4";
import BhanooMob from "../../../src/assets/videos/Bento/Technology/Bhanoo Mobile.mp4";
import DMTools from "../../../src/assets/videos/Bento/Technology/DM Tools.mp4";

const Technology = () => {
  return (
    <div className="flex flex-col p-16">
      <div className="flex justify-between">
        <div className="text-[#FFFFFF] text-[200px] font-200 mt-12">
          Technology
        </div>
        <div className="text-[#FFFFFF] text-[100px] font-200 mt-2">02</div>
      </div>
      <div className="text-[#FFFFFF] p-6 mt-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-400">Web Development</h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Building dynamic, high-performance Websites.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-40 ">Mobile App Development</h3>
              <p className="text-xl text-[#FFFFFF99 mt-2">
                 Designing scalable and user-friendly Apps.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
          {/* Right Side */}
          <div className="space-y-8 text-left ml-8">
            <div>
              <h3 className="text-3xl font-40 ">E-Commerce</h3>
              <p className="text-xl text-[#FFFFFF99 mt-2">
                Delivering complete e-commerce solutions for Businesses.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-6 pt-24">
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl flex flex-col h-[440px]">
          <video
            src={BhanooDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 bg-gray-100 mr-[15%] rounded-3xl h-60">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>

        <div className="col-span-1 row-span-1 rounded-3xl -ml-[15%] overflow-hidden h-80">
        <video
            src={DMTools}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 bg-black mr-[15%] -mt-20  rounded-3xl flex flex-col h-[465px]">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl -ml-[15%]  flex flex-col h-96">
        <video
            src={BhanooMob}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 bg-white -mt-20 mb-3 rounded-3xl">
          <h2 className="text-gray-800 font-bold">Color Palette</h2>
          <p className="text-red-500 font-bold">923.36</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
