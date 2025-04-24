// import React from "react";
// import { brandingProcess } from "../../constants/Constants";
// function ProcessBranding() {
//   return (
//     <div className="space-y-8 px-4 md:px-12 py-12 bg-[#0c0f12]">
//       {brandingProcess.map((section, index) => (
//           <div className=" items-center gap-6 border   border-gray-700 rounded-xl p-6">
//         <div
//           key={index}
//           className={`flex flex-col md:flex-row ${
//             section.reverse ? "md:flex-row-reverse" : ""
//           }`}
//         >
//             <div className="w-full md:w-1/3 ml-40">
//               <img
//                 src={section.image}
//                 alt={section.title}
//                 className="rounded-lg object-cover w-[80%] h-[40svh]"
//               />
//             </div>
//             <div className="w-full md:w-2/4 text-white">
//               <h2 className="text-lg md:text-xl font-semibold mb-2 capitalize">
//                 {section.title}
//               </h2>
//               <p className="text-gray-300 text-sm md:text-base">
//                 {section.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProcessBranding;
