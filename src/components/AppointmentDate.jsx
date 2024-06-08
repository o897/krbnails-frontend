import { worktimes } from "../data";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
// import {AdapterDateFns} from '@mui/lab/AdapterDateFns';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";


dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Africa/Johannesburg');

const AppointmentDate = () => {
  
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();
  const [error, setError] = useState(null);
  const [bold,setBold] = useState(false);
  
  const formSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTimeClick = (e,time) => {
    e.preventDefault();
    setBold(!bold);
    console.log(time);
    setAppointmentTime(time);

  }

  return (
    <>
      <div className="bookform__header">
      <Link to="/book" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon className="angle-icon" icon={faAngleLeft} />
          </span>
      </Link>
        Select Date and time
      </div>
      <div className="appointment__form-date">
        <form onSubmit={formSubmit}>
          <div className="date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Select Date"
                timezone="Africa/Johannesburg"
                value={appointmentDate}
                format="DD-MMMM-YYYY"
                onChange={(newValue) => setAppointmentDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="times">
            {worktimes.map(({time},index) => (
              <div
                className="time"
                key={index}
                onClick={() => setAppointmentTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
          <div className="time__confirmation">
            Your appointment time is at: {appointmentTime}
          </div>
          <div className="date__confirmation">
           
            {appointmentDate ? appointmentDate.format("dddd , DD-MMMM-YYYY") : ""}
          </div>
          
          <button className="hero__bookbtn">
            <Link to="/details">Continue</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentDate;
