import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { IoMdSettings } from "react-icons/io";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <div className="flex">
      <div className="h-screen bg-blue-500 p-4 w-20 flex flex-col items-center space-y-6">
        <div className="mt-4">
          <a href="/">
            <img
              src="./public/logo.svg"
              alt="_black"
              className="w-12 h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            to={"/"}
            className="flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <IoMdSettings className="w-7 h-7" />
          </Link>
          <Link
            to={"/category-list"}
            className="flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <IoPeopleCircleOutline className="w-7 h-7" />
          </Link>
          <Link
            to={"/shop"}
            className="flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaBasketShopping className="w-7 h-7" />
          </Link>
          <Link
            to={"/card"}
            className="flex items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <IoCardOutline className="w-7 h-7" />
          </Link>
        </nav>
      </div>
      <div className="w-full flex-grow p-7 animate-fadeIn">
        <Outlet />
      </div>
    </div>
  );
};
