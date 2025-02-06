import React from 'react'

const SocialBranding=()=> {
  return (
    <div className="flex flex-col  p-16">
    <div className="flex justify-between leading-none text-left">
      <div className="text-[#FFFFFF] text-[200px] font-200 tracking-[4px] mt-10">
        Social Branding
      </div> 
      <div className="text-[#FFFFFF] text-[100px] font-200 mt-5">04</div>
    </div>
    <div className="text-[#FFFFFF] p-6 mt-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-400  tracking-[0.60px]">
            Content Marketing
            </h3>
            <p className="text-xl text-[#FFFFFF99]  tracking-[0.48px] mt-2">
            Creating Valuable, Audience-focused content.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Organic Creatives
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
             Producing Innovative and Impactful visuals.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-8 text-left ml-8">
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Community Building
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Engaging audiences to foster brand loyalty.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Social Media Management
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Strategizing and executing social media campaigns.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 p-6 pt-24">
    <div className="col-span-1 row-span-1 bg-gray-900 p-4 rounded-3xl flex flex-col "> 
      <h2 className="text-white font-bold">SSU Eclipse</h2>
      <p className="text-gray-400">Brand Identity</p>
    </div>  
    <div className="col-span-1 row-span-1 bg-gray-100 p-4  rounded-3xl h-60">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Mountain" />
    </div>

    <div className="col-span-1 row-span-1 rounded-3xl bg-black  overflow-hidden h-80">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Tiles" />
    </div>
    <div className="col-span-1 row-span-1 bg-black   p-4 rounded-3xl flex flex-col h-60">
      <h2 className="text-white font-bold">SSU Eclipse</h2>
      <p className="text-gray-400">Brand Identity</p>
    </div>
    <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-3xl   flex flex-col h-64">
      <h2 className="text-white font-bold">SSU Eclipse</h2>
      <p className="text-gray-400">Brand Identity</p>
    </div>
    <div className="col-span-1 row-span-2 bg-white p-4  rounded-3xl h-[340px] -mt-20">
      <h2 className="text-gray-800 font-bold">Color Palette</h2>
      <p className="text-red-500 font-bold">923.36</p>
    </div>
    <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-3xl   flex flex-col h-64">
      <h2 className="text-white font-bold">SSU Eclipse</h2>
      <p className="text-gray-400">Brand Identity</p>
    </div>
    <div className="col-span-1 row-span-2 bg-white p-4  rounded-3xl h-[340px] -mt-20">
      <h2 className="text-gray-800 font-bold">Color Palette</h2>
      <p className="text-red-500 font-bold">923.36</p>
    </div>
  </div>
  </div>
  )
}

export default SocialBranding
