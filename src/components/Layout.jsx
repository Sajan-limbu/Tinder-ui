// src/components/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Anne from "../assets/Anne-Marie.jpeg";

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg p-5 fixed h-full">
                <h1 className="text-3xl font-bold mb-8 text-pink-500 text-center">
                    Tinder Lite
                </h1>

                {/* Profile Image Center */}
               {/* Profile Image Center */}
<div className="flex flex-col items-center mb-6">
  <img
    src={Anne}
    alt="Profile"
    className="w-24 h-24 rounded-full object-cover border-4 border-pink-400"
  />

  <Link
    to="/profile"
    className="mt-4 px-6 py-2 bg-pink-500 text-white text-lg font-medium rounded-full hover:bg-pink-400 transition duration-200"
  >
    Profile
  </Link>
</div>

                <nav className="flex flex-col text-2xl font-semibold space-y-4">

                    <Link to="/home" className="hover:bg-pink-100 p-2 rounded-lg">
                        Home
                    </Link>
                    <Link to="/chat" className="hover:bg-pink-100 p-2 rounded-lg">
                        Chat
                    </Link>

                    <Link to="/Archieve" className="hover:bg-pink-100 p-2 rounded-lg">
                        Archieve
                    </Link>
                    <Link to="/History" className="hover:bg-pink-100 p-2 rounded-lg">
                        History
                    </Link>
                    <Link to="/setting" className="hover:bg-pink-100 p-2 rounded-lg">
                        Settings
                    </Link>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-10 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;