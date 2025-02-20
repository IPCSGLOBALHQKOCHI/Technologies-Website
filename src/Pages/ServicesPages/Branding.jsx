import Aspekta from "../../../src/assets/videos/Bento/Branding/Font.mp4";
import ColorPalette from "../../../src/assets/videos/Bento/Branding/Color Palette.mp4";
import Sisu1 from "../../../src/assets/videos/Bento/Branding/SISU Branding.mp4";
import BillBoard from "../../../src/assets/videos/Bento/Branding/Hoarding Mockup.mp4";
import SisuLogo from "../../../src/assets/videos/Bento/Branding/SISU Logo.mp4";
import SisuSlider from "../../../src/assets/videos/Bento/Branding/Photo Slide SISU.mp4";
import Sisu2 from "../../../src/assets/videos/Bento/Branding/SISU Band.mp4";

const Branding = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-24">
   <div className="flex flex-col sm:flex-row justify-between mt-16 md:mt-16 mb-10 md:mb-24 px-6">
  <div className="order-1 sm:order-2 text-[#FFFFFF] text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-200 md:-mt-8 -mt-0">
    01
  </div>
  <div className="order-2 sm:order-1 text-[#FFFFFF] text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[220px] font-200 mt-4">
    Branding
  </div>
</div>
      <div className="text-[#FFFFFF] p-4 sm:p-6 mt-4 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-4 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                Brand Consulting
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Helping businesses define their identity and values.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                Brand Identity
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Crafting a narrative that reflects the brand's essence.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                Logo Design
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Designing globally adaptable and premium-quality logos.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-8 text-left sm:ml-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                Brand Collateral
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Delivering cohesive marketing materials.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                2D/3D Visualization
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Creating visuals that enhance brand impact.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-400">
                Product Design
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF99] mt-2">
                Designing products that are both functional and stylish.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4 sm:p-6 pt-8 sm:pt-12 md:pt-16 lg:pt-24">
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
      </div>
    </div>
  );
};

export default Branding;