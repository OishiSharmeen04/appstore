import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = <>
          
          <Link to = '/'>
          <li className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer">
            Home
          </li></Link>
          
          <li className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer">
            Apps
          </li>
          <li className="text-gray-800 hover:text-purple-600 hover:underline underline-offset-4 cursor-pointer">
            Installation
          </li>
  </>

  return (
    <nav className="bg-white shadow-sm max-w-6xl mx-auto">
      <div className="px-4 py-2 flex justify-between items-center">
        {/* Logo and name */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-sm font-bold text-purple-600 hover:text-purple-700">HERO.IO</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {links}
        </ul>

        {/* Contribute Button */}
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md font-medium shadow transition cursor-pointer">
          <FaGithub className="text-white text-lg" />
          Contribute
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden relative">
  <ul className="absolute right-0 bg-blue-100 z-[1] mt-3 w-52 p-2 shadow menu menu-sm">
    {links}
  </ul>
</div>

      )}
    </nav>
  );
};

export default Navbar;
