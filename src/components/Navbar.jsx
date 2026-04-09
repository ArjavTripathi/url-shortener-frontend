import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../ContextApi/contextapi";

const Navbar = () => {
  const navigate = useNavigate()
  const {token, setToken} = useStoreContext()
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogoutHandler = () => {
    setToken(null)
    localStorage.removeItem("JWT_TOKEN")
    navigate("/")
  }

  return (
        <div className="h-16 bg-custom-gradient z-50 flex items-center sticky top-0">
          <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
            <Link to="/">
              <h1 className="font-bold text-3xl text-white italic">
                Linkit
              </h1>
            </Link>
           <ul
              className={`flex sm:gap-8 gap-4 sm:items-center sm:pt-0 pt-3 sm:static absolute left-0 top-[64px] sm:shadow-none shadow-md z-50 ${
                navbarOpen ? "h-fit pb-5 bg-custom-gradient" : "h-0 overflow-hidden"
              } transition-all duration-100 sm:h-fit sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
            >
          <li className="font-medium transition-all duration-150">
            <Link
              className={`px-3 py-1 rounded-md hover:text-white transition-all duration-150 ${
                path === "/" ? "text-white" : "text-gray-200"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="font-[500] transition-all duration-150">
            <Link
              className={`px-3 py-1 rounded-md hover:text-white transition-all duration-150 ${
                path === "/about" ? "text-white" : "text-gray-200"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          {token &&(
            <li className="font-[500] transition-all duration-150">
            <Link
              className={`px-3 py-1 rounded-md hover:text-white transition-all duration-150 ${
                path === "/dashboard" ? "text-white" : "text-gray-200"
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          )}
          {!token &&(
          <li>
            <Link to="/register">
              <span className="bg-rose-700 text-white cursor-pointer w-24 flex items-center justify-center font-semibold px-4 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
                SignUp
              </span>
            </Link>
          </li>
          )}

          {token &&(
          <li>
            <button
            onClick={onLogoutHandler}
            className="bg-rose-700 text-white cursor-pointer w-24 flex items-center justify-center font-semibold px-4 py-2 rounded-md hover:text-slate-300 transition-all duration-150">
                Logout
            </button>
          </li>
          )}
          
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;