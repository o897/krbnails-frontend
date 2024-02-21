import React from "react";
import { worktimes } from "../data";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from '@mui/material/TextField'; // Import TextField from MUI

const AppointmentDate = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();
  const formSubmit = () => {};
  
 
  
  return (
    <div className="appointment__form-date">
      <form onSubmit={formSubmit()}>
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Select Date"
              value={appointmentDate ? appointmentDate : null}
              onChange={(newValue) => setAppointmentDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="times">
          {worktimes.map((day) => (
            <div
              className="time"
              key={day.time}
              onClick={() => setAppointmentTime(day.time)}
            >
              {day.time}
            </div>
          ))}
        </div>
        <div className="time-confirmation">
          Your appointment time is : {appointmentTime} on the {appointmentDate ? appointmentDate.toString(): '___'}
        </div>

        <button className="hero__bookbtn">BOOK AN APPOINTMENT</button>
      </form>
    </div>
  );
};

export default AppointmentDate;
