import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
    />
  </BrowserRouter>
);
