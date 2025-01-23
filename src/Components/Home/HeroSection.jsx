import bgImage from "../../../src/assets/images/home bg.png";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center snap-start"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
};

export default HeroSection;
