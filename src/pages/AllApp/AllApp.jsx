import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const AllApp = ({ singleApp }) => {
  const { companyName, image, downloads, ratingAvg } = singleApp;

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
          <div className="badge badge-outline"><IoMdDownload />{formatDownloads(downloads)}</div>
          <div className="badge badge-outline"><FaStar />{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AllApp;
