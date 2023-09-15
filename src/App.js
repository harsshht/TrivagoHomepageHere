import React from "react";
import Sidebar from "./components/sidebar";
import Center from "./components/center";
import Schedule from "./components/schedule";

function App() {
  return (
    <div className="mx-40 my-20 ">
      <div className=" flex border-2 h-[calc(90vh)] rounded-xl bg-white border-white-100 ">
        <div className="w-1/6 ">
          <Sidebar />
        </div>
        <div className="w-4/6 bg-gray-100 rounded-xl mx-2 my-5">
          <Center />
        </div>
        <div className="w-1/5 ">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default App;
