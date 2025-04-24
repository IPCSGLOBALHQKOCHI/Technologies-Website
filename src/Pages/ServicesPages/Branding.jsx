// import Aspekta from "../../../src/assets/videos/Bento/Branding/Font.mp4";
// import ColorPalette from "../../../src/assets/videos/Bento/Branding/Color Palette.mp4";
// import Sisu1 from "../../../src/assets/videos/Bento/Branding/SISU Branding.mp4";
// import BillBoard from "../../../src/assets/videos/Bento/Branding/Hoarding Mockup.mp4";
// import SisuLogo from "../../../src/assets/videos/Bento/Branding/SISU Logo.mp4";
// import SisuSlider from "../../../src/assets/videos/Bento/Branding/Photo Slide SISU.mp4";
// import Sisu2 from "../../../src/assets/videos/Bento/Branding/SISU Band.mp4";
import HeroSection from "../../Components/BrandingPages/HeroSection";
import Servicesbranding from "../../Components/BrandingPages/Servicesbranding";
import AboutBranding from "../../Components/BrandingPages/AboutBranding";
import ProcessBranding from "../../Components/BrandingPages/ProcessBranding";

const Branding = () => {
  return (
    <div>
<HeroSection/>
<AboutBranding/>
<Servicesbranding/>
<ProcessBranding/>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4 sm:p-6 pt-8 sm:pt-12 md:pt-16 lg:pt-24">
        <div className="col-span-2 row-span-1 rounded-3xl sm:mr-[25%] overflow-hidden h-48 sm:h-64">
          <video
            src={SisuLogo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 sm:-ml-[50%] sm:mr-[50%] rounded-3xl overflow-hidden h-48 sm:h-64">
          <video
            src={SisuSlider}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl sm:-ml-[50%] overflow-hidden h-48 sm:h-64">
          <video
            src={Aspekta}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 bg-[#FFFFFF] overflow-hidden rounded-3xl h-[300px] sm:h-[520px]">
          <video
            src={Sisu1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-3xl h-48 sm:h-64">
          <video
            src={Sisu2}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl bg-black overflow-hidden h-48 sm:h-64">
        <video
            src={ColorPalette}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" hidden lg:block col-span-1 row-span-2 bg-white overflow-hidden rounded-3xl h-[300px] sm:h-[520px]">
          <video
            src={ColorPalette}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden h-48 sm:h-64">
          <video
            src={BillBoard}
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

export default Branding;