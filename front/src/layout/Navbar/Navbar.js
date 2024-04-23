import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/thunkFunctions";

function Navbar() {
  const isAuth = useSelector((state) => {
    return state.user?.isAuth;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser()).then(() => {
      console.log("로그아웃");
      navigate("/");
    });
  }
  const routes = [
    {to: "/login", name: "로그인", auth: false},
    {to: "/register", name: "회원가입", auth: false},
    {to: "/company", name: "회사소개", auth: true},
    {to: "", name: "로그아웃", auth: true},
    {to: "/blog", name: "블로그", auth: true},
  ];
  return (
    <div className="w-full shadow-md">
      <div className="container m-auto flex justify-between">
        <h1 className="font-semibold p-4">
          <Link to="/">Com</Link>
        </h1>
        <ul className="flex">
          {routes.map(({to, name, auth}) => {
            if (isAuth !== auth) return null;
            if (name === "로그아웃") {
              return (
                <li key={name}>
                  <Link
                    onClick={handleLogout}
                    className="h-full flex px-4 justify-center items-center"
                  >
                    {name}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={name}>
                  <Link
                    to={to}
                    className="h-full flex px-4 justify-center items-center"
                  >
                    {name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
