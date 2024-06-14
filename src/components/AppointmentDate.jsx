import { worktimes } from "../data";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// import {AdapterDateFns} from '@mui/lab/AdapterDateFns';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useEffect } from "react";
import moment from "moment";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Africa/Johannesburg");

const AppointmentDate = () => {
  const { globalData, updateGlobalData } = useContext(GlobalContext);

  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();
  const [error, setError] = useState(null);
  const [bold, setBold] = useState(false);
  const CustomActionBar = () => null; // Empty component to override the default action bar

  const [highlightedDays, setHighlitedDays] = useState([
    "2024-06-13",
    "2024-06-09",
    "2024-06-21",
    "2024-06-12",
  ]);

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTimeClick = (e, time) => {
    e.preventDefault();
    setBold(!bold);
    setAppointmentTime(time);
  };

  useEffect(() => {
    updateGlobalData({appointmentDate : moment(appointmentDate).format("dddd, DD-MMMM-YYYY")});
    updateGlobalData({ appointmentTime : appointmentTime});
  },[appointmentDate,appointmentTime])

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
              <StaticDatePicker
                label="Select Date"
                timezone="Africa/Johannesburg"
                value={appointmentDate}
                format="DD-MMMM-YYYY"
                onChange={(newValue) => setAppointmentDate(newValue)}
                slots={{ actionBar: CustomActionBar,toolbar: CustomActionBar }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
         <div className="times">
            {worktimes.map(({ time }, index) => (
              <div
                className="time"
                key={index}
                onClick={() => setAppointmentTime(time)}
              >
                {time}
              </div>
            ))}
          </div> 
           {/* <div className="time__confirmation">
            Your appointment time is at: {appointmentTime}
          </div> */}
          {/* <div className="date__confirmation">
            {appointmentDate
              ? appointmentDate.format("dddd , DD-MMMM-YYYY")
              : ""}
          </div>  */}

          { appointmentDate && appointmentTime &&
            <button className="appointment__form-date-btn">
            <Link to="/details">{`${appointmentDate.format("DD-MMMM-YYYY")} @ ${appointmentTime}`}</Link>
          </button>}
        </form>
      </div>
    </>
  );
};

export default AppointmentDate;
