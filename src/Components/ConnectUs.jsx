import React from "react";
import Form from "./Form";
import linkedin from "../../src/assets/images/linkedin-logo black.png";
import contactImage from "../../src/assets/images/akshay sir.jpg";

const ConnectUs = () => {
  return (
    <div id="connect" className="min-h-screen bg-[#FFFFFF] w-full flex items-center justify-center py-12 sm:py-4">
      <div className="w-full sm:mx-8 md:mx-16 lg:mx-24 flex flex-col md:flex-row rounded-lg px-4 my-4 md:my-10 ">
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-10 py-6 md:py-8 flex flex-col text-left order-1 sm:order-1">
          <h2 className="text-6xl sm:text-7xl md:text-[80px] lg:text-[120px] font-400 md:font-300 text-[#0B0B0BCC] leading-none">
            Connect
          </h2>
          <h2 className="text-6xl sm:text-8xl md:text-[80px] lg:text-[120px] font-500 md:font-400 text-[#000000] leading-none">
            With us
          </h2>
          <p className="text-lg sm:text-xl font-400 text-[#0B0B0BCC] mt-6 sm:mt-10 mb-6 sm:mb-10">
            Your next step starts here! Connect with us to grow your Brand and
            create Strategies that deliver Lasting Impact and Real Results
          </p>
          <div className="flex items-center space-x-6 sm:space-x-10 mt-4 sm:mt-8">
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
              <div className="flex">
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
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center py-2 md:py-4 md:px-4 order-2 sm:order-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
