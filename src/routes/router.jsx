import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Root/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Details from "../pages/details/Details";
import InstalledApps from "../pages/installedAPps/InstalledApps";
import AllApps from "../pages/AllApps/AllApps";
import { loadApps } from "../loader/loadApps";
import { loadAllApps } from "../loader/loadAllApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true, 
        loader: loadApps,
        element: <Home />,
      },
      {
        path: "/apps",
        loader: loadAllApps,
        element: <AllApps/>,
      },
      {
        path: "/install",
        loader: loadAllApps,
        element: <InstalledApps />,
      },
      {
        path: "/details/:id",
        loader: loadAllApps,
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
