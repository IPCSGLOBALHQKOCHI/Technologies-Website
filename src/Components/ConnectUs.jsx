import React from "react";
import Form from "./Form";

const ConnectUs = () => {
  return (
<div className="h-screen bg-[#FFFFFF] flex items-center justify-center">
  <div className=" mx-24 flex rounded-lg shadow-lg">
    <div className="w-1/2 px-10 py-6 flex flex-col text-left">
      <h2 className="text-[130px] font-200 text-[#0B0B0BCC] leading-none tracking-[1px]">Connect</h2>
      <h2 className="text-[130px] font-300 text-[#000000] leading-none tracking-[1px]">With us</h2>
      <p className="text-xl font-400 text-[#0B0B0BCC] mt-8 mb-10 tracking-[0.30px]">
        Your next step starts here! Connect with us to grow your Brand and create Strategies that deliver Lasting Impact and Real Results
      </p>
    </div>
    <div className="w-1/2 flex items-center p-4 justify-center">
      <Form/>
    </div>
    
  </div>
</div>

  );
};
 
export default ConnectUs;
