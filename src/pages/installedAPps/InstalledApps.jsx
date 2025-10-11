import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getInstalledApp, removeStoredDB } from "../../utilities/addtoDB";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import { formatDownloads } from "../../utilities/formatDownloads";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const AppData = getInstalledApp();
    const addedApps = AppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => addedApps.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    if (!order) return;

    const sorted = [...appList].sort((a, b) => {
      if (order === "high-to-low") return b.size - a.size;
      else return a.size - b.size;
    });

    setAppList(sorted);
  };

  
  const handleUninstall = (id) => {
    const updated = appList.filter((app) => app.id !== id);
    setAppList(updated);

    removeStoredDB(id);

    toast.success("App uninstalled successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 min-h-screen p-10">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        theme="colored"
      />

      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2">
          Explore all trending apps installed by you
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="font-bold text-2xl text-gray-700">
          {appList.length} Apps Found
        </h2>

        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="select w-60"
        >
          <option disabled value="">
            Sort by Downloads
          </option>
          <option value="high-to-low">High → Low</option>
          <option value="low-to-high">Low → High</option>
        </select>
      </div>

      
      <div className="flex flex-col gap-4">
  {appList.length > 0 ? (
    appList.map((app) => (
      <div
        key={app.id}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
      >
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
            <img
              src={app.image}
              alt={app.title}
              className="object-cover w-full h-full"
            />
          </div>

                  <div className="flex flex-col mt-2 sm:mt-0">
            <h3 className="text-base sm:text-md font-semibold text-gray-800">
              {app.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 mt-1">
              <span className="flex items-center gap-1 text-green-500">
                <img src={download} alt="downloads" className="w-4 h-4" />
                {formatDownloads(app.downloads)}
              </span>

              <span className="flex items-center gap-1 text-orange-500">
                <img src={star} alt="rating" className="w-4 h-4" />
                {app.ratingAvg}
              </span>

              <span className="text-gray-600">{app.size} MB</span>
            </div>
          </div>
        </div>

        
        <button
          onClick={() => handleUninstall(app.id)}
          className="mt-3 sm:mt-0 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 py-2 rounded-md font-semibold text-sm sm:text-base w-full sm:w-auto"
        >
          Uninstall
        </button>
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center py-4">No apps installed.</p>
  )}
</div>

    </div>
  );
};

export default InstalledApps;
