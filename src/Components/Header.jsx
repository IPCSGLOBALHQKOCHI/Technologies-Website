import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../src/assets/vectors/technoloies logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full flex items-center justify-between z-50 px-16 py-1 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="left-0">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto cursor-pointer transition-all duration-300"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="right-0">
        <ul className="flex space-x-20 font-medium">
          {["ABOUT", "CASE STUDY", "SERVICES", "BLOG"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer relative group transition-colors duration-300"
            >
              {item}
              <span className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? "bg-black" : "bg-white"
              }`}></span>
            </li>
          ))}
          <Link
            to="/connect-us"
            className={`cursor-pointer -mt-2 p-2 transition-colors duration-300 rounded-md ${
              isScrolled
                ? "bg-black text-white hover:bg-[#8E0608]"
                : "hover:bg-white hover:text-black hover:rounded-md"
            }`}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
