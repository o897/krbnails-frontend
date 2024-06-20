import { useEffect, useState, useRef } from "react";
import { worktimes } from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { styled } from "@mui/system";

import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { StaticDatePicker } from "@mui/x-date-pickers";
import GlobalContext from "../GlobalContext";
import moment from "moment";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */

// so let this fetch the dates clients have booked
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

// Server
function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

     // Only apply the badge if the day is not outside the current month
  if (outsideCurrentMonth) {
    return <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />;
  }

    const StyledBadge = styled(Badge)(({ color }) => ({
      '& .MuiBadge-badge': {
        top : 27, // Adjust this value to position the badge below the day
        left: '50%',
        transform: 'translateX(-50%)',
        height: 2, // Set the height of the badge to create a dot
        backgroundColor: color, // Dynamically set the background color of the badge
        color: 'transparent', // Make the badge content invisible
      },
    }));

  // the key takes the specific day
  return (
    <StyledBadge
    key={day.toString()}
    overlap="circular"
    badgeContent=" " // Always show the dot
    color={isSelected ? 'green' : ''} // Set color based on whether the day is highlighted
  >
    <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
  </StyledBadge>
  );
}

export default function AppointmentDate() {
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const CustomActionBar = () => null; // Empty component to override the default action bar

  // days to highlight
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15, 16]);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState();

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  // this is a where it all happens
  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    // fake fetch comes with clients booked dates, then pushes this dates to the "highlighted dates" slot props to highlight calendar
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight); //this updates the [highlighteddays ] State
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    // fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    // handles month changes, fetches highlighted dates in the arr and it pushes them onto the "badges"
    fetchHighlightedDays(date);
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
              <StaticDatePicker
                label="Select Date"
                loading={isLoading}
                value={appointmentDate}
                onChange={(newValue) => setAppointmentDate(newValue)}
                onMonthChange={handleMonthChange}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                  day: ServerDay,
                  actionBar: CustomActionBar,
                  toolbar: CustomActionBar,
                  textField: (params) => <TextField {...params} />,
                }}
                slotProps={{
                  day: { highlightedDays },
                }}
              />
            </LocalizationProvider>
          </div>
        </form>
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
