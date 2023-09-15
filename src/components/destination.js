import React from "react";
import Best from "./best";
import Join from "./join";

const Destination = () => {
  return (
    <div className=" w-full flex mt-2 ">
      <div className="w-2/3 h-auto bg-white p-4 rounded-xl mx-4">
        <Best />
      </div>
      <div className="text-center rounded-xl w-1/3 mr-4  bg-blue-950">
        <Join />
      </div>
    </div>
  );
};

export default Destination;
