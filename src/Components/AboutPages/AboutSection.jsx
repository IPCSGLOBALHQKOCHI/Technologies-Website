import React from "react";
import About2Img from "../../assets/images/about2img.png"
function AboutSection() {
  return (
    <div className="h-auto p-24">
      <h1 className="text-7xl font-400 text-[#ffffff] ">Empowering Businesses with Cutting-Edge Technology</h1>
      <p className="font-300 text-xl mt-8 text-[#D9D9D9]">
        With unstoppable energy, we push forward to achieve remarkable results
        that make an impact. And we have no plans to slow down! This case study
        highlights the transformative solutions we have Implemented, showcasing
        the Growth, Success and Positive changes we have driven for our Clients
        through Innovative Strategies and Impactful Execution. Building dynamic,
        high-performance websites, designing scalable mobile apps, and
        delivering complete e-commerce solutions to drive business growth and
        enhance user experiences.
      </p>
      <img src={About2Img} alt="team" className="p-16"/>
      <div className=" w-full border-b-[2px] border-[#3A3A3A]"></div>

    </div>
  );
}

export default AboutSection;
