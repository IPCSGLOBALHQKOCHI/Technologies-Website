import { useState, useEffect } from "react";
import Logo from "../../src/assets/vectors/technoloies logo.png";
import {FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full flex items-center justify-between z-40 px-6 md:px-16 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0B] shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 md:h-16 w-auto cursor-pointer transition-all duration-300"
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-16 font-400 tracking-wide">
        {[
          { name: "ABOUT", link: "" },
          { name: "CASE STUDY", link: "#casestudy" },
        ].map((item, index) => (
          <li
            key={index}
            className="relative group transition-colors duration-300 list-none"
          >
            <a href={item.link} className="cursor-pointer">
              {item.name}
            </a>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-white" : "bg-white"
              }`}
            ></span>
          </li>
        ))}

        {/* Services Dropdown */}
        <li className="relative group cursor-pointer list-none">
          <span onMouseEnter={() => setIsServicesOpen(true)}>SERVICES</span>
          <span
            className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? "bg-white" : "bg-white"
            }`}
          ></span>

          {isServicesOpen && (
            <div
              className="fixed top-0 left-0 w-[90%] h-[80%] my-16 ml-16 flex items-center justify-center bg-[#0B0B0B] text-white z-50 rounded-b-xl"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="container mx-auto py-8 px-8 flex gap-x-6">
                <div className="w-1/3 flex flex-col justify-center">
                  <h2 className="text-3xl font-400 mb-4">Our Services</h2>
                  <h4 className="text-lg text-[#FFFFFFCC] font-200">
                    We’ve got you all you need to turn your ideas into top-notch
                    digital products that drive growth.
                  </h4>
                  <button className="bg-[#003ad6] text-[#FFFFFF] px-2 py-2 mt-7 w-44 rounded-md hover:bg-[#FFFFFF] hover:text-[#003ad6]">
                    <a href="/connect-us">Connect Us</a>
                  </button>
                </div>
                <div className="w-2/3 grid grid-cols-3 grid-rows-2 gap-8 mt-14 text-[#FFFFFF]">
                  {[
                    {
                      heading: "Branding",
                      subItems: [
                        { name: "Brand Consulting", link: "/branding" },
                        { name: "Brand Identity", link: "/branding" },
                        { name: "Logo Design", link: "/branding" },
                        { name: "Brand Collateral", link: "/branding" },
                        { name: "2D/3D Visualization", link: "/branding" },
                        { name: "Product Design", link: "/branding" },
                      ],
                    },
                    {
                      heading: "Digital Marketing",
                      subItems: [
                        {
                          name: "Social Media Management",
                          link: "/digital-marketing",
                        },
                        {
                          name: "Performance Marketing",
                          link: "/digital-marketing",
                        },
                        { name: "Meta Ads", link: "/digital-marketing" },
                        { name: "SEO Strategy", link: "/digital-marketing" },
                        {
                          name: "Linkedin Campaigns",
                          link: "/digital-marketing",
                        },
                        { name: "Google Ads", link: "/digital-marketing" },
                      ],
                    },
                    {
                      heading: "Social Branding",
                      subItems: [
                        { name: "Content Marketing", link: "/social-branding" },
                        { name: "Organic Creatives", link: "/social-branding" },
                        {
                          name: "Community Building",
                          link: "/social-branding",
                        },
                        {
                          name: "Social Media Management",
                          link: "/social-branding",
                        },
                      ],
                    },
                    {
                      heading: "Technology",
                      subItems: [
                        { name: "Web Development", link: "/technology" },
                        { name: "Mobile App Development", link: "/technology" },
                        { name: "E-Commerce", link: "/technology" },
                      ],
                    },
                    {
                      heading: "Experience Design",
                      subItems: [
                        { name: "Website Design", link: "/experience-design" },
                        {
                          name: "Mobile App Design",
                          link: "/experience-design",
                        },
                        { name: "Web App Design", link: "/experience-design" },
                        { name: "Software Design", link: "/experience-design" },
                      ],
                    },
                  ].map((category, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-xl font-400 tracking-wide">
                        {category.heading}
                      </h3>
                      <ul className="space-y-2">
                        {category.subItems.map((service, i) => (
                          <li
                            key={i}
                            className="text-[#FFFFFFCC] font-100 text-lg tracking-wide relative hover:no-underline"
                          >
                            <span className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                              <a href={service.link}>{service.name}</a>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>
        <li className="relative group transition-colors duration-300 list-none">
          <a href="" className="cursor-pointer">
            BLOG
          </a>
          <span
            className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
              isScrolled ? "bg-white" : "bg-white"
            }`}
          ></span>
        </li>

        <a
          href="/connect-us"
          className={`cursor-pointer px-5 py-2 -mt-1 transition-colors font-400 text-sm duration-300 rounded-md ${
            isScrolled
              ? "bg-[#003ad6] text-white"
              : "bg-white text-black rounded-md"
          }`}
        >
          CONTACT
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#0B0B0B] text-white shadow-lg transition-transform duration-700 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMobileOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <ul className="mt-16 space-y-6 text-lg px-6">
          <li>
            <a href="/" className="block py-2">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#casestudy" className="block py-2">
              CASE STUDY
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left"
            >
              SERVICES
            </button>
            {isServicesOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-base tracking-[0.60px]">
                <li>
                  <a href="/branding" className="block py-1">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="/technology" className="block py-1">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/digital-marketing" className="block py-1">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/social-branding" className="block py-1">
                    Social Branding 
                  </a>
                </li>
                <li>
                  <a href="/experience-design" className="block py-1">
                    Experience Design
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="" className="block py-2">
              BLOG
            </a>
          </li>
          <li>
            <a
              href="/connect-us"
              className="block bg-[#003ad6] text-white px-4 py-2 w-40 rounded-md text-center"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
