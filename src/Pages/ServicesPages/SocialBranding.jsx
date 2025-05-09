// import Apple from "../../../src/assets/videos/Bento/Social Branding/Apple.mp4";
// import coconut from "../../../src/assets/videos/Bento/Social Branding/Coconut.mp4";
// import jackfruit from "../../../src/assets/videos/Bento/Social Branding/Jackfruit.mp4";
// import mango from "../../../src/assets/videos/Bento/Social Branding/Mango.mp4";
import AboutSocialbranding from "../../Components/SocialBrandingPages/AboutSocialbranding";
import FaqSocial from "../../Components/SocialBrandingPages/FaqSocial";
import HeroSection from "../../Components/SocialBrandingPages/HeroSection";
import ProcessSocialBranding from "../../Components/SocialBrandingPages/ProcessSocialBranding";
import ServicesSocialBranding from "../../Components/SocialBrandingPages/ServicesSocialBranding";

const SocialBranding = () => {
  return (
    <div>
      <HeroSection />
      <AboutSocialbranding />
      <ServicesSocialBranding />
      <ProcessSocialBranding />
      <FaqSocial />
    </div>
  );
};

export default SocialBranding;
