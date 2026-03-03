// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div
      className="
      bg-white/50 backdrop-blur-xl
      border border-white/40
      rounded-3xl
      shadow-lg
      h-[420px]
      overflow-hidden
      transition-all duration-300
      hover:-translate-y-3
      hover:shadow-2xl
      hover:bg-white/60
      flex flex-col group
      "
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="
            w-full 
            h-56 
            object-cover 
            blur-sm 
            group-hover:blur-none
            transition duration-500
          "
        />
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-center mt-auto">
          <button
            className="
              px-5 py-2
              rounded-full
              text-white
              bg-gradient-to-r from-pink-500 to-orange-400
              hover:scale-105
              hover:shadow-lg
              transition-all duration-300
              font-semibold
            "
          >
            Buy Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;