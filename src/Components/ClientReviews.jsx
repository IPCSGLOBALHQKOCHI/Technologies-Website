import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { cardDataReviews } from "../constants/Constants";
import { LuCircleArrowRight,LuCircleArrowLeft } from "react-icons/lu"; // Optional: Replace with any icon set you prefer

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const totalReviews = cardDataReviews.length;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerPage = screenWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(totalReviews / cardsPerPage);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev + cardsPerPage) % totalReviews),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - cardsPerPage + totalReviews) % totalReviews),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - cardsPerPage + totalReviews) % totalReviews);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + cardsPerPage) % totalReviews);
  };

  return (
    <div
      id="testimonials"
      className="h-auto py-8 md:py-20 px-7 lg:px-20 bg-[radial-gradient(50%_60%_at_100%_50%,#010741_0%,rgba(2,6,52,0)_80%)] backdrop-blur-[50px]"
    >
      <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="leading-none hidden md:block">
          <h2 className="text-[80px] sm:text-[100px] md:text-[130px] font-200 text-[#FFFFFFCC]">Our</h2>
          <h2 className="ml-10 sm:ml-16 md:ml-20 text-[80px] sm:text-[100px] md:text-[130px] font-400 bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">
            Impact
          </h2>
        </div>
        <div className="leading-none block md:hidden">
          <h2 className="text-[44px] font-300 text-[#FFFFFF]">
            Our <span className="bg-gradient-to-r from-[#001BCB] to-[#CC92FF] bg-clip-text text-transparent">Impact</span>
          </h2>
        </div>
        <p className="mt-6 lg:mt-0 lg:ml-20 font-200 text-lg sm:text-xl max-w-xl text-[#FFFFFFCC] leading-relaxed tracking-[0.85px]">
          Hear from those who’ve experienced the Transformation. See how our Unique Approach has empowered Brands to
          overcome Challenges and achieve remarkable Success.
        </p>
      </div>

      <div className="hidden md:flex justify-end gap-2 mr-24">
        <button onClick={goToPrev} className="text-white hover:text-[#CC92FF] transition">
          <LuCircleArrowLeft size={32} />
        </button>
        <button onClick={goToNext} className="text-white hover:text-[#CC92FF] transition">
          <LuCircleArrowRight size={32} />
        </button>
      </div>

      <div
        {...swipeHandlers}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 p-2 md:p-6 justify-center items-center max-w-[1580px] mx-0 md:mx-20"
      >
        {Array.from({ length: cardsPerPage }).map((_, i) => {
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
      <div className="flex justify-center items-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === Math.floor(currentIndex / cardsPerPage)
                ? "bg-[#001BCB] scale-125"
                : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>

      <div className="w-full border-b-[2px] border-[#3A3A3A] mt-10 md:mt-20"></div>
    </div>
  );
};

export default ClientReviews;
