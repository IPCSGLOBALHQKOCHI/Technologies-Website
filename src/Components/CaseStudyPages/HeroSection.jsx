import React from 'react'
import caseStudyimg from "../../assets/images/casestudyimg.png"
function HeroSection() {
  return (
   <div className=" relative  h-60 md:h-96 bg-cover bg-center flex items-center justify-center">
     <img src={caseStudyimg} alt="techno" className="absolute inset-0 w-full h-full object-cover" />
     <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
       <div className="text-[#FFFFFF] text-6xl sm:text-8xl md:text-[120px] lg:text-[160px] xl:text-[200px] font-200 mt-12 md:mt-6">
         Case study
       </div>
     </div>
   </div>
  )
}

export default HeroSection
