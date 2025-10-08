import React from 'react';
import logo from '../../assets/logo.png';
import git from '../../assets/git.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto">
  {/* Navbar Start */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* Mobile Dropdown */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {["Home", "Apps", "Installation"].map((item) => (
          <li key={item} className="group relative">
            <a
              className="
                font-medium text-gray-700"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Logo */}
    <a className="text-xl flex items-center gap-2 ml-2">
      <img src={logo} alt="" className="w-8 h-8 object-contain" />
      <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
        HERO.IO
      </span>
    </a>
  </div>

  {/* Navbar Center (Desktop) */}
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 gap-4">
    {["Home", "Apps", "Installation"].map((item) => (
      <li key={item} className="group">
        <a
          className="
            font-medium text-gray-700 transition-all duration-300
            group-hover:text-transparent group-hover:bg-clip-text
            group-hover:bg-gradient-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2]
            group-hover:underline
          "
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>



  {/* Navbar End */}
  <div className="navbar-end">
    <a 
      href="https://github.com/OishiSharmeen04/appstore"
      target="_blank"
    className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-purple-400">
      <img src={git} alt="" />
      <span>Contribute</span>
    </a>
  </div>
</div>

    );
};

export default Navbar;