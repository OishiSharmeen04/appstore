import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from "../../../assets/App-Error.png"

const AppNotFound = ({notFound}) => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 max-w-6xl mx-auto">
                  <img src={notFoundImg} alt="" />
                  <h1 className="text-5xl font-bold text-gray-800 mb-4">OOPS!! APP NOT FOUND</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    {notFound?.statusText || "The app you are requesting is not found on your system. Please try another apps."}
                  </p>
                  <Link
                    to="/"
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2 text-white px-6 py-2 rounded-md shadow-md transition"
                  >
                    Go Back!
                  </Link>
                </div>
            
        </div>
    );
};

export default AppNotFound;