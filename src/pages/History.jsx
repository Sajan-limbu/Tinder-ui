

import React from "react";
import Anne from "../assets/Anne-Marie.jpeg";
import Ronaldo from "../assets/Ronaldo.jpeg";
import Selena from "../assets/Selena-gomez.webp";
import Rose from "../assets/Rose.webp";

const historyData = [
  { name: "Anne Marie", message: "Matched 2 days ago", image: Anne },
  { name: "Ronaldo", message: "Matched 5 days ago", image: Ronaldo },
  { name: "Selena Gomez", message: "Matched 1 week ago", image: Selena },
  { name: "Rose", message: "Matched 10 days ago", image: Rose },
];

const History = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 h-168 bg-white rounded-2xl p-6 shadow-lg">

        {/* Page Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 text-[#FD2B7B]">
          Your History
        </h2>

        {/* History List */}
        <div className="space-y-4">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-2xl p-4 shadow-lg
                hover:scale-105 transition-transform duration-300 cursor-pointer mb-8 border-2 border-amber-50 hover:bg-pink-100
                 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-[#FD2B7B] mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">{item.message}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default History;