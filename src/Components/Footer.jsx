import React from "react";
import call from "../../src/assets/vectors/call.png";
import mail from "../../src/assets/vectors/mail.png";
import fb from "../../src/assets/vectors/facebook 1 (1).png";
import insta from "../../src/assets/vectors/instagram 2.png";
import linkedin from "../../src/assets/vectors/linkedin (1) 1.png";
import twitter from "../../src/assets/vectors/twitter (1) 1.png";

const Footer = () => {
  return (
    <footer className="pt-10 sm:pt-16 px-4 sm:px-8 md:px-14 lg:px-20 min-h-[80vh]">
    <div className="flex flex-col md:flex-row items-center md:justify-between text-left mb-8 ml-10 mr-36">
  <div>
    <h2 className="text-xl sm:text-2xl md:text-5xl font-400 text-[#FFFFFF]">Start your journey now!</h2>
    <p className="text-[#FFFFFFCC] text-3xl font-300 mt-3">A minute is all you need.</p>
  </div>
  <button className="bg-[#003ad6] text-white px-6 sm:px-8 py-2 mt-6 sm:mt-8 md:mt-0 rounded-md hover:bg-white hover:text-[#003ad6] border border-[#003ad6] transition-colors duration-300">
    <a href="/connect-us">Get a Quote</a>
  </button>
</div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center sm:text-left">
        <div className="px-4">
          <h3 className="mt-3 mb-6 sm:mb-8 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Company
          </h3>
          <ul className="leading-[40px] sm:leading-[50px] text-base sm:text-lg font-300 text-[#FFFFFF99]">
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
                Clients
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
          </ul>
        </div>
        <div className="px-4">
          <h3 className="mt-3 mb-6 sm:mb-8 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Services
          </h3>
          <ul className="leading-[40px] sm:leading-[50px] text-base sm:text-lg font-300 text-[#FFFFFF99]">
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
        <div className="px-4">
          <h3 className="mt-3 mb-6 sm:mb-8 text-[#FFFFFF] text-xl sm:text-2xl font-500 tracking-[0.40px]">
            Connect Us
          </h3>
          <ul className="leading-[40px] sm:leading-[50px] text-base sm:text-lg font-300 text-[#FFFFFF99]">
            <li className="flex items-center">
              <img src={mail} alt="mail" className="w-6 h-6" />
              <a href="mailto:info@ipcstechnologies.com" className="ml-4">
                info@ipcstechnologies.com
              </a>
            </li>
            <li className="flex items-center">
              <img src={call} alt="call" className="w-6 h-6" />
              <a href="tel:+919072946664" className="ml-4">
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
          <button className="bg-[#003ad6] text-[#FFFFFF] px-6 sm:px-8 py-2 mt-6 sm:mt-8 rounded-md hover:bg-[#FFFFFF] hover:text-[#003ad6] transition-colors duration-300">
            <a href="/connect-us">Connect Us</a>
          </button>
        </div>
      </div>
      <div className="border-t border-[#3A3A3A] mt-10 sm:mt-14 pt-6 sm:pt-10 mb-10 text-[#FFFFFF] text-center text-sm sm:text-lg font-200 leading-normal">
        <p>© 2025 &nbsp; IPCS Technologies &nbsp;| &nbsp;All Rights Reserved</p>
        <p>
          <a
            href="/privacy-policy"
            className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-xs sm:text-sm"
          >
            Privacy Policy &nbsp;
          </a>{" "}
          |&nbsp;{" "}
          <a
            href="/terms-of-use"
            className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-xs sm:text-sm"
          >
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
