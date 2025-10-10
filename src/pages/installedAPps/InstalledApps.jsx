import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getInstalledApp, removeStoredDB } from "../../utilities/addtoDB";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import { formatDownloads } from "../../utilities/formatDownloads";

const InstalledApps = () => {
  const [appList, setAppList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const AppData = getInstalledApp();
    const addedApps = AppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => addedApps.includes(app.id));
    setAppList(myAppList);
  }, [data]);

  const handleUninstall = (id) => {
    const confirmed = window.confirm("Are you sure you want to uninstall?");
    if (!confirmed) return;

    // 1️⃣ Remove from UI
    const updated = appList.filter((app) => app.id !== id);
    setAppList(updated);

    // 2️⃣ Remove from localStorage
    removeStoredDB(id);

    // 3️⃣ Optional alert
    alert("App uninstalled successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 min-h-screen p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2">
          Explore all trending apps installed by you
        </p>
      </div>

      {/* Count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl text-gray-700">
          {appList.length} Apps Found
        </h2>
      </div>

      {/* App Cards */}
      <div className="flex flex-col gap-4">
        {appList.length > 0 ? (
          appList.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
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
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No apps installed yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
