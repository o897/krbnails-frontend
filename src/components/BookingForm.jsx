import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState();
  const { globalData } = useContext(GlobalContext);
  const { appointmentDate, appointmentTime, formData } = globalData;
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mwogtyl", "template_7ze51ma", form.current, {
        publicKey: "Fc6zj-MOba4tQJCtp",
      })
      .then(
        () => {
          console.log("success!");
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", "pele1@gmail.com");
    formData.append("date", appointmentDate);
    formData.append("time", appointmentTime);

    try {
      const response = fetch("http://localhost:3000/book", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error);
      setMessage("Error");
    }
  };

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
            {formData?.appointmentTitle &&
              formData.appointmentTitle.map((service, index) => (
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
              <div>{`${("R", formData?.total ?? "")}`}</div>
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
          <div className="contact__group">
            <label htmlFor="">Cell phone</label>
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="contact__group">
            <label htmlFor="">Email</label>
            <input
              type="from_email"
              name="from_email"
              onChange={(e) => e.target.value}
              required
            />
          </div>
          <div className="contact__group">
            <label htmlFor="">Include a message (optional)</label>
            <textarea name="message" cols="30" rows="4"></textarea>
          </div>
          <button className="contact__bookbtn" type="submit">
            <Link to="/confirmation">Book</Link>
            {/* Book */}
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
