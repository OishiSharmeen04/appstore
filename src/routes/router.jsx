import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Root/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Details from "../pages/details/Details";
import InstalledApps from "../pages/installedAPps/InstalledApps";
import AppNotFound from "../pages/Root/AppNotFound/AppNotFound";
import AllApps from "../pages/AllApps/AllApps";
import { loadApps, loadAllApps } from "../loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true, 
        loader: loadApps, // centralized loader
        element: <Home />,
      },
      {
        path: "/apps",
        loader: loadAllApps, // centralized loader
        element: <AllApps/>,
      },
      {
        path: "/install",
        loader: loadApps, // centralized loader
        element: <InstalledApps />,
      },
      {
        path: "/details/:id",
        loader: loadApps, // centralized loader
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "ku",
        element: <AppNotFound />,
      }
    ],
  },
]);

export default router;
