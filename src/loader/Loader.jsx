
import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-30">
      <img
        src={logo}
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  );
};

export default Loader;
