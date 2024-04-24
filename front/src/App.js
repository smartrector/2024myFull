import React, {useEffect} from "react";
import "./assets/css/tStyle.scss";
import {Routes, Route, NavLink, Outlet, useLocation} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./layout/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "./store/thunkFunctions";
import FooterPage from "./layout/Footer/FooterPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import NotAuthRouter from "./components/NotAuthRouter";
import ProtectedRouter from "./components/ProtectedRouter";
import MainPage from "./layout/Main/MainPage";
import BlogListPage from "./pages/BlogPage/BlogListPage";
import BlogViewPage from "./pages/BlogPage/BlogViewPage";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const {pathname} = useLocation();
  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, dispatch, pathname]);
  // const isAuth = useSelector((state) => {return state.user.isAuth});
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route element={<NotAuthRouter isAuth={isAuth} />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Route>

          <Route element={<ProtectedRouter isAuth={isAuth} />}>
            <Route path="/company" element={<CompanyPage />}></Route>
            <Route path="/blog" element={<BlogListPage />}></Route>
            <Route path="/blog/:blogId" element={<BlogViewPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
