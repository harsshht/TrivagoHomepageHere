import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const profile = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between h-1/4 p-2 py-8">
          <div className="flex gap-3">
            <div>
              <img
                src="https://st2.depositphotos.com/4323461/9164/v/450/depositphotos_91647774-stock-illustration-emoji-smile-laughter-man-face.jpg"
                alt="Traveler"
                className="w-10 h-10  rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-md font-semibold">Jeremy zuck</h2>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center">
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile