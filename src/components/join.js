import React from "react";

const join = () => {
  return (
    <div>
      <div className="mb-4">
        <img
          src="https://img.freepik.com/premium-vector/boy-traveling-with-camera-character-design-illustration_286658-1608.jpg"
          alt="Traveler"
          className="w-20 m-8  h-auto mx-auto rounded-full"
        />
      </div>
      <div className="text-lg text-white font-bold mb-2">Let's Explore The Beauty</div>
      <div className="text-gray-600 text-sm mb-4">
        Get special offers and news
      </div>
      <button className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 m-2 rounded-lg">
        Join Now  
      </button>
    </div>
  );
};

export default join;
