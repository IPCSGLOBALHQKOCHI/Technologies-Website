import Logo from "../../src/assets/vectors/technoloies logo.png";
const Header = () => {
  return (
    <nav className="relative w-full flex items-center justify-between text-[#FFFFFF]">
      <div className="absolute left-10 top-4">
        <img src={Logo} alt="logo img" className="h-16 w-auto" />
      </div>
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
