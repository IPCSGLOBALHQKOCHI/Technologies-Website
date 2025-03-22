import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const services = [
  {
    title: "How long does it take to develop a custom software solution?",
    details:
      "The development time depends on the complexity of the project, features required, and the technologies used. Typically, it can take anywhere from a few weeks to several months.",
  },
  {
    title: "How much does it cost to develop a website or web application?",
    details:
      "The cost varies based on the complexity, design, features, and technologies used. Simple websites may cost less, while complex web apps or e-commerce solutions with advanced functionalities can require a larger budget. It’s best to get a detailed estimate after discussing the requirements.",
  },
  {
    title: "What is the difference between WordPress websites and custom React websites?",
    details:
      "Template-based WordPress websites are built using pre-designed themes, which can be customized but are limited in flexibility and scalability. They are quicker and more affordable to develop. In contrast, custom React websites are built from scratch with React.js, offering a higher degree of customization, faster performance, and scalability, but requiring more time and expertise to develop.",
  },
  {
    title: "What is the advantage of using a template design v/s a custom design for my website?",
    details:
      "Template designs are cost-effective, quicker to implement, and require less design effort, but they lack uniqueness and customization. Custom designs are tailored to your brand’s identity, provide a unique user experience, and can be built to meet specific functionality and design needs, offering greater flexibility and long-term scalability.",
  },
  {
    title: "What is the difference between a conventional app and a hybrid app?",
    details:
      "Conventional language-based apps are developed using native programming languages like Swift (for iOS) or Kotlin (for Android), ensuring optimal performance and full access to device features. Hybrid apps, on the other hand, are built using web technologies like HTML, CSS, and JavaScript, allowing them to work across multiple platforms (iOS, Android) with a single codebase, but often with slightly reduced performance and access to device features compared to native apps.",
  },
  {
    title: "What is the difference between Shared Hosting and VPS Hosting?",
    details:
      "Shared Hosting is budget-friendly and ideal for small websites, offering limited resources and control. VPS Hosting provides dedicated resources, better performance, and more control, making it perfect for growing websites, but comes at a higher cost and requires more management.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-24 px-6 sm:px-6 md:px-16 lg:px-32 xl:px-40 2xl:px-48 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#000000] mb-8 md:mb-12">
        FAQ
      </h1>
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b-2 border-b-[#000000] pb-4 p-4 bg-[#F3F3F3] rounded-t-lg shadow-md"
          >
            <button
              className="w-full text-left text-lg sm:text-xl md:text-2xl font-semibold flex justify-between items-center"
              onClick={() => toggleDropdown(index)}
            >
              {service.title}
              {openIndex === index ? (
                <HiMinus className="text-2xl md:text-3xl" />
              ) : (
                <HiPlus className="text-2xl md:text-3xl" />
              )}
            </button>
            <div
              className={`transition-all overflow-hidden duration-500 ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-md md:text-lg text-[#000000]/90 mt-2">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
