import Aspekta from "../../../src/assets/videos/Bento/Branding/Font.mp4"
import ColorPalette from '../../../src/assets/videos/Bento/Branding/Color Palette.mp4'
import Sisu1 from "../../../src/assets/videos/Bento/Branding/SISU Branding.mp4"
import BillBoard from "../../../src/assets/videos/Bento/Branding/Hoarding Mockup.mp4"
import SisuLogo from "../../../src/assets/videos/Bento/Branding/SISU Logo.mp4"
import SisuSlider from '../../../src/assets/videos/Bento/Branding/Photo Slide SISU.mp4'
import Sisu2 from '../../../src/assets/videos/Bento/Branding/SISU Band.mp4'
const Branding = () => {
  return (
    <div className="flex flex-col p-16">
      <div className="flex justify-between">
        <div className="text-[#FFFFFF] text-[220px] font-200 mt-4">
          Branding
        </div>
        <div className="text-[#FFFFFF] text-[120px] font-200 mt-1">01</div>
      </div>
      <div className="text-[#FFFFFF] p-6 mt-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-400">
                Brand Consulting
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Helping businesses define their identity and values.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400 ">
                Brand Identity
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Crafting a narrative that reflects the brand's essence.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400 ">
                Logo Design
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Designing globally adaptable and premium-quality logos.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
          {/* Right Side */}
          <div className="space-y-8 text-left ml-8">
            <div>
              <h3 className="text-3xl font-400 ">
                Brand Collateral
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Delivering cohesive marketing materials.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400 ">
                2D/3D Visualization
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Creating visuals that enhance brand impact.
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
            <div>
              <h3 className="text-3xl font-400 ">
                Product Design
              </h3>
              <p className="text-xl text-[#FFFFFF99] mt-2">
                Designing products that are both functional and stylish
              </p>
              <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 p-6 pt-24">
        <div className="col-span-2 row-span-1 rounded-3xl mr-[25%] overflow-hidden h-64">
        <video
        src={SisuLogo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      />
        </div>
        <div className="col-span-1 row-span-1 -ml-[50%] mr-[50%] rounded-3xl overflow-hidden">
        <video
        src={SisuSlider}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl -ml-[50%] overflow-hidden">
      <video
        src={Aspekta}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      />
    </div>

        <div className="col-span-1 row-span-2 bg-[#FFFFFF] overflow-hidden rounded-3xl flex flex-col h-[520px]">
        <video
        src={Sisu1}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden  rounded-3xl">
        <video
        src={Sisu2}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      />
        </div>
        <div className="col-span-1 row-span-1 rounded-3xl bg-black overflow-hidden">
        {/* <video
        src={Sisu2}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      /> */}
        </div>
        <div className="col-span-1 row-span-2 bg-white overflow-hidden rounded-3xl">
        <video
        src={ColorPalette}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      />
        </div>

        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden ">
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
