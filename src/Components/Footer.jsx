import React from "react";
import fb from "../../src/assets/vectors/facebook 1 (1).png";
import insta from "../../src/assets/vectors/instagram 2.png";
import linkedin from "../../src/assets/vectors/linkedin (1) 1.png";
import twitter from "../../src/assets/vectors/twitter (1) 1.png";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pt-10 sm:pt-16 px-4 sm:px-8 md:px-14 lg:px-24 xl:px-32 min-h-[80vh]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-start text-left mb-8 ml-4 mr-4 md:mr-36">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-400 text-[#FFFFFF]">
          Are You Ready for the Next Big Leap?
          </h2>
          <p className="text-[#FFFFFFCC] text-lg sm:text-xl md:text-2xl font-300 mt-3">
          Get Started in 60 Seconds.
          </p>
        </div>
        <button className="bg-[#003ad6] text-white w-60 h-14 px-6 sm:px-8 py-2 mt-6 sm:mt-8 md:mt-0 rounded-md border border-[#003ad6] transition-colors duration-300 md:ml-20">
          <a
            href="/connect-us"
            className="flex items-center justify-center gap-6"
          >
            GET A QUOTE <BsArrowRight className="w-5 h-5" />
          </a>
        </button>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-4 text-center sm:text-left">
        {/* Company Section */}
        <div className="px-4">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Company
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-base sm:text-xl font-300 text-[#FFFFFF99]">
            <li>
              <a
                href="/"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#casestudy"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Case Study
              </a>
            </li>
            <li>
              <a
                href="/#clients"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Our Clients
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="px-4">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Services
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-base sm:text-xl font-300 text-[#FFFFFF99]">
            <li>
              <a
                href="/branding"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Branding
              </a>
            </li>
            <li>
              <a
                href="/technology"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="/digital-marketing"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Digital Marketing
              </a>
            </li>
            <li>
              <a
                href="/social-branding"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Social Branding
              </a>
            </li>
            <li>
              <a
                href="/experience-design"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Experience Design
              </a>
            </li>
          </ul>
        </div>

        {/* Others Section */}
        <div className="px-4">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Others
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-base sm:text-xl font-300 text-[#FFFFFF99]">
            <li>
              <a
                href="/branding"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/#testimonials"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/technology"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="/digital-marketing"
                className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Terms of use
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Us Section */}
        <div className="px-4 w-full sm:w-96">
          <h3 className="mt-3 mb-4 sm:mb-6 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Connect Us
          </h3>
          <ul className="leading-[40px] sm:leading-[45px] text-base sm:text-xl font-300 text-[#FFFFFF99]">
            <li className="flex items-center gap-2 flex-wrap">
              <p className="whitespace-nowrap">Email:</p>
              <a
                href="mailto:info@ipcstechnologies.com"
                className="text-[#FFFFFF] hover:underline"
              >
                info@ipcstechnologies.com
              </a>
            </li>
            <li className="flex items-center gap-2 flex-wrap">
              <p className="whitespace-nowrap">Phone:</p>
              <a
                href="tel:+919072946664"
                className="text-[#FFFFFF] hover:underline"
              >
                +91 9072946664
              </a>
            </li>
            <li className="flex items-center gap-2 flex-wrap">
              <p className="whitespace-nowrap">Whatsapp:</p>
              <a
                href="https://wa.me/919072946664"
                className="text-[#FFFFFF] hover:underline"
              >
                +91 9072946664
              </a>
            </li>
            <li className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/IPCSTechnologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/ipcstechnologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/99073852/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="w-7 h-7" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-[#3A3A3A] mt-5 sm:mt-6 pt-4 sm:pt-6 mb-4 text-[#FFFFFF] text-center text-sm sm:text-lg font-200 leading-normal">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <p>© 2025 &nbsp; IPCS Technologies &nbsp; All Rights Reserved &nbsp;|&nbsp;</p>
          <p className="flex items-center gap-2">
            <a
              href="/privacy-policy"
              className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-use"
              className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;