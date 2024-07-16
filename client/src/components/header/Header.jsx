import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="py-3 px-5 flex flex-col items-start font-Ubantu sm:flex-row sm:justify-between shadow-md ">
      <div>
        <Link to={"/"} className="font-bold text-3xl">
          Pic Place
        </Link>
      </div>
      <ul className=" flex  gap-5 flex-row text-lg tracking-[0.5px] font-normal text-gray-400 ">
        <Link to={"/about"} className="hover:text-gray-900 cursor-pointer">
          About
        </Link>
        <Link to={"/contact"} className="hover:text-gray-900 cursor-pointer">
          Contact{" "}
        </Link>
        <Link to={"/login"} className="hover:text-gray-900 cursor-pointer">
          Login
        </Link>
        <Link to={"/signup"} className="hover:text-gray-900 cursor-pointer">
          Sign Up
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
