import logo from "../assets/NaufalLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img
          src={logo}
          alt="logo"
          className="h-20 w-15 shadow-blue-gray-900/50"
        />
      </div>
      <div className="flex items-center space-x-4 hover m-8 gap-2 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
