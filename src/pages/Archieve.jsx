import React from "react";

const Archive = () => {
  const archivedData = [
    {
      id: 1,
      name: "Anna",
      age: 24,
      message: "Hey, how are you?",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "3 days ago",
    },
    {
      id: 2,
      name: "Sophia",
      age: 26,
      message: "Let's catch up soon!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "1 week ago",
    },
  ];

  return (
    <div className="flex-1 h-185 mt-2 bg-white rounded-2xl p-6 shadow-lg">
      
      {/* Header */}
      <div className="flex justify-center mb-5">
        <h1 className="text-3xl font-bold 
            bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] 
            bg-clip-text text-transparent">
          Archieve
        </h1>
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

      {/* Tabs with 3-dot icon on right */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <button className="px-5 py-2 text-sm text-white rounded-full 
            bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] shadow-md cursor-pointer">
              All
          </button>

          <button className="px-5 py-2 text-sm rounded-full 
            border border-gray-300 hover:border-[#FD2B7B] 
            hover:text-[#FD2B7B] transition cursor-pointer">
              Matches
          </button>

          <button className="px-5 py-2 text-sm rounded-full 
            border border-gray-300 hover:border-[#FD2B7B] 
            hover:text-[#FD2B7B] transition cursor-pointer">
              Chat
          </button>
        </div>

        {/* 3-dot icon on the far right */}
          <button className="text-2xl font-bold px-3 hover:bg-gray-100 cursor-pointer rounded-full">
          ⋯
        </button>
      </div>

      {/* Archive List */}
      <div className="space-y-4">
        {archivedData.map((item) => (
          <div
            key={item.id}
            className="flex items-center hover:bg-pink-100 justify-between bg-white p-4 rounded-xl shadow hover:shadow-lg h-20 transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800 ">
                  {item.name}, {item.age}
                </h2>
                <p className="text-sm text-gray-500">{item.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Archived {item.date}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-3 py-1 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 cursor-pointer transition">
                Restore
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;