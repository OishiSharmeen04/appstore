import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useLoaderData, Link } from "react-router-dom";
import { formatDownloads } from "../../utilities/formatDownloads";
import AppNotFound from "../Root/AppNotFound/AppNotFound";
import Loader from "../../loader/Loader";

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(data);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const searchText = search.toLowerCase();
      const filtered = data.filter(
        (app) =>
          app.title.toLowerCase().includes(searchText) ||
          app.companyName.toLowerCase().includes(searchText)
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, data]);

  const handleChange = (e) => setSearch(e.target.value);
  const handleGoBack = () => setSearch("");

  const showNotFound = !loading && search.length > 0 && filteredApps.length === 0;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Our All Applications</h1>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mb-6">
        <p className="font-semibold text-gray-700 mb-3 md:mb-0">
          ({filteredApps.length}) Apps Found
        </p>
        <input
          type="text"
          placeholder="🔍 Search Apps"
          className="input w-full md:w-80 rounded-md p-2"
          value={search}
          onChange={handleChange}
        />
      </div>

      
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 px-4">
        {loading ? (
          
          <div className="col-span-full flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : showNotFound ? (
          
          <AppNotFound searchTerm={search} onGoBack={handleGoBack} />
        ) : (
          
          filteredApps.map((app) => (
            <Link
              key={app.id}
              to={`/details/${app.id}`}
              className="card bg-white shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 rounded-xl overflow-hidden"
            >
              <div className="p-2 lg:p-6 flex flex-col justify-between h-full">
                <div className="mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="object-cover w-full h-full"
                  />
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
