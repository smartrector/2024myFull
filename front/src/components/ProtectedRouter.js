import React from "react";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRouter({isAuth}) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouter;
