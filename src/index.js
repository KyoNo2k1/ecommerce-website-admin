import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
