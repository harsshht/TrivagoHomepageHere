import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFilter,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const myschedule = () => {
  return (
    <div className="mt-5 m-1 gap-1">
      <h1 className="m-2 font-bold">My Schedule</h1>

      <div className="flex justify-between h-1/4  p-2 border rounded-md my-4">
        <div className="flex gap-3">
          <div>
            <img
              src="https://previews.123rf.com/images/svetlanaprikhnenko/svetlanaprikhnenko1702/svetlanaprikhnenko170200020/71887448-redwood-national-park-illustration.jpg"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Redwood </h2>
            <div className="flex items-center text-sm">
              {/* <a className="text-gray-500 text-xs">
                <FontAwesomeIcon icon={faCalendar} className="mr-1" />
              </a> */}
              <a className="text-gray-500 text-xs ml-3 ">19June-20July</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-1/4  p-2 border rounded-md my-4">
        <div className="flex gap-3">
          <div>
            <img
              src="https://previews.123rf.com/images/svetlanaprikhnenko/svetlanaprikhnenko1702/svetlanaprikhnenko170200020/71887448-redwood-national-park-illustration.jpg"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Redwood </h2>
            <div className="flex items-center text-sm">
              {/* <a className="text-gray-500 text-xs">
                <FontAwesomeIcon icon={faCalendar} className="mr-1" />
              </a> */}
              <a className="text-gray-500 text-xs ml-3 ">19June-20July</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-1/4  p-2 border rounded-md my-4">
        <div className="flex gap-3">
          <div>
            <img
              src="https://previews.123rf.com/images/svetlanaprikhnenko/svetlanaprikhnenko1702/svetlanaprikhnenko170200020/71887448-redwood-national-park-illustration.jpg"
              alt="Traveler"
              className="w-12 h-12 mx-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Redwood </h2>
            <div className="flex items-center text-sm">
              {/* <a className="text-gray-500 text-xs">
                <FontAwesomeIcon icon={faCalendar} className="mr-1" />
              </a> */}
              <a className="text-gray-500 text-xs ml-3 ">19June-20July</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myschedule;
