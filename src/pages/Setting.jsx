import React, { useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid';

const Setting = () => {
  const [notifications, setNotifications] = useState(true);
  const [discovery, setDiscovery] = useState(true);

  return (
    <div className="max-h-screen bg-gray-100 flex justify-center mt-5 p-5">
      <div className="w-[600px] bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Settings
        </h1>

        {/* Profile Section */}
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-700 cursor-pointer">Profile</h2>
          <p className="text-gray-500 opacity-70 cursor-pointer">Edit your personal info</p>
        </div>

        {/* Account & Login */}
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-700 cursor-pointer">Account & Login</h2>
          <p className="text-gray-500 opacity-70 cursor-pointer">Change password, email, phone</p>
        </div>

        {/* Privacy & Security */}
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-700 cursor-pointer">Privacy & Security</h2>
          <p className="text-gray-500 opacity-70 cursor-pointer">Manage blocked users and privacy settings</p>
        </div>

        {/* Discovery */}
        <div className="border-b pb-4 flex justify-between items-center cursor-pointer">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Discovery</h2>
            <p className="text-gray-500 opacity-70">Allow others to find you</p>
          </div>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={discovery}
              onChange={() => setDiscovery(!discovery)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 transition-all"></div>
          </label>
        </div>

        {/* Notifications */}
        <div className="border-b pb-4 flex justify-between items-center cursor-pointer">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
            <p className="text-gray-500 mt-1">Enable push notifications</p>
          </div>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 transition-all"></div>
          </label>
        </div>

        {/* Subscription */}
        <div className="pb-4 cursor-pointer">
          <h2 className="text-lg font-semibold text-gray-700">Subscription</h2>

          {/* Premium Button */}
          <div className="flex justify-center mt-3">
            <button className="relative w-fit bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] text-white py-2 px-6 rounded-lg hover:opacity-90 transition cursor-pointer overflow-hidden">
              
              {/* Crown Icon Behind Text */}
              <StarIcon className="absolute left-1/2 top-1/2 w-12 h-12 text-yellow-300 opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              {/* Button Text */}
              <span className="relative z-10 font-semibold">Upgrade</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;