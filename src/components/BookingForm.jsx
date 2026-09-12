import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import GlobalContext from "../GlobalContext";
import emailjs from "@emailjs/browser";

const MAX_IMAGES = 3;

const BookingForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]); // { file, preview }[]
  const [imageError, setImageError] = useState("");
  const { globalData } = useContext(GlobalContext);
  const { appointmentDate, appointmentTime } = globalData;

  const form = useRef();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    if (images.length + selected.length > MAX_IMAGES) {
      setImageError(`You can attach up to ${MAX_IMAGES} images.`);
      e.target.value = "";
      return;
    }

    setImageError("");
    const newImages = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
    e.target.value = ""; // allow re-selecting same file later
  };

  const removeImage = (index) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Convert File objects to base64 so they can travel inside your JSON body
  const filesToBase64 = (files) =>
    Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send confirmation email to client
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
      .then(
        () => console.log("Email sent!"),
        (error) => console.log("Email failed...", error.text)
      );

    try {
      const imageBase64 = await filesToBase64(images.map((img) => img.file));

      const bookingData = {
        name,
        email,
        contact,
        message,
        date: appointmentDate,
        time: appointmentTime,
        services: globalData?.appointmentTitle,
        total: globalData?.total,
        images: imageBase64,
      };


      const response = await fetch("https://api.tlamisgallery.site/appointment/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
              <div>{`R ${globalData?.total ?? "0.00"}`}</div>
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
              placeholder="Karabo Ontlametse Tlhopane"
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
                placeholder="+2782 434 5469"
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div className="contact__group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="karabo@tlhopane.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <input type="hidden" value={globalData?.total} />

          <div className="contact__group">
            <label htmlFor="">Inspiration photos (optional, up to {MAX_IMAGES})</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              disabled={images.length >= MAX_IMAGES}
            />
            {imageError && (
              <span style={{ color: "red", fontSize: "0.85rem" }}>{imageError}</span>
            )}

            {images.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "8px",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {images.map((img, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={img.preview}
                      alt={`upload-${index}`}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="rmvImage"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="contact__group">
            <label htmlFor="">Include a message (optional)</label>
            <textarea
              name="message"
              cols="30"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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