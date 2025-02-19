import React from "react";
import Form from "./Form";

const ConnectUs = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center py-10 sm:py-0">
      <div className="w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col md:flex-row rounded-lg shadow-md">
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-10 py-6 md:py-8 flex flex-col text-left order-2 md:order-1">
          <h2 className="text-6xl sm:text-8xl lg:text-[130px] font-300 text-[#0B0B0BCC] leading-none">
            Connect
          </h2>
          <h2 className="text-6xl sm:text-8xl lg:text-[130px] font-400 text-[#000000] leading-none">
            With us
          </h2>
          <p className="text-lg sm:text-xl font-400 text-[#0B0B0BCC] mt-6 sm:mt-10 mb-6 sm:mb-10">
            Your next step starts here! Connect with us to grow your Brand and
            create Strategies that deliver Lasting Impact and Real Results
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-2 md:order-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;