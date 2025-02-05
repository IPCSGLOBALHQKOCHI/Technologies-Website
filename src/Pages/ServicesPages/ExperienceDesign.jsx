import React,{useEffect} from 'react'

const ExperienceDesign=()=> {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="flex flex-col  p-16">
    <div className="flex justify-between leading-none">
      <div className="text-[#FFFFFF] text-[220px] font-200 tracking-[4px] mt-14">
      Experience Design
      </div>
      <div className="text-[#FFFFFF] text-[120px] font-200">05</div>
    </div>
    <div className="text-[#FFFFFF] p-6 mt-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-400  tracking-[0.60px]">
            Website Design
            </h3>
            <p className="text-xl text-[#FFFFFF99]  tracking-[0.48px] mt-2">
            Tailored Strategies to Boost Conversions and Maximize ROI.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            
            Web App Design
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Functional, intuitive interfaces to optimize user engagement.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-8 text-left ml-8">
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Mobile App Design
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Smart, efficient solutions to enhance operational flow.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
          <div>
            <h3 className="text-3xl font-400 tracking-[0.60px] ">
            Software Design
            </h3>
            <p className="text-xl text-[#FFFFFF99] tracking-[0.48px] mt-2">
            Industry-specific workflows designed for operational efficiency.
            </p>
            <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 p-6 pt-24">
    <div className="col-span-1 row-span-1 rounded-3xl bg-black overflow-hidden h-64">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Dining" />
    </div>
    <div className="col-span-1 row-span-1 bg-green-100 p-4 -mr-[40%]  rounded-3xl"> 
      <h2 className="text-lg font-bold">ASPEKTA</h2>
      <p className="text-gray-600">Font Family</p>
    </div>
    <div className="col-span-2 row-span-1 rounded-3xl ml-[20%]  bg-black overflow-hidden">
      <img src="your-image-url.jpg" className="w-full h-full object-cover" alt="Ocean" />
    </div>

    <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-3xl flex flex-col h-96">
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

export default ExperienceDesign
