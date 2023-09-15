import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const best = () => {
  return (
    <div className=" flex flex-col justify-between ">
      <div className=" h-1/4">
        <div className=" py-2 px-4 flex justify-between items-center">
          <div>
            <p className="text-black text-lg font-bold">Best Destination🌈</p>
            <span className="text-gray-400 text-sm">
              100 Destinations found
            </span>
          </div>
          <div>
            <button className="text-gray-600 border  px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              <FontAwesomeIcon icon={faFilter} />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-1/4  p-2">
        <div className="flex gap-3">
          <div>
            <img
              src="https://previews.123rf.com/images/svetlanaprikhnenko/svetlanaprikhnenko1702/svetlanaprikhnenko170200020/71887448-redwood-national-park-illustration.jpg"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-md font-semibold">Redwood Forest</h2>
            <div className="flex items-center text-sm">
              <a className="text-gray-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                California
              </a>
              <a className="text-gray-500 ml-3 ">
                <FontAwesomeIcon icon={faStar} className="mr-1" />
                4.9
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <a className="text-xl font-semibold">$150</a>
          <a className="text-gray-500 text-sm">/day</a>
        </div>
      </div>

      <div className="flex justify-between h-1/4  p-2">
        <div className="flex gap-3">
          <div>
            <img
              src="https://cdn.dribbble.com/users/891386/screenshots/4692092/media/a87f8a805e878d396d9656097fcad4bb.jpg?resize=400x300&vertical=center"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-md font-semibold">Sahale Camp</h2>
            <div className="flex items-center text-sm">
              <a className="text-gray-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                Washington
              </a>
              <a className="text-gray-500 ml-3 ">
                <FontAwesomeIcon icon={faStar} className="mr-1" />
                4.7
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <a className="text-xl font-semibold">$200</a>
          <a className="text-gray-500 text-sm">/day</a>
        </div>
      </div>

      <div className="flex justify-between h-1/4  p-2">
        <div className="flex gap-3">
          <div>
            <img
              src="https://us.123rf.com/450wm/vinisouza128/vinisouza1282301/vinisouza128230100669/197424667-illustration-of-an-adult-giant-sequoia-tree-in-a-redwood-forest.jpg?ver=6"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-md font-semibold">Monteverde Forest</h2>
            <div className="flex items-center text-sm">
              <a className="text-gray-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
               Kosta Rika
              </a>
              <a className="text-gray-500 ml-3 ">
                <FontAwesomeIcon icon={faStar} className="mr-1" />
                4.1
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <a className="text-xl font-semibold">$100</a>
          <a className="text-gray-500 text-sm">/day</a>
        </div>
      </div>
    </div>
  );
};

export default best;
