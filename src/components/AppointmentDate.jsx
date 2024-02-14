import React from "react";
import { worktimes } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AppointmentDate = () => {
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentTime, setAppointmentTime] = useState();

  const formSubmit = () => {};

  return (
    <div className="appointment__form-date">
      <form onSubmit={formSubmit()}>
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
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
