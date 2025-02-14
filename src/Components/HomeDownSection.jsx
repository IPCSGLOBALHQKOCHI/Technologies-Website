import React, { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CaseStudy = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 3000, easing: "ease-out" });
  }, []);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col items-center justify-center leading-normal text-4xl tracking-[0.05em] text-[#FFFFFF]"
    >
      {/* Large Screens with Animation */}
      <div className="text-left hidden lg:block">
        <p data-aos="fade-up" data-aos-delay="100" className="font-300">
          This case study highlights transformative solutions
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="font-300">
          we have implemented, showcasing the Growth,
        </p>
        <p data-aos="fade-up" data-aos-delay="500" className="font-300">
          Success and Positive changes we have driven for
        </p>
        <p data-aos="fade-up" data-aos-delay="700" className="font-300">
          our Clients.
        </p>
      </div>

      {/* Small to Medium Screens without Animation */}
      <div className="text-left lg:hidden text-xl p-12 ">
        <p className="font-200">
          This case study highlights transformative solutions we have
          implemented, showcasing the Growth, Success and Positive changes we
          have driven for our Clients.
        </p>
      </div>
    </div>
  );
});

export default CaseStudy;
