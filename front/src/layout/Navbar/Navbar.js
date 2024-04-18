import React from "react";
import {Link, Navigate} from "react-router-dom";

function Navbar() {
  const routes = [
    {to: "/login", name: "로그인", auth: false},
    {to: "/register", name: "회원가입", auth: false},
    {to: "/company", name: "회사소개", auth: true},
  ];
  return (
    <div className="w-full shadow-md">
      <div className="container m-auto flex justify-between">
        <h1 className="font-semibold p-4">
          <Link to="/">Com</Link>
        </h1>
        <ul className="flex">
          {routes.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  to={item.to}
                  className="h-full flex px-4 justify-center items-center"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
