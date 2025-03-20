import React,{useState} from "react";
import { HiPlus,HiMinus } from "react-icons/hi";
const services = [
    [
      {
        title: "Web Development",
        description: "Building dynamic, high-performance websites.",
        details: "We specialize in creating responsive, high-performance websites using modern technologies. Our services cover front-end and back-end development, ensuring seamless user experiences, fast load times, and scalable solutions tailored to meet your business’s unique needs.",
      },
      {
        title: "Mobile App Development",
        description: "Designing scalable and user-friendly apps.",
        details: "We design and develop user-friendly, scalable mobile applications for both iOS and Android platforms. Our solutions prioritize seamless user experience, intuitive interfaces, and high performance, helping your business engage users effectively while providing innovative and reliable mobile solutions.",
      },
      {
        title: "WebApp Development",
        description: "End-to-end delivery of high-end web applications.",
        details: "We build robust, scalable, and feature-rich web applications tailored to your business needs. Our web apps are designed for seamless performance across devices, providing users with a smooth experience while ensuring security, flexibility, and long-term scalability.",
      },
    ],
    [
      {
        title: "E-Commerce",
        description: "Delivering complete e-commerce solutions for businesses.",
        details: "We create customized e-commerce solutions that drive business growth. Our services include building secure, user-friendly online stores with seamless payment integration, product management, and inventory control. We focus on enhancing the shopping experience to increase conversions and customer loyalty.",
      },
      {
        title: "Custom Software Development",
        description: "Build required custom software like CRM, HRMS, ERP.",
        details: "We design and develop tailored software solutions to meet your business's unique requirements. From CRM systems to enterprise applications, our custom software enhances efficiency, automates processes, and provides scalability to help your business grow and adapt seamlessly.",
      },
    ],
  ];
function ServicesTechno() {
    const [openIndexes, setOpenIndexes] = useState([null, null]); 

  const toggleDropdown = (column, index) => {
    setOpenIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[column] = newIndexes[column] === index ? null : index;
      return newIndexes;
    });
  };
  return (
    <div className="px-20 pt-10 pb-32">
      <h1 className="text-[#FFFFFF] text-5xl font-400 px-4 sm:px-6 ">
        Technology Solutions We Provide
      </h1>
      <div className="text-[#FFFFFF] p-4 sm:p-6 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
  {services.map((columnServices, colIndex) => (
    <div key={colIndex} className="space-y-4 sm:space-y-8">
      {columnServices.map((service, index) => (
        <div key={index}>
          <h3
            className="text-2xl sm:text-3xl font-400 cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown(colIndex, index)}
          >
            {service.title}
            <span className="text-xl sm:text-2xl">
              {openIndexes[colIndex] === index ? <HiMinus /> : <HiPlus />}
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-[#FFFFFF]/70 mt-2 font-300">
            {service.description}
          </p>
          <div
            className={`${
              openIndexes[colIndex] === index ? "max-h-96" : "max-h-0"
            } overflow-hidden text-md sm:text-lg font-300 text-[#FFFFFF]/90 mt-2 duration-500 ease-in-out transition-max-height`}
          >
            {service.details}
          </div>

          <div className="w-full border-b-[2px] border-[#3A3A3A] mt-1"></div>
        </div>
      ))}
    </div>
  ))}
</div>
    </div>
    </div>
  );
}

export default ServicesTechno;
