import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <div className="flex space-x-10 mx-4">
      <div className="relative w-1/3 h-[30%] overflow-hidden rounded-lg">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_52683-79195.jpg?w=2000"
          alt="Mountain Landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="text-white text-lg font-semibold my-1 mx-1 relative z-10">
            Mountain Florence
          </div>
          <div className="text-white text-sm my-2 mx-1 relative z-10">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 mr-2"
            />
            Greenland
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-500 to-transparent p-4"></div>
        </div>
      </div>
      <div className="relative w-1/3 h-[30%] overflow-hidden rounded-lg">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_52683-79195.jpg?w=2000"
          alt="Mountain Landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="text-white text-lg font-semibold my-1 mx-1 relative z-10">
            Eco Camping
          </div>
          <div className="text-white text-sm my-2 mx-1 relative z-10">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 mr-2"
            />
            Patagonia
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-500 to-transparent p-4"></div>
        </div>
      </div>
      <div className="relative w-1/3 h-[30%] overflow-hidden rounded-lg">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_52683-79195.jpg?w=2000"
          alt="Mountain Landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="text-white text-lg font-semibold my-1 mx-1 relative z-10">
            Mountain Everest
          </div>
          <div className="text-white text-sm my-2 mx-1 relative z-10">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-red-500 mr-2"
            />
            Nepal
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-500 to-transparent p-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
