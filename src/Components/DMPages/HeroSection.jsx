import React from 'react'
// import DMimage from "../../assets/images/Pages/DM main.png"
const DMimage = "https://res.cloudinary.com/dn9mvkx7k/image/upload/v1746620315/DM_main_s2cuhq.png"
function HeroSection() {
  return (
 <div className=" relative  h-60 md:h-96 bg-cover bg-center flex items-center justify-center">
   <img src={DMimage} alt="techno" className="absolute inset-0 w-full h-full object-cover" />
   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
     <div className="text-[#FFFFFF] text-5xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[160px] font-200 mt-4">
       Digital Marketing
     </div>
   </div>
 </div>
  )
}

export default HeroSection;
