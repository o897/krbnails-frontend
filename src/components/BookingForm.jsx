import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";
import emailjs from "@emailjs/browser";
import { services } from "../data";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { globalData } = useContext(GlobalContext);
  const { appointmentDate, appointmentTime, formData } = globalData;


  const navigate = useNavigate();


  const handleConfirmation = async (e) => {
    navigate("/confirmation")
  }

  const bookingData = {
    name,
    email,
    contact,
    message,
    date: appointmentDate,
    time: appointmentTime,
    services: globalData?.appointmentTitle,
    total: globalData?.total,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send email to user after booking
    // emailjs
    //   .sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
    //     publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    //   })
    //   .then(
    //     () => {
    //       console.log("success!");
    //     },
    //     (error) => {
    //       console.log("Failed...", error.text);
    //     }
    //   );




    try {
      const response = await fetch("http://localhost:3000/appointment/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/confirmation")
      } else {
        setMessage(data.message || "Booking failed, please try again.")
      }

    } catch (error) {
      setMessage(`Something went wrong: ${error.message}`);
    }
  };

  useEffect(() => {
    console.log(globalData);

  }, [])

  return (
    <>
      <div className="bookform__header">
        <Link to="/date" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon className="angle-icon" icon={faAngleLeft} />
          </span>
        </Link>
        <div>3 / 3 Enter your details</div>
      </div>
      <div className="review">
        <div className="review__heading">Review your Booking</div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Location</div>
          <div>Odinburg Gardens</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Date</div>
          <div>{appointmentDate}</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Time</div>
          <div>{appointmentTime}</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table">
          <div className="header-row">
            <div>ITEMS</div>
            <div>COSTS</div>
          </div>
          <div className="custom-hr "></div>
          <div className="table-body">
            {globalData?.appointmentTitle &&
              globalData.appointmentTitle.map((service, index) => (
                <div key={index}>
                  <div className="table-row">
                    <div>{service.service}</div>
                    <div>{service.price}</div>
                  </div>
                </div>
              ))}
            <div className="table-row">
              <div className="nail-tech">
                With <strong>Karabo Tlhopane</strong> @ {`${appointmentTime}`}
              </div>
            </div>
            <div className="table-row">
              <div>Total</div>
              <div>{`${("R", globalData?.total ?? "")}`}</div>
            </div>
            <div className="custom-hr "></div>
          </div>
        </div>
      </div>
    
      <form onSubmit={handleSubmit} method="post">
        <div className="contact">
          <div className="contact-header">Contact info</div>
          <div className="contact__group">
            <label htmlFor="">Fullname</label>
            <input
              type="text"
              name="from_username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact_group-row">
            <div className="contact__group">
            <label htmlFor="">Cell phone</label>
            <input
              type="text"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="contact__group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          </div>
         
          <input type="hidden" value={globalData?.total} />
          <div className="contact__group">
            <label htmlFor="">Include a message (optional)</label>
            <textarea name="message" cols="30" rows="4"></textarea>
          </div>
          <button className="contact__bookbtn" type="submit">
            Book
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
