import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDownloads } from "../../utilities/formatDownloads";

const AllApp = ({ singleApp }) => {
  const { title, image, downloads, ratingAvg, id } = singleApp;

  return (
    <Link
      to={`/details/${id}`}
      className="card bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 rounded-xl overflow-hidden"
    >
      <div className="p-2 lg:p-6 flex flex-col justify-between h-full">
        <div className="mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        <h3 className="text-sm lg:text-lg font-semibold mb-2 text-gray-800 text-start">
          {title}
        </h3>

        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded">
            <IoMdDownload /> {formatDownloads(downloads)}
          </span>
          <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded">
            <FaStar /> {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AllApp;
