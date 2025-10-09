import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllApp = ({ singleApp }) => {
  const { companyName, image, downloads, ratingAvg, id } = singleApp;

  const formatDownloads = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num.toString();
    }
  };

  return (
    <Link to={`/Details/${id}`}>
    <div
      className="
        card bg-base-100 shadow-sm 
        hover:shadow-lg 
        transform transition-transform duration-300 
        hover:-translate-y-2
      "
    >
      <figure className="p-4">
        <img
          src={image}
          alt={companyName}
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{companyName}</h2>

        <div className="card-actions justify-between mt-2">
          <div className="badge badge-outline bg-green-100 text-green-600"><IoMdDownload />{formatDownloads(downloads)}</div>
          <div className="badge badge-outline bg-orange-100 text-orange-600"><FaStar />{ratingAvg}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AllApp;
