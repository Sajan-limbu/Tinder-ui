import React from "react";
import Rose from "../assets/Rose.webp";
import Yooa from "../assets/Yooa.png";
import Anne from "../assets/Anne-Marie.jpeg";
import Charlize from "../assets/Charlize Theron.webp";
import Ronaldo from "../assets/Ronaldo.jpeg";
import Selena from "../assets/Selena-gomez.jpg";
import Trucu from "../assets/Tricia Helfer.jpg";
import Twiggy from "../assets/Twiggy.webp";

const Chat = () => {
  return (
    <div className="h-185 mt-2 bg-white rounded-2xl p-6 shadow-lg">

      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl ml-2 font-bold bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] bg-clip-text text-transparent">
          Chat
        </h1>

        {/* New Message Button */}
        <button className="p-3 rounded-full text-white 
        bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] 
        hover:opacity-90 transition duration-300 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5h2M12 7v10m7-7H5"
            />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-full border border-gray-200 
          focus:outline-none focus:ring-2 
          focus:ring-[#FD2B7B] shadow-sm"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex space-x-3">

          <button className="px-5 py-2 text-sm text-white rounded-full 
          bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] shadow-md cursor-pointer">
            All
          </button>

          <button className="px-5 py-2 text-sm rounded-full 
          border border-gray-300 hover:border-[#FD2B7B] 
          hover:text-[#FD2B7B] transition cursor-pointer">
            Unread
          </button>

          <button className="px-5 py-2 text-sm rounded-full 
          border border-gray-300 hover:border-[#FD2B7B] 
          hover:text-[#FD2B7B] transition cursor-pointer">
            Groups
          </button>

        </div>

        <button className="text-2xl font-bold px-3 hover:bg-gray-100 cursor-pointer rounded-full">
          ⋯
        </button>
      </div>

      {/* Profile Images Row */}
      <div className="flex space-x-7 overflow-x-auto mb-6 pl-0 p-2 pb-2">
        {[Twiggy, Selena, Trucu, Ronaldo, Charlize, Anne, Yooa, Rose].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="profile"
            className="w-16 h-16 rounded-full 
            border-2 border-[#FD2B7B] 
            hover:scale-105 transition duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* Chat List */}
      <div className="space-y-4">

        {/* Chat Item */}
        <div className="flex items-center space-x-4 
        hover:bg-pink-100 p-3 rounded-xl 
        transition cursor-pointer shadow-sm">

          <img
            src={Anne}
            alt="profile"
            className="w-12 h-12 rounded-full border-2 border-[#FF7158]"
          />

          <div>
            <h2 className="font-semibold">Anne Marie</h2>
            <p className="text-sm text-gray-500">Hey! How are you?</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 
        hover:bg-pink-100 p-3 rounded-xl 
        transition cursor-pointer shadow-sm">

          <img
            src={Ronaldo}
            alt="profile"
            className="w-12 h-12 rounded-full border-2 border-[#FF7158]"
          />

          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Let’s meet tomorrow.</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Chat;