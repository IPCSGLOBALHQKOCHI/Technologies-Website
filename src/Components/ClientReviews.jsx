import { useState, useEffect } from "react";
import { cardDataReviews } from "../constants/Constants";

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = cardDataReviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalReviews]);

  return (
    <div
      id="testimonials"
      className="h-auto py-8 md:py-20 px-7 lg:px-20 bg-[radial-gradient(50%_60%_at_100%_50%,#010741_0%,rgba(2,6,52,0)_80%)] backdrop-blur-[50px]"
    >
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block">
          <h2 className="text-[80px] sm:text-[100px] md:text-[130px] font-200 text-[#FFFFFFCC]">Our</h2>
          <h2 className="ml-10 sm:ml-16 md:ml-20 text-[80px] sm:text-[100px] md:text-[130px] font-300 bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
            Impact
          </h2>
        </div>
        <div className="leading-none block md:hidden">
          <h2 className="text-[44px] font-300 text-[#FFFFFF]">Our <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">Impact</span></h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-lg sm:text-xl max-w-xl text-[#FFFFFFCC] leading-relaxed tracking-[0.85px]">
          Hear from those who’ve experienced the Transformation. See how our Unique Approach has empowered Brands to
          overcome Challenges and achieve remarkable Success.
        </p>
      </div>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-2 md:p-6 justify-center items-center max-w-[1580px] mx-0 md:mx-20">
        {[...Array(window.innerWidth < 768 ? 1 : 2)].map((_, i) => {
          const index = (currentIndex + i) % totalReviews;
          const project = cardDataReviews[index];
          return (
            <div key={project.id} className="relative w-full bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <div
                className="relative h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImg})` }}
              >
                <div className="absolute top-28 left-4 w-20 h-20 bg-black rounded-full shadow-lg">
                  <img src={project.imgSrc} alt={project.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-6 mt-4">
                <h3 className="text-xl font-600">{project.title}</h3>
                <h3 className="text-lg font-400">{project.category}</h3>
                <p className="text-sm text-[#1f1f1f99] mt-1 line-clamp-5 md:line-clamp-none">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-10 md:mt-20"></div>
    </div>
  );
};

export default ClientReviews;
