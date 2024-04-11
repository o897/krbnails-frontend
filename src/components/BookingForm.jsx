import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const BookingForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    try {
      fetch("http://tlamis/createBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "title",
          name: "name",
          phone: "phone",
          date: "date",
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Could submit post to mongo api");
        }
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
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
          <div>Friday, Apr 6, 2024</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Time</div>
          <div>14:00pm</div>
        </div>
        <div className="custom-hr "></div>

        <div className="table">
          <div className="header-row">
            <div>ITEMS</div>
            <div>COSTS</div>
          </div>
          <div className="custom-hr "></div>
          <div className="table-body">
            <div className="table-row">
              <div>Manicure</div>
              <div>R20.5</div>
            </div>
            <div className="table-row">
              <div>Acrylic</div>
              <div>R20.5</div>
            </div>
            <div className="table-row">
            <div>With <strong>Karabo Tlhopane</strong>  @ 12:30pm</div>
            </div>
            <div className="custom-hr "></div>
          </div>

        </div>
      </div>
      
      <div className="contact">
      <div className="contact-header">Contact info</div>
        <div className="contact__group">
          <label htmlFor="">Fullname</label>
          <input type="text" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Cell phone</label>
          <input type="text" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Include a message (optional)</label>
          <textarea name="" id="" cols="30" rows="4"></textarea>
        </div>
        <button className="contact__bookbtn">Book</button>
        
      </div>
    </>
  );
};

export default BookingForm;
