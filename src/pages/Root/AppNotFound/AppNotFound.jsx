import React from "react";
import notFoundImg from "../../../assets/App-Error.png";

const AppNotFound = ({ onGoBack }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 col-span-full">
      <img src={notFoundImg} alt="App Not Found" className="w-48 h-48 mb-6" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">OOPS!! APP NOT FOUND</h1>
      <p className="text-gray-600 mb-6">
        The app you are looking for is not available. Please try another search.
      </p>
      <button
        onClick={onGoBack}
        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1 text-white px-6 py-2 rounded-md shadow-md"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
