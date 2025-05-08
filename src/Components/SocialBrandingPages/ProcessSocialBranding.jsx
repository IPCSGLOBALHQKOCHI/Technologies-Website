import soc1 from "../../assets/images/soc1.png";
import soc2 from "../../assets/images/soc2.png";
import soc3 from "../../assets/images/soc3.png";
import { socialBrandingprocess } from "../../constants/Constants";

const ProcessSocialBranding = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-0 md:py-10 mx-auto">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-400 text-left pb-2 mb-8 sm:mb-12 bg-gradient-to-r from-[#001BCB] to-[#FE55D9] animate-gradient-fill bg-clip-text text-transparent">
        Building a Brand that Speaks
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 w-full flex flex-col gap-6 sm:gap-8 mt-4 sm:mt-6 lg:mr-12">
          <img
            src={soc1}
            alt="Social Media Identity"
            className="rounded-xl shadow-md w-full h-auto"
          />
          <img
            src={soc2}
            alt="Social Brand"
            className="rounded-xl shadow-md w-full h-auto"
          />
          <img
            src={soc3}
            alt="Brand Reach"
            className="rounded-xl shadow-md w-full h-auto"
          />
        </div>

        <div className="lg:w-2/3 w-full flex flex-col gap-6 mb-12 sm:mb-16 relative">
          <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-0 h-full w-[3px] sm:w-[4px] lg:w-[5px] bg-gray-500 -translate-x-1/2" />

          {socialBrandingprocess.map((service, index) => (
            <div key={index} className="flex items-start gap-6 sm:gap-8 lg:gap-12 relative mt-8">
              <div className="relative">
                <div className="z-10 relative rounded-xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
                  <img src={service.imgeUrl} alt="" className="object-contain w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-400 text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#ffffff]/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSocialBranding;
