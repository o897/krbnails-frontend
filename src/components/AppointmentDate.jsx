import { worktimes } from "../data";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";

const AppointmentDate = () => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();
  const [error, setError] = useState(null);

  const formSubmit = async (e) => {
    e.preventDefault();
  };

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
          <div className="time__confirmation">
            Your appointment time is at: {appointmentTime}
          </div>
          <div className="date__confirmation">
            Date is{" "}
            {appointmentDate ? appointmentDate.toString().slice(0, 16) : ""}
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
