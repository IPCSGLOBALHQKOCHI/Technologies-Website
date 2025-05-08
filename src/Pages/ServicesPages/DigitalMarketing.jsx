import AboutDM from "../../Components/DMPages/AboutDM";
import Faq from "../../Components/DMPages/Faq";
import HeroSection from "../../Components/DMPages/HeroSection";
import ProcessDM from "../../Components/DMPages/ProcessDM";
import ServicesDM from "../../Components/DMPages/ServicesDM";

const DigitalMarketing = () => {
  return (
    <div>
      <HeroSection />
      <AboutDM />
      <ServicesDM />
      <ProcessDM/>
      <Faq/>
    </div>
  );
};

export default DigitalMarketing;
