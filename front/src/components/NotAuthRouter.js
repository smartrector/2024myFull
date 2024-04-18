import React from "react";
import {Navigate, Outlet} from "react-router-dom";

function NotAuthRouter({isAuth}) {
  return isAuth ? <Navigate to="/" /> : <Outlet />;
}

export default NotAuthRouter;
