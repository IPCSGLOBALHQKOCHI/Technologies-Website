import React, { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CaseStudy = forwardRef((props, ref) => {
  // useEffect(() => {
  //   if (!localStorage.getItem("aosInitialized")) {
  //     AOS.init({ duration: 1000, easing: "ease-out" });
  //     localStorage.setItem("aosInitialized", "true");
  //   }

  //   return () => {
  //   };
  // }, []); 
   useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col items-center justify-center leading-normal text-4xl tracking-[0.05em] text-[#FFFFFF]"
    >
      <div className="text-left">
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
    </div>
  );
});

export default CaseStudy;
