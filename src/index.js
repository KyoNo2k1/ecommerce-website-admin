import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Checkout from "./pages/Checkout";
import Report from "./pages/Report";
import RUDProduct from "./pages/RUDProduct";
import RUDCustomer from "./pages/RUDCustomer";
import DetailCheckout from "./pages/DetailCheckout";
import Category from "./pages/Category";

import store from "./redux/store";
import { Provider } from "react-redux";

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
    path: "Product/:Type",
    element: <RUDProduct />,
  },
  {
    path: "Product/:Type/:Id",
    element: <RUDProduct />,
  },
  {
    path: "/Category",
    element: <Category />,
  },
  {
    path: "/Customer",
    element: <Customer />,
  },
  {
    path: "Customer/:CustomerId",
    element: <RUDCustomer />,
  },
  {
    path: "/Checkout",
    element: <Checkout />,
  },
  {
    path: "Checkout/:CheckoutId",
    element: <DetailCheckout />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Header />
    <Navbar />
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>
);
