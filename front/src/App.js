import React from "react";
import "./assets/css/tStyle.scss";
import {Routes, Route, NavLink, Outlet} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Navbar from "./layout/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
