import React from "react";
import { worktimes } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const AppointmentDate = () => {
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentTime, setAppointmentTime] = useState();

  const formSubmit = () => {};

  return (
    <div className="appointment__form-date">
      <form onSubmit={formSubmit()}>
      <div className="date">
        <input type="date" name="date" />
      </div>
      <div className="times">
          {worktimes.map((day) => (
            <div className="time" onClick={() => setAppointmentTime(day.time)}>
              {day.time}
            </div>
          ))}
      </div>
      
            <button className="hero__bookbtn">BOOK AN APPOINTMENT</button>
                
      </form>
    </div>
  );
};

export default AppointmentDate;
