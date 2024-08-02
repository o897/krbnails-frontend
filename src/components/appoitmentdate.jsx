import { worktimes } from "../data";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect,useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import GlobalContext from "../GlobalContext";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from "moment";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Africa/Johannesburg");

const AppointmentDate = () => {
  const { globalData, updateGlobalData } = useContext(GlobalContext);

  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();
  const CustomActionBar = () => null; // Empty component to override the default action bar

  const [highlightedDays, setHighlitedDays] = useState([
    "06-06-2024",
    "06-09-2024",
    "21-06-2024",
    "12-06-2024",
  ]);

  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6;
  }

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    updateGlobalData(
      {appointmentDate : moment(appointmentDate).format("dddd, DD-MMMM-YYYY")},
      { appointmentTime : appointmentTime}
    );
    // updateGlobalData({ appointmentTime : appointmentTime});
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
                shouldDisableDate={isWeekend}
                onChange={(newValue) => setAppointmentDate(newValue)}
                slots={{ actionBar: CustomActionBar,toolbar: CustomActionBar, textField :(params) => (<TextField {...params} />) }}
              
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
