import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Checkout from "./pages/Checkout";
import Report from "./pages/Report";

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
