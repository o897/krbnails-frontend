import { useEffect, useState, useRef, useContext } from "react";
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
import GlobalContext from "../GlobalContext";
import dayjs from "dayjs";

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysToHighlight = ["2024-08-01", "2024-09-02", "2024-08-04"];
      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const CustomPickersDay = styled(PickersDay)(({ isHighlighted, day }) => ({
  position: "relative",
  // Styles for the circle
  "::after":
    day.isSame(new Date(), "day") || day.isAfter(new Date(), "day")
      ? {
          content: '""',
          position: "absolute",
          bottom: 6,
          left: "52%",
          transform: "translateX(-50%)",
          width: 13,
          height: 2.5,
          backgroundColor: isHighlighted ? "red" : "green",
        }
      : null,
}));

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const isHighlighted = highlightedDays.some(highlightedDays => day.isSame(dayjs(highlightedDays),'day'));

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
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const { updateGlobalData } = useContext(GlobalContext);
  const CustomActionBar = () => null;

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
    updateGlobalData({
      appointmentDate: dayjs(appointmentDate).format("DD-MMMM-YYYY"),
      appointmentTime: appointmentTime 
    });

    return () => requestAbortController.current?.abort();
  }, [appointmentTime, appointmentDate]);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    // setHighlightedDays([]);
    setAppointmentDate(null);
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
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              label="Select Date"
              loading={isLoading}
              value={appointmentDate}
              onChange={(newValue) => setAppointmentDate(newValue)}
              disablePast={true}
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
            onClick={() => {
              setAppointmentTime(time);
            }}
            style={{
              backgroundColor: appointmentTime === time ? "#ce86f7" : "white",
            }}
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
