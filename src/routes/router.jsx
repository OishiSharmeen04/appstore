import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Root/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Details from "../pages/details/Details";
import InstalledApps from "../pages/installedAPps/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    
    children: [
      {
        index: true, 
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "/install",
        loader: () => fetch("/appsData.json"),
        element: <InstalledApps />,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/appsData.json"),
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

export default router;
