// import Apple from "../../../src/assets/videos/Bento/Social Branding/Apple.mp4";
// import coconut from "../../../src/assets/videos/Bento/Social Branding/Coconut.mp4";
// import jackfruit from "../../../src/assets/videos/Bento/Social Branding/Jackfruit.mp4";
// import mango from "../../../src/assets/videos/Bento/Social Branding/Mango.mp4";
import AboutSocialbranding from "../../Components/SocialBrandingPages/AboutSocialbranding";
import HeroSection from "../../Components/SocialBrandingPages/HeroSection";
import ServicesSocialBranding from "../../Components/SocialBrandingPages/ServicesSocialBranding";

const SocialBranding = () => {
  return (
    <div>
 <HeroSection/>
 <AboutSocialbranding/>
<ServicesSocialBranding/>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 sm:p-6 pt-12 sm:pt-24">
        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl flex flex-col">
          <video
            src={Apple}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-1 row-span-1 bg-gray-100 rounded-3xl h-60">
          <img
            src="your-image-url.jpg"
            className="w-full h-full object-cover"
            alt="Mountain"
          />
        </div>

        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden h-80">
          <video
            src={coconut}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-1 row-span-1 bg-black rounded-3xl flex flex-col h-60 p-4">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>

        <div className="col-span-1 row-span-2 bg-gray-900 rounded-3xl flex flex-col h-64 p-4">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>

        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl h-[340px] sm:-mt-20">
          <video
            src={jackfruit}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-1 row-span-2 bg-gray-900 rounded-3xl flex flex-col h-64 p-4">
          <h2 className="text-white font-bold">SSU Eclipse</h2>
          <p className="text-gray-400">Brand Identity</p>
        </div>

        <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl h-[340px] sm:-mt-20">
          <video
            src={mango}
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

export default SocialBranding;