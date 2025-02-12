import React from "react";
// import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
const ServicesSections = () => {
  const sections = [
    {
      id: "01",
      title: "Branding",
      desc: "From defining identity and values to creating premium logos, cohesive materials, immersive visuals, and functional product designs that captivate and leave a lasting impression.",
      href: "/branding",
    },
    {
      id: "02",
      title: "Technology",
      desc: "Building dynamic, high-performance websites, designing scalable mobile apps, and delivering complete e-commerce solutions to drive business growth and enhance user experiences.",
      href: "/technology",
    },
    {
      id: "03",
      title: "Digital Marketing",
      desc: "Creating powerful social strategies, executing data-driven campaigns, and enhancing SEO to boost visibility and drive measurable growth across all platforms.",
      href: "/digital-marketing",
    },
    {
      id: "04",
      title: "Social Branding",
      desc: "Creating valuable, audience-focused content, producing innovative visuals, and building communities that engage and foster brand loyalty for lasting connections and impact.",
      href: "/social-branding",
    },
    {
      id: "05",
      title: "Experience Design",
      desc: "Designing intuitive UI/UX, crafting visually appealing websites, and ensuring seamless mobile experiences for engaging, user-friendly interactions across all platforms.",
      href: "/experience-design",
    },
  ];

  return (
    <section className="px-6 pb-14 w-full">
      {sections.map((section, index) => (
        <div key={index} className="relative group">
          <div className="flex items-center justify-between">
            {index % 2 === 0 ? (
              <>
                <div className="max-w-[50%] mb-14">
                  <h2 className="text-6xl text-[#FFFFFF] font-400">
                    {section.title}
                  </h2>
                  <p className="text-2xl font-200 text-[#FFFFFFCC] mt-10">
                    {section.desc}
                  </p>
                </div>
                <p className="text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
              </>
            ) : (
              <>
                <p className="text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
                <div className="max-w-[50%] mb-14">
                  <h2 className="text-6xl text-[#FFFFFF] font-400">
                    {section.title}
                  </h2>
                  <p className="text-2xl font-200 text-[#FFFFFFCC] mt-10">
                    {section.desc}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="w-full border-b-[2px] border-[#3A3A3A] -mt-36"></div>
          <a
            href={section.href}
            className="absolute w-14 h-14 left-1/2 bottom-1 -ml-8 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
   backdrop-blur-md border bg-white text-black p-2 rounded-full shadow-lg hover:scale-110"
          >
            <HiMiniArrowUpRight className="w-10 h-10  transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:rotate-45" />
          </a>
        </div>
      ))}
    </section>
  );
};

export default ServicesSections;
