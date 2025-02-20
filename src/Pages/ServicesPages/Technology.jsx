import BhanooDesktop from "../../../src/assets/videos/Bento/Technology/Bhanoo Web.mp4";
import BhanooMob from "../../../src/assets/videos/Bento/Technology/Bhanoo Mobile.mp4";
import DMTools from "../../../src/assets/videos/Bento/Technology/DM Tools.mp4";

const Technology = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between">
      <div className="order-1 sm:order-2 text-[#FFFFFF] text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[100px] font-200 md:mt-8  mt-14 px-4">
          02
        </div>
        <div className="order-2 sm:order-1 text-[#FFFFFF] text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-200 mt-8 sm:mt-20 md:mb-20 mb-6 px-2">
          Technology
        </div>
      </div>

      {/* Content Section */}
      <div className="text-[#FFFFFF] p-4 sm:p-6 mt-4 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {/* Left Side */}
          <div className="space-y-4 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-400">Web Development</h3>
              <p className="text-lg sm:text-xl text-[#FFFFFF99] mt-2">
                Building dynamic, high-performance Websites.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-400">Mobile App Development</h3>
              <p className="text-lg sm:text-xl text-[#FFFFFF99] mt-2">
                Designing scalable and user-friendly Apps.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4 sm:space-y-8 text-left sm:ml-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-400">E-Commerce</h3>
              <p className="text-lg sm:text-xl text-[#FFFFFF99] mt-2">
                Delivering complete e-commerce solutions for Businesses.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 sm:p-6 pt-12 sm:pt-24">
        {/* Grid Item 1 */}
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

        {/* Grid Item 2 */}
        <div className="col-span-1 row-span-1 bg-gray-100 sm:mr-[15%] rounded-3xl h-60">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>

        {/* Grid Item 3 */}
        <div className="col-span-1 row-span-1 rounded-3xl sm:-ml-[15%] overflow-hidden h-80">
          <video
            src={DMTools}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grid Item 4 */}
        <div className="col-span-1 row-span-2 bg-black sm:mr-[15%] sm:-mt-20 rounded-3xl flex flex-col h-[465px] p-4">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>

        {/* Grid Item 5 */}
        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl sm:-ml-[15%] flex flex-col h-96">
          <video
            src={BhanooMob}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Grid Item 6 */}
        <div className="col-span-1 row-span-2 bg-white sm:-mt-20 mb-3 rounded-3xl p-4">
          <h2 className="text-gray-800 font-bold">Color Palette</h2>
          <p className="text-red-500 font-bold">923.36</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;