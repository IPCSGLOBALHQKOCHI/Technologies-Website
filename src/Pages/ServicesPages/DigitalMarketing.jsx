import React from 'react'

const DigitalMarketing=() =>{
  return (
    <div className="flex flex-col min-h-screen mt-10 p-16">
    <div className="flex justify-between">
      <div className="text-[#FFFFFF] text-[200px] font-200 mt-14 leading-none tracking-[4px]">
        Digital Marketing
      </div>
      <div className="text-[#FFFFFF] text-[120px] -mt-10 font-200">03</div>
    </div>
    <div className="text-[#FFFFFF] p-6 mt-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-400  tracking-[0.60px]">
            Social Media Management
            </h3>
            <p className="text-xl text-[#FFFFFF99]  tracking-[0.48px] mt-2">
            Strategizing and Executing Social Media Campaigns.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Performance Marketing
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Data-driven ad Campaigns to achieve measurable results.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Meta Ads
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Reach Targeted Audiences through Facebook and Insta Ads.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-8 text-left ml-8">
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            SEO Strategy
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Enhancing Online Visibility through Search Engine Optimization.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Linkedin Campaigns
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Generate high-quality Leads for your B2B needs.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Google Ads
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Drive Traffic, Reach Targets and Achieve Flexible Results.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 p-6 pt-24">
    <div className="col-span-2 row-span-1 rounded-3xl bg-black mr-[25%] overflow-hidden h-64">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Dining" />
    </div>
    <div className="col-span-1 row-span-1 bg-green-100 p-4 -ml-[50%] mr-[50%] rounded-3xl"> 
      <h2 className="text-lg font-bold">ASPEKTA</h2>
      <p className="text-gray-600">Font Family</p>
    </div>
    <div className="col-span-1 row-span-1 rounded-3xl -ml-[50%] bg-black overflow-hidden">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Ocean" />
    </div>

    <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-3xl flex flex-col h-[440px]">
      <h2 className="text-white font-bold">SSU Eclipse</h2>
      <p className="text-gray-400">Brand Identity</p>
    </div>
    <div className="col-span-1 row-span-1 bg-gray-100 p-4 rounded-3xl">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Mountain" />
    </div>
    <div className="col-span-1 row-span-1 rounded-3xl bg-black overflow-hidden">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Tiles" />
    </div>
    <div className="col-span-1 row-span-2 bg-white p-4 rounded-3xl">
      <h2 className="text-gray-800 font-bold">Color Palette</h2>
      <p className="text-red-500 font-bold">923.36</p>
    </div>

    <div className="col-span-2 row-span-1 rounded-3xl bg-black overflow-hidden">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Billboard" />
    </div>
  </div>
  </div>
  )
}

export default DigitalMarketing
