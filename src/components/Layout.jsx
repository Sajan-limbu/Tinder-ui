// src/components/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Anne from "../assets/Anne-Marie.jpeg";

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
            
            {/* Sidebar */}
            <div className="w-72 bg-white/80 backdrop-blur-lg shadow-xl p-6 fixed h-full border-r border-pink-100">
                
                {/* Logo */}
                <h1 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                    Tinder Lite
                </h1>

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={Anne}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover 
                                   border-4 border-transparent 
                                   bg-gradient-to-r from-pink-500 to-orange-400 
                                   p-1 shadow-lg"
                    />

                    <Link
                        to="/profile"
                        className="mt-5 px-8 py-2 bg-gradient-to-r 
                                   from-pink-500 to-orange-400 
                                   text-white text-lg font-semibold 
                                   rounded-full shadow-md 
                                   hover:scale-105 hover:shadow-xl 
                                   transition-all duration-300"
                    >
                        Profile
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col text-lg font-semibold space-y-3">
                    
                    {["Home", "Chat", "Archieve", "History", "Setting"].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className="px-4 py-3 rounded-xl 
                                       hover:bg-gradient-to-r 
                                       hover:from-pink-100 
                                       hover:to-orange-100
                                       hover:text-pink-600
                                       transition-all duration-300"
                        >
                            {item}
                        </Link>
                    ))}

                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-10 ml-72">
                <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[80vh]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;