import React from "react";
// import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

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
    <section className="px-0 sm:px-6 pb-10 sm:pb-14 lg:pb-0 w-full">
      {sections.map((section, index) => (
        <div key={index} className="relative group mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-customBg px-6 py-4 rounded-md ">
            {index % 2 === 0 ? (
              <>
                <div className=" group w-full lg:max-w-[50%] mb-8 lg:mb-14">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl  text-[#FFFFFF] font-200">
                      {section.title}
                    </h2>
                    {/* Show arrow on mobile, hide on desktop */}
                    <div className="lg:hidden">
                      <a
                        href={section.href}
                        className="w-10 h-10 flex items-center justify-center text-white bg-[#003ad6] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      >
                        <BsArrowRight className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-200 text-[#FFFFFFCC] mt-6 sm:mt-10">
                    {section.desc}
                  </p>
                  <div className="hidden md:block">
                    <a
                      href={section.href}
                      className="flex items-center space-x-4 text-[#FFFFFF] mt-4 group-hover:text-[#003ad6] transition-all duration-300"
                    >
                      <span className="text-xl">Learn More</span>
                      <BsArrowRight className="w-5 h-5 " />
                    </a>
                  </div>
                </div>
                {/* Show number on desktop, hide on mobile */}
                <p className="hidden lg:block text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
              </>
            ) : (
              <>
                {/* Show number on desktop, hide on mobile */}
                <p className="hidden lg:block text-[350px] font-200 text-[#FFFFFF]">
                  {section.id}
                </p>
                <div className=" group w-full lg:max-w-[50%] mb-8 lg:mb-14">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] font-200">
                      {section.title}
                    </h2>
                    {/* Show arrow on mobile, hide on desktop */}
                    <div className="lg:hidden">
                      <a
                        href={section.href}
                        className="w-10 h-10 flex items-center justify-center text-white bg-[#003ad6] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      >
                        <BsArrowRight className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-200 text-[#FFFFFFCC] mt-6 sm:mt-10">
                    {section.desc}
                  </p>
                  <div className="hidden md:block">
                    <a
                      href={section.href}
                      className="flex items-center space-x-4 text-[#FFFFFF] mt-4 group-hover:text-[#003ad6] transition-all duration-300"
                    >
                      <span className="text-xl">Learn More</span>
                      <BsArrowRight className="w-5 h-5 " />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" hidden md:block w-full border-b-[2px] border-[#3A3A3A] mt-0 sm:mt-12 lg:-mt-36 mb-4"></div>
        </div>
      ))}
      <div className="flex justify-center items-center w-full mt-2 sm:mt-12 lg:min-h-[250px]">
        <button className="bg-[#003ad6] text-[#FFFFFF] px-8 py-3 w-44 rounded-md">
          <a href="/connect-us" className="text-xl font-300">Let's Talk</a>
        </button>
      </div>
    </section>
  );
};

export default ServicesSections;
