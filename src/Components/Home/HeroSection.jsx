import React from "react";
import bgImage from "../../../src/assets/images/home bg.png";

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" h-screen bg-cover bg-center snap-start"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
});

export default HeroSection;
