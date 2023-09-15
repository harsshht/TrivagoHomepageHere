import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=" p-5">
        <h1 className="text-2xl font-bold text-black ">Hello, Jeremy! 👋</h1>
        <a className="text-gray-500 text-sm hover:text-green-500 transition duration-300 ease-in-out">
          Welcome back and explore the world.
        </a>
      </div>

      <div className="flex justify-between ">
        <div className="flex items-center bg-white rounded-full my-7 mx-3">
          <span className="text-gray-500 mx-5">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="outline-none flex-grow bg-transparent"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center ">
          <span className="text-gray-500 bg-white py-2 px-3 rounded-full mx-6">
            <FontAwesomeIcon icon={faBell} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
