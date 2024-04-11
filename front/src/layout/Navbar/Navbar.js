import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  const routes = [
    {to: "/login", name: "로그인"},
    {to: "/register", name: "회원가입"},
  ];
  return (
    <div className="w-full shadow-md">
      <div className="container m-auto flex justify-between">
        <h1 className="font-semibold p-4">COMPANY</h1>
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
