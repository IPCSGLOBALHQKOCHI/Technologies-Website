import React from "react";
import Form from "../../src/Components/Form";
import linkedin from "../../src/assets/images/linkedin-logo black.png";
import contactImage from "../../src/assets/images/contact img.png";
const ConnectPage = () => {
  return (
    <div className="pt-20 bg-customBg">
      <div className="flex flex-col items-center justify-center text-center my-20 ">
        <h2 className="font-300 text-[80px] text-white">
          Let’s talk about your vision
        </h2>
        <p className="font-300 text-2xl text-white/80 mt-3 max-w-3xl">
          To set the benchmark as a Trusted Partner for delivering Visionary and
          Impactful Digital Experiences that resonate and inspire.
        </p>
      </div>
      <div className="h-screen bg-[#FFFFFF] flex items-center justify-center">
        <div className=" mx-24 flex rounded-lg shadow-lg">
          <div className="w-1/2 px-10 py-6 flex flex-col text-left">
            <h2 className="text-[60px] font-200 text-[#0B0B0BCC] leading-none">
              Ready to Elevate your brand’s
            </h2>
            <h2 className="text-[80px] font-400 text-[#000000] leading-none">
              Digital Presence?
            </h2>
            <div className="flex items-center space-x-10 mt-16">
              <div>
                <img
                  src={contactImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-400 text-[#1C1C1C]">Akshay RS</h4>
                <p className="text-lg font-300 text-[#171717CC] mt-1 mb-3">Client Expert</p>
                <a
                  href=""
                  target="_blank"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center p-4 justify-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
