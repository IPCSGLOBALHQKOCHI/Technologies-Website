// import BhanooDesktop from "../../../src/assets/videos/Bento/Technology/Bhanoo Web.mp4";
// import BhanooMob from "../../../src/assets/videos/Bento/Technology/Bhanoo Mobile.mp4";
// import DMTools from "../../../src/assets/videos/Bento/Technology/DM Tools.mp4";
import HeroSection from "../../Components/TechnologyPageComponents/HeroSection";
import AboutTechnology from "../../Components/TechnologyPageComponents/AboutTechnology";
import ServicesTechno from "../../Components/TechnologyPageComponents/ServicesTechno";
import StackAndTools from "../../Components/TechnologyPageComponents/StackAndTools";
import OurProcess from "../../Components/TechnologyPageComponents/OurProcess";
import FAQ from "../../Components/TechnologyPageComponents/FAQ";
import Portfolio from "../../Components/TechnologyPageComponents/Portfolio";

const Technology = () => {
  return (
    <div>
      <HeroSection/>
      <AboutTechnology/>
      <ServicesTechno/>
      <Portfolio/>
      <StackAndTools/>
      <OurProcess/>
      <FAQ/>
    {/* <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20"> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 sm:p-6 pt-12 sm:pt-24">
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
        <div className="col-span-1 row-span-1 bg-gray-100 sm:mr-[15%] rounded-3xl h-60">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>
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
        <div className="col-span-1 row-span-2 bg-black sm:mr-[15%] sm:-mt-20 rounded-3xl flex flex-col h-[465px] p-4">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>
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
        <div className="col-span-1 row-span-2 bg-white sm:-mt-20 mb-3 rounded-3xl p-4">
          <h2 className="text-gray-800 font-bold">Color Palette</h2>
          <p className="text-red-500 font-bold">923.36</p>
        </div>
      </div> */}
    {/* </div> */}
    </div>
  );
};

export default Technology;
