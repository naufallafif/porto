import { motion } from "framer-motion";
import logo from '../layouts/NaufalLogo.png'
import { SOCIAL_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-15 shadow-blue-gray-900/50" />
      </div>
    


      <div className="flex items-center space-x-4 m-8 gap-2 text-2xl">
        {SOCIAL_LINKS.map((link, index) => {
          const Icon = link.icon; 
          return (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 transition hover:text-purple-500"
            >
              <Icon /> 
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
