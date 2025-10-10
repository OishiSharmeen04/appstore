
import React from "react";
import logo from "../assets/logo.png"; 

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={logo} alt="Logo" className="" style={{ animation: "spin 5s linear infinite" }} />
    </div>
  );
};

export default Loader;
