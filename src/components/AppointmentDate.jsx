import { useEffect, useState, useRef } from "react";
import { worktimes } from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { StaticDatePicker } from "@mui/x-date-pickers";
import moment from "moment";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [2, 3, 5].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const CustomPickersDay = styled(PickersDay)(({ isHighlighted }) => ({
  position: 'relative', // Needed for pseudo-element positioning
  // Styles for the circle
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 15, // Adjust for circle size
    height: 3,
    backgroundColor: isHighlighted ? 'red' : 'green',
  },
}));

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const isHighlighted = highlightedDays.includes(day.date());

  return (
    <CustomPickersDay
      {...other}
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      isHighlighted={isHighlighted}
    />
  );
}

export default function AppointmentDate() {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const CustomActionBar = () => null;

  const [highlightedDays, setHighlightedDays] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();

    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    setAppointmentDate(null);

    fetchHighlightedDays(date);
  };

  const handleDateSelect = (newValue) => {
    setAppointmentDate(newValue);
    console.log("Selected Date:", newValue.format("YYYY-MM-DD"));
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
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              label="Select Date"
              loading={isLoading}
              value={appointmentDate}
              onChange={handleDateSelect}
              onMonthChange={handleMonthChange}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: (params) => (
                  <ServerDay {...params} highlightedDays={highlightedDays} />
                ),
                actionBar: CustomActionBar,
                toolbar: CustomActionBar,
              }}
            />
          </LocalizationProvider>
        </div>
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
      {appointmentDate && appointmentTime && (
        <button className="appointment__form-date-btn">
          <Link to="/details">{`${appointmentDate.format(
            "DD-MMMM-YYYY"
          )} @ ${appointmentTime}`}</Link>
        </button>
      )}
    </>
  );
}
