import React,{useState} from "react";

function AboutTechnology() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen  p-24  text-[#FFFFFF] flex">
        <div className="w-2/5 flex flex-col font-500">
        <h1
        className={`text-8xl text-left mb-10 bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
          isHovered
            ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
            : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Innovate.
      </h1>
      <h1
        className="text-8xl mb-10 bg-gradient-to-r from-[#003ad6] to-[#ff0080] bg-clip-text text-transparent text-left transition-colors duration-300 hover:text-[#FFFFFF] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Build.
      </h1>
      <h1
          className={`text-8xl text-left bg-clip-text text-transparent transition-all duration-[2s] ease-in-out ${
            isHovered
              ? "bg-gradient-to-r from-[#003ad6] to-[#ff0080] animate-gradient-fill"
              : "bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
          }`}
      >
        Grow.
      </h1>
    </div>
      <div className="w-3/5 px-3 mt-3">
        <h1 className="text-4xl mb-8 font-400">
          Technology Services to Drive Your Business Forward.
        </h1>
        <p className="text-lg font-300 text-justify">
          {" "}
          We specialize in delivering high-quality web applications, websites,
          mobile apps, custom software, and e-commerce solutions tailored to
          meet the evolving needs of businesses. Our expertise lies in
          developing scalable, secure, and user-friendly digital solutions that
          enhance efficiency and drive growth. Whether you need a dynamic web
          application, a responsive website, or a fully customized software
          solution, we leverage the latest technologies to ensure optimal
          performance and seamless user experiences. With a strong focus on
          innovation, reliability, and customer satisfaction, we help businesses
          harness the power of technology to achieve their goals in an
          ever-changing digital landscape.
        </p>
      </div>
    </div>
  );
}

export default AboutTechnology;
