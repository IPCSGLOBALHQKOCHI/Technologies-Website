import React from "react";

const ServicesSections = () => {
  return (
    <section className=" px-6 w-full">
      <div className="flex items-center justify-between">
        <div className="max-w-[55%]">
          <h2 className="text-6xl text-[#FFFFFF] font-500">Branding</h2>
          <p className="text-2xl font-400 text-[#FFFFFF] tracking-[0.68px] mt-10">
            From defining identity and values to creating premium logos,
            cohesive materials, immersive visuals, and functional product
            designs that captivate and leave a lasting impression.
          </p>
        </div>
        <p className="text-[350px] font-200 text-[#FFFFFF]">01</p>
      </div>

      <div className="w-full border-b-[2px] border-[#3A3A3A] mx-6"></div>
    </section>
  );
};

export default ServicesSections;
