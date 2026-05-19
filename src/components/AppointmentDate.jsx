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

async function fetchAppointments(date, { signal }) {
  const response = await fetch("http://localhost:3000/bookings", { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  const data = await response.json();

 const daysToHighlight = data
  .filter((booking) => booking.time.length === 4)
  .map((booking) => {
    return dayjs(booking.date, "DD-MMM-YYYY").format("YYYY-MM-DD");
  });
  
  return { daysToHighlight };  // return always goes last
}


const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "isHighlighted",
})(({ isHighlighted, day }) => ({
  position: "relative",

  "&::after":
    day.isSame(dayjs(), "day") || day.isAfter(dayjs(), "day")
      ? {
        content: '""',
        position: "absolute",
        bottom: 6,
        left: "50%",
        transform: "translateX(-50%)",
        width: 13,
        height: 2.5,
        borderRadius: 10,
        backgroundColor: isHighlighted ? "red" : "green",
      }
      : {},
}));

function ServerDay(props) {
  const {
    highlightedDays = [],
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  const isHighlighted = highlightedDays.some((highlightedDay) =>
    day.isSame(dayjs(highlightedDay), "day")
  );

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

    requestAbortController.current = controller;

    fetchAppointments(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });
  };

  useEffect(() => {
    fetchHighlightedDays(dayjs());

    return () => {
      requestAbortController.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!appointmentDate || !appointmentTime) return;

    updateGlobalData({
      appointmentDate: appointmentDate.format("DD-MMMM-YYYY"),
      appointmentTime,
    });
  }, [
    appointmentDate,
    appointmentTime,
    updateGlobalData,
  ]);

  const handleMonthChange = (date) => {
    requestAbortController.current?.abort();

    setIsLoading(true);
    setAppointmentDate(null);

    fetchHighlightedDays(date);
  };

  return (
    <>
      <div className="bookform__header">
        <Link to="/book" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon
              className="angle-icon"
              icon={faAngleLeft}
            />
          </span>
        </Link>

        Select Service Time
      </div>

      <div className="appointment__form-date">
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              label="Select Date"
              loading={isLoading}
              value={appointmentDate}
              disablePast
              onChange={(newValue) =>
                setAppointmentDate(newValue)
              }
              onMonthChange={handleMonthChange}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: ServerDay,
                actionBar: CustomActionBar,
                toolbar: CustomActionBar,
              }}
              slotProps={{
                day: {
                  highlightedDays,
                },
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
            style={{
              backgroundColor:
                appointmentTime === time
                  ? "#ce86f7"
                  : "white",
            }}
          >
            {time}
          </div>
        ))}
      </div>

      {appointmentDate && appointmentTime && (
        <button className="appointment__form-date-btn">
          <Link to="/details">
            {`${appointmentDate.format(
              "DD-MMMM-YYYY"
            )} @ ${appointmentTime}`}
          </Link>
        </button>
      )}
    </>
  );
}