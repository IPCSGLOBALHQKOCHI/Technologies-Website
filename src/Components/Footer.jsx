import React from "react";
import call from "../../src/assets/vectors/call.png";
import mail from "../../src/assets/vectors/mail.png";
import fb from "../../src/assets/vectors/facebook 1 (1).png";
import insta from "../../src/assets/vectors/instagram 2.png";
import linkedin from "../../src/assets/vectors/linkedin (1) 1.png";
import twitter from "../../src/assets/vectors/twitter (1) 1.png";

const Footer = () => {
  return (
    <footer className=" py-16 px-14 h-[80vh]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
        <div className="mt-3 mb-8 text-[#FFFFFF] text-2xl font-500 tracking-[0.60px] ml-4">
        <div className="mb-10">
            Location
        </div>
          <div className="font-300 text-xl leading-loose tracking-[0.5px] text-[#FFFFFF99]">
            15th Floor, Muthoot Royal Towers Building, Kaloor,
            <br /> Kochi, Kerala 682017
          </div>
        </div>
        <div>
          <h3 className="mt-3 mb-8 text-[#FFFFFF] text-2xl font-500 tracking-[0.40px]">
            Company
          </h3>
          <ul className="leading-[50px] text-lg font-300 text-[#FFFFFF99]">
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
        <div>
          <h3 className="mt-3 mb-8 text-[#FFFFFF] text-2xl font-500 tracking-[0.40px]">
            Services
          </h3>
          <ul className="leading-[50px] text-lg font-300 text-[#FFFFFF99]">
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
        <div>
          <h3 className="mt-3 mb-8 text-[#FFFFFF] text-2xl font-500 tracking-[0.40px]">
            Connect Us
          </h3>
          <ul className="leading-[50px] text-lg font-300 text-[#FFFFFF99]">
            <li className="flex items-center">
              <img src={mail} alt="call" />
              <a href="mailto:info@ipcstechnologies.com" className="ml-4">
                info@ipcstechnologies.com
              </a>
            </li>
            <li className="flex items-center">
              <img src={call} alt="" />
              <a href="tel:+919072946664" className="ml-4">
                +91 9072946664
              </a>
            </li>
            <li className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/IPCSTechnologies"
                target="_blank"
              >
                <img src={fb} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/ipcstechnologies"
                target="_blank"
              >
                <img src={insta} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/99073852/admin/page-posts/published/" target="_blank">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#" target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
          </ul>
          <button className="bg-[#003ad6] text-[#FFFFFF] px-6 py-2 mt-8 rounded-md hover:bg-[#FFFFFF] hover:text-[#003ad6]">
            <a href="/connect-us">
            Connect Us
            </a>
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-14 pt-10 mb-20 text-[#FFFFFF] text-center text-lg font-200 leading-normal">
        <p>© 2025 &nbsp; IPCS Technologies &nbsp;| &nbsp;All Rights Reserved</p>
        <p>
          <a
            href="/privacy-policy"
            className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-sm"
          >
            Privacy Policy &nbsp;
          </a>{" "}
          |&nbsp;{" "}
          <a
            href="/terms-of-use"
            className="relative hover:no-underline before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:w-full text-sm"
          >
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
