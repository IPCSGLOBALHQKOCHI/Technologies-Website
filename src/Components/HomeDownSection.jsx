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
      className="lg:h-screen flex flex-col items-center justify-center leading-normal text-4xl tracking-[0.05em] text-[#FFFFFF]"
    >
      <div className="text-left hidden lg:block">
        <p data-aos="fade-up" data-aos-delay="100" className="font-400">
        We are a business reputation management company,
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="font-400">
        delivering results for the past 10 years with
        </p>
        <p data-aos="fade-up" data-aos-delay="500" className="font-400">
        end-to-end solutions that drive growth, success,
        </p>
        <p data-aos="fade-up" data-aos-delay="700" className="font-400">
        and positive change for businesses.
        </p>
      </div>
      {/* <div className="text-left hidden text-xl p-12 pt-20 ">
        <p className="font-200">
          This case study highlights transformative solutions we have
          implemented, showcasing the Growth, Success and Positive changes we
          have driven for our Clients.
        </p>
      </div> */}
    </div>
  );
});

export default CaseStudy;
