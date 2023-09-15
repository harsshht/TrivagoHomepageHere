import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTicketAlt, faStar,faSignOutAlt, faEnvelope, faMoneyBillAlt, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  // State to keep track of the clicked button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click and set the active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex justify-center  items-center flex-col">
          <a className="font-bold m-10 text-2xl Helvetica Neue">Trivago</a>
        </div>

        <div className="flex flex-col items-start mx-5">
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "Dashboard" ? "bg-green-500 text-white " : ""
            }`}
            onClick={() => handleButtonClick("Dashboard")}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            Dashboard
          </button>
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "My Tickets" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("My Tickets")}
          >
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            My Tickets
          </button>
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "Favorite" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Favorite")}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Favorite
          </button>
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "Message" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Message")}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Message
          </button>
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "Transaction" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Transaction")}
          >
            <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
            Transaction
          </button>
          <button
            className={`text-gray-500 px-1 font-semibold rounded-xl p-3 ${
              activeButton === "Settings" ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("Settings")}
          >
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start mx-5">
        <button
          className={`text-gray-500 px-1 font-semibold rounded-xl p-3 m-2  ${
            activeButton === "Logout" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => handleButtonClick("Logout")}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
