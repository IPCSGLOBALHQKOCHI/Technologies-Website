import React from "react";
import Form from "../../src/Components/Form";
import linkedin from "../../src/assets/images/linkedin-logo black.png";
import contactImage from "../../src/assets/images/contact img.png";
import { BsArrowRight } from "react-icons/bs";

const ConnectPage = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 bg-customBg">
      <div className="flex flex-col items-center justify-center text-center my-16 sm:my-20 md:my-28">
        <h2 className="font-300 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-white mb-3 md:mb-6">
          Let’s talk about your vision
        </h2>
        <p className="font-300 text-lg md:text-xl text-[#FFFFFFCC] mt-2 sm:mt-3 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-loose tracking-[0.80px]">
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
      </div>
      <div className="h-auto sm:min-h-screen bg-[#FFFFFF] flex items-center justify-center py-10">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col md:flex-row rounded-lg ">
          <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-20 flex flex-col text-left order-1 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-200 text-[#0B0B0BCC] leading-none">
              Ready to Elevate your brand’s
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-400 text-[#000000] leading-none mt-2 sm:mt-4">
              Digital Presence?
            </h2>
            <div className="flex items-center space-x-6 sm:space-x-10 mt-8 sm:mt-16">
              <div>
                <img
                  src={contactImage}
                  alt="Profile"
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full"
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-2xl font-400 text-[#1C1C1C]">
                  Akshay RS
                </h4>
                <p className="text-sm sm:text-base font-300 text-[#171717CC] mt-0 mb-3 sm:mb-4">
                  Client Expert
                </p>
                <a
                  href="https://www.linkedin.com/in/akshay-rs-5bb145126/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5 sm:w-6 h-5 sm:h-6"
                  />
                </a>
              </div>
            </div>
            <button className="bg-[#003ad6] text-white text-2xl w-60 h-14 px-6  py-2 mt-10 rounded-md border border-[#003ad6] transition-colors duration-300 md:ml-20 group">
              <a
                href="https://calendly.com/akshay-ipcsglobal/30min"
                target="_blank"
                className="flex items-center justify-center gap-6"
              >
                Book a Slot
                <BsArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-3" />
              </a>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 order-2 md:order-1">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
