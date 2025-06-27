import { NavLink } from "react-router";
import { Leaf, Facebook, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const navLinkClass = ({ isActive }) =>
    `hover:text-green-500 transition ${
      isActive ? "text-green-600 font-semibold underline underline-offset-4" : "text-gray-500"
    }`;

  return (
    <footer className="bg-green-50 dark:bg-gray-900 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <Leaf />
            <h1 className="text-xl font-bold">Botanico</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/all-plants" className={navLinkClass}>All Plants</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/dashbord" className={navLinkClass}>Dashbord</NavLink>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600 dark:text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Botanico — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
