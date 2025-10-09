import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Root/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Details from '../pages/details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,

    children: [
      {
        index: true,
        loader:() => fetch('/appsData.json'),
        path: "/",
        Component: Home
      },
      {
        path: '/details/:id',
        loader:() => fetch('/appsData.json'),
        Component: Details
      }
    ]
  },
]);

export default router;