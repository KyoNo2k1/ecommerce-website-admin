import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./pages/header";
import Navbar from "./pages/navbar";
import Product from "./Product";
import Customer from "./Customer";
import Checkout from "./Checkout";
import Report from "./Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/Customer",
    element: <Customer />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
