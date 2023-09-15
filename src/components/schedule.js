import React, { useState } from "react";
import Calendar from "react-calendar";
import Profile from "./profile";
import Myschedule from "./myschedule";
import "./calender.css"; // Import your custom CSS for calendar styling

const Schedule = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Profile />
      <div className="calendar-container">
        <Calendar
          className="custom-calendar"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <Myschedule />
    </div>
  );
};

export default Schedule;
