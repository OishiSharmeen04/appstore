import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../../assets/error-404.png"

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 max-w-6xl mx-auto">
      <img src={errorImg} alt="" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops, page not found!</h1>
      <p className="text-lg text-gray-600 mb-6">
        {error?.statusText || "The page you are looking for is not available."}
      </p>
      <Link
        to="/"
        className="btn btn-primary mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2 active:scale-95"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
