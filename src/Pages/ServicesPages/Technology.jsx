// import BhanooDesktop from "../../../src/assets/videos/Bento/Technology/Bhanoo Web.mp4";
// import BhanooMob from "../../../src/assets/videos/Bento/Technology/Bhanoo Mobile.mp4";
// import DMTools from "../../../src/assets/videos/Bento/Technology/DM Tools.mp4";
import HeroSection from "../../Components/TechnologyPageComponents/HeroSection";
import AboutTechnology from "../../Components/TechnologyPageComponents/AboutTechnology";
import ServicesTechno from "../../Components/TechnologyPageComponents/ServicesTechno";
import StackAndTools from "../../Components/TechnologyPageComponents/StackAndTools";
import OurProcess from "../../Components/TechnologyPageComponents/OurProcess";
import FAQ from "../../Components/TechnologyPageComponents/FAQ";

const Technology = () => {
  return (
    <div>
      <HeroSection/>
      <AboutTechnology/>
      <ServicesTechno/>
      <StackAndTools/>
      <OurProcess/>
      <FAQ/>
    </div>
  );
};

export default Technology;
