import React from 'react';
import Navbar from "./navbar";
import Gallery from "./gallery";
import Destination from "./destination";

const Center = () => {
  return (
    <div className=" flex flex-col">
      <Navbar  />
      <Gallery  />
      <Destination  />
    </div>
  );
};

export default Center;
