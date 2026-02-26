// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-70 m-2 
                    hover:shadow-xl transition-shadow duration-300 
                    flex flex-col group">

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-43 object-cover object-center 
                     blur-sm group-hover:blur-none 
                     transition duration-500"
        />
      )}

      <div className="p-3 flex flex-col">
        <h3 className="text-xl font-semibold pl-1 mb-1">{title}</h3>

        <p className="text-gray-600 text-sm mb-2">{description}</p> 

        <div className="flex justify-center mt-auto">
          <button className="bg-pink-500 text-white px-2 py-1 rounded 
                             hover:bg-pink-600 transition duration-300 m-1">
            Buy subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;