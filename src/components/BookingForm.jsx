import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import GlobalContext from "../GlobalContext";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { globalData } = useContext(GlobalContext);
  const { appointmentDate, appointmentTime } = globalData;

  const form = useRef();
  const navigate = useNavigate();

  const bookingData = {
    name,
    email,
    contact,
    message,
    date: appointmentDate,
    time: appointmentTime,
    services: globalData?.appointmentTitle,
    total: globalData?.total,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send confirmation email to client
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => console.log("Email sent!"),
        (error) => console.log("Email failed...", error.text)
      );

    try {
      const response = await fetch("https://imguploader.fun/appointment/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/confirmation");
      } else {
        setMessage(data.message || "Booking failed, please try again.");
      }
    } catch (error) {
      setMessage(`Something went wrong: ${error.message}`);
    }
  };


  return (
    <>
      <div className="bookform__header">
             <Link to="/" style={{ color: "white" }}>
             
          <PiArrowCircleLeftThin className="angle-icon" />
              
             </Link>
             <div className="col">
               <span className="sm-txt">Step 3 of 3</span>
               <span className="st-txt">Enter details</span>
             </div>
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
    
      <form ref={form} onSubmit={handleSubmit} method="post">

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
            Complete Booking
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
