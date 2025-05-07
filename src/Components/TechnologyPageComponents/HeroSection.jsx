import React from "react";
// import TechnoImg from "../../assets/images/Pages/technology.jpg";
const TechnoImg= "https://res.cloudinary.com/dn9mvkx7k/image/upload/v1746620318/technology_bxsaoo.jpg"
function HeroSection() {
  return (
    <div className=" relative  h-60 md:h-96 bg-cover bg-center flex items-center justify-center">
      <img
        src={TechnoImg} 
        alt="techno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-[#FFFFFF] text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-200 mt-12 md:mt-6">
          Technology
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
