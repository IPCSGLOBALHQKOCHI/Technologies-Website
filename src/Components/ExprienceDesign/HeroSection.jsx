import React from 'react'
// import expedesgnImg from "../../assets/images/Pages/expedesign.png"
const expedesgnImg="https://res.cloudinary.com/dn9mvkx7k/image/upload/v1746620318/expedesign_y99oqj.png"
function HeroSection() {
  return (
    <div className=" relative  h-60 md:h-96 bg-cover bg-center flex items-center justify-center">
         <img src={expedesgnImg} alt="techno" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
           <div className="text-[#FFFFFF] text-4xl sm:text-5xl md:text-7xl lg:text-[110px] xl:text-[150px] font-200 mt-4">
             Experience Design
           </div>
         </div>
       </div>
  )
}

export default HeroSection;
