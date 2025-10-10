import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useLoaderData, Link } from "react-router-dom";
import { formatDownloads } from "../../utilities/formatDownloads";
import AppNotFound from "../Root/AppNotFound/AppNotFound";

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  // Flexible case-insensitive search
  const filteredApps = data.filter((app) => {
    const searchText = search.toLowerCase();
    return (
      app.title.toLowerCase().includes(searchText) ||
      app.companyName.toLowerCase().includes(searchText) ||
      app.description.toLowerCase().includes(searchText)
    );
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGoBack = () => {
    setSearch("");
  };

  const showNotFound = search.length > 0 && filteredApps.length === 0;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Our All Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search + Count */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mb-6">
        <p className="font-semibold text-gray-700 mb-3 md:mb-0">
          ({filteredApps.length}) Apps Found
        </p>
        <input
          type="text"
          placeholder="🔍 Search Apps"
          className="input input-bordered w-full md:w-80 focus:ring-2 focus:ring-purple-400 rounded-md p-2"
          value={search}
          onChange={handleChange}
        />
      </div>

      {/* Apps Grid or Not Found */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {showNotFound ? (
          <AppNotFound searchTerm={search} onGoBack={handleGoBack} />
        ) : (
          filteredApps.map((app) => (
            <Link
              key={app.id}
              to={`/details/${app.id}`}
              className="card bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 rounded-xl overflow-hidden"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={app.image} alt={app.title} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-md font-semibold mb-2 text-gray-800">{app.title}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded">
                    <IoMdDownload /> {formatDownloads(app.downloads)}
                  </span>
                  <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded">
                    <FaStar /> {app.ratingAvg}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllApps;
