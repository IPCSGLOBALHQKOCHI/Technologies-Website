import { Link } from "react-router-dom";
import Logo from "../../src/assets/vectors/technoloies logo.png";
const Header = () => {
  return (
    <nav className="relative w-full flex items-center justify-between text-[#FFFFFF]">
      <div className="absolute left-10 top-4">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-16 w-auto cursor-pointer" />
      </Link>      </div>
      <div className="absolute right-16 top-8 ">
        <ul className="flex space-x-20  font-400">
          <li className="cursor-pointer ">ABOUT</li>
          <li className="cursor-pointer ">CASE STUDIES</li>
          <li className="cursor-pointer ">SERVICES</li>
          <li className="cursor-pointer ">BLOG</li>
          <li className="cursor-pointer ">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
