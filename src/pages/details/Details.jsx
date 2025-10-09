import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';

const Details = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  if (!singleApp) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        <p>Loading app details...</p>
      </div>
    );
  }

  // Dummy Ratings Data (You can adjust dynamically later)
  const ratingsData = [
    { name: "5 star", count: 12000 },
    { name: "4 star", count: 7000 },
    { name: "3 star", count: 4000 },
    { name: "2 star", count: 2000 },
    { name: "1 star", count: 1000 },
  ];

  // Helper for formatting downloads (e.g., 8000000 → 8M)
  const formatDownloads = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={singleApp.image}
            alt={singleApp.title}
            className="w-84 h-84 object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            {singleApp.title}
          </h1>
          <p className="text-gray-500 mb-2">
            Developed by{" "}
            <span className="text-blue-600 font-medium">
              {singleApp.companyName || "unknown.dev"}
            </span>
          </p>

            <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-20 mb-5">
            <div className="flex flex-col items-start gap-2 text-green-600">
              <img src={download} alt="" />
              <span className="text-gray-500 text-sm">Downloads</span>
              <span className="font-extrabold text-4xl">{formatDownloads(singleApp.downloads)}</span>
            </div>

            <div className="flex flex-col items-start gap-2 text-orange-500">
              <img src={star} alt="" />
              <span className="text-gray-500 text-sm">Avg Rating</span>
              <span className="font-extrabold text-4xl">{singleApp.ratingAvg}</span>
            </div>

            <div className="flex flex-col items-start gap-2 text-purple-600">
              <img src={review} alt="" />
              <span className="text-gray-500 text-sm">Reviews</span>
              <span className="font-extrabold text-4xl">{formatDownloads(singleApp.reviews || 54000)}</span>
            </div>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold shadow-md cursor-pointer">
            Install Now ({singleApp.size ? `${singleApp.size} MB` : "291 MB"})
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>

      {/* Ratings Chart */}
      <div className="mt-10 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Ratings</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratingsData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
<div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>
      {/* Description */}
      <div className="mt-10 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {singleApp.description ||
            `This app helps users stay focused and productive with reminders, timers, and progress tracking.`}
        </p>
      </div>
    </div>
  );
};

export default Details;
