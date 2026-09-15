import { useState, useEffect, useRef, useContext } from "react";
import imageCompression from "browser-image-compression";
import heic2any from "heic2any";
import { Link, useNavigate } from "react-router-dom";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import GlobalContext from "../GlobalContext";

const MAX_IMAGES = 3;
const MAX_ORIGINAL_IMAGE_SIZE = 20 * 1024 * 1024;

const BookingForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingImages, setIsProcessingImages] = useState(false);

  const imagesRef = useRef([]);
  const navigate = useNavigate();
  const { globalData } = useContext(GlobalContext);
  const { appointmentDate, appointmentTime } = globalData;

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, []);

  const isHeicImage = (file) => {
    const fileType = file.type.toLowerCase();
    const fileName = file.name.toLowerCase();

    return (
      fileType === "image/heic" ||
      fileType === "image/heif" ||
      fileName.endsWith(".heic") ||
      fileName.endsWith(".heif")
    );
  };

  const convertHeicToJpeg = async (file) => {
    const converted = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: 0.9,
    });

    const jpegBlob = Array.isArray(converted) ? converted[0] : converted;
    const jpegName = file.name.replace(/\.(heic|heif)$/i, ".jpg");

    return new File([jpegBlob], jpegName, {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  };

  const prepareImage = async (file) => {
    const imageFile = isHeicImage(file)
      ? await convertHeicToJpeg(file)
      : file;

    const compressed = await imageCompression(imageFile, {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1600,
      useWebWorker: true,
      fileType: "image/jpeg",
      initialQuality: 0.85,
    });

    const outputName = imageFile.name.replace(
      /\.(jpg|jpeg|png|webp)$/i,
      ".jpg"
    );

    return new File([compressed], outputName, {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  };

  const handleImageChange = async (event) => {
    const input = event.target;
    const selectedFiles = Array.from(input.files || []);
    input.value = "";

    if (!selectedFiles.length) return;

    if (images.length + selectedFiles.length > MAX_IMAGES) {
      setImageError(`You can attach up to ${MAX_IMAGES} images.`);
      return;
    }

    const invalidFile = selectedFiles.find((file) => {
      const validType = file.type.startsWith("image/");
      const validExtension = /\.(jpg|jpeg|png|webp|heic|heif)$/i.test(
        file.name
      );

      return !validType && !validExtension;
    });

    if (invalidFile) {
      setImageError(
        "Please select JPEG, PNG, WebP or iPhone HEIC images only."
      );
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_ORIGINAL_IMAGE_SIZE
    );

    if (oversizedFile) {
      setImageError(
        `${oversizedFile.name} is too large. Each image must be smaller than 20 MB.`
      );
      return;
    }

    setImageError("");
    setSubmitError("");
    setIsProcessingImages(true);

    try {
      const preparedImages = [];

      for (const file of selectedFiles) {
        const preparedFile = await prepareImage(file);

        preparedImages.push({
          file: preparedFile,
          preview: URL.createObjectURL(preparedFile),
        });
      }

      setImages((currentImages) => [
        ...currentImages,
        ...preparedImages,
      ]);
    } catch (error) {
      console.error("Image processing failed:", error);
      setImageError(
        "We could not prepare one of the images. Please try uploading a screenshot of it instead."
      );
    } finally {
      setIsProcessingImages(false);
    }
  };

  const removeImage = (index) => {
    setImages((currentImages) => {
      const imageToRemove = currentImages[index];

      if (imageToRemove?.preview) {
        URL.revokeObjectURL(imageToRemove.preview);
      }

      return currentImages.filter((_, imageIndex) => imageIndex !== index);
    });

    setImageError("");
  };

  const filesToBase64 = (files) =>
    Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result);
            reader.onerror = () =>
              reject(new Error(`Failed to read ${file.name}.`));
            reader.readAsDataURL(file);
          })
      )
    );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || isProcessingImages) return;

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const imageBase64 = await filesToBase64(
        images.map((image) => image.file)
      );

      const bookingData = {
        name: name.trim(),
        email: email.trim(),
        contact: contact.trim(),
        message: message.trim(),
        date: appointmentDate,
        time: appointmentTime,
        services: globalData?.appointmentTitle || [],
        total: globalData?.total || 0,
        images: imageBase64,
      };

      const response = await fetch(
        "https://api.tlamisgallery.site/appointment/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(
          data?.message ||
            `Booking could not be completed (${response.status}).`
        );
      }

      navigate("/confirmation");
    } catch (error) {
      console.error("Booking submission failed:", error);

      const isNetworkError =
        error.message === "Failed to fetch" ||
        error.message === "Load failed" ||
        error.name === "TypeError";

      setSubmitError(
        isNetworkError
          ? "The booking could not be sent. Please check your internet connection and try again."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bookform__header">
        <Link to="/" style={{ color: "white" }} aria-label="Return home">
          <PiArrowCircleLeftThin className="angle-icon" />
        </Link>
        <div className="col">
          <span className="sm-txt">Step 3 of 3</span>
          <span className="st-txt">Enter details</span>
        </div>
      </div>

      <div className="review">
        <div className="review__heading">Review your Booking</div>
        <div className="custom-hr"></div>
        <div className="table-row">
          <div>Location</div>
          <div>Odinburg Gardens</div>
        </div>
        <div className="custom-hr"></div>
        <div className="table-row">
          <div>Date</div>
          <div>{appointmentDate}</div>
        </div>
        <div className="custom-hr"></div>
        <div className="table-row">
          <div>Time</div>
          <div>{appointmentTime}</div>
        </div>
        <div className="custom-hr"></div>

        <div className="table">
          <div className="header-row">
            <div>ITEMS</div>
            <div>COSTS</div>
          </div>
          <div className="custom-hr"></div>
          <div className="table-body">
            {globalData?.appointmentTitle?.map((service, index) => (
              <div className="table-row" key={index}>
                <div>{service.service}</div>
                <div>{service.price}</div>
              </div>
            ))}

            <div className="table-row">
              <div className="nail-tech">
                With <strong>Karabo Tlhopane</strong> @ {appointmentTime}
              </div>
            </div>

            <div className="table-row">
              <div>Total</div>
              <div>R {globalData?.total ?? "0.00"}</div>
            </div>
            <div className="custom-hr"></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} method="post" aria-busy={isSubmitting}>
        <div className="contact">
          <div className="contact-header">Contact info</div>

          <div className="contact__group">
            <label htmlFor="booking-name">Full name</label>
            <input
              id="booking-name"
              type="text"
              name="from_username"
              placeholder="Karabo Ontlametse Tlhopane"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="contact_group-row">
            <div className="contact__group">
              <label htmlFor="booking-contact">Cell phone</label>
              <input
                id="booking-contact"
                type="tel"
                name="contact"
                placeholder="+2782 434 5469"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                autoComplete="tel"
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="booking-email">Email</label>
              <input
                id="booking-email"
                type="email"
                name="email"
                placeholder="karabo@tlhopane.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="contact__group">
            <label htmlFor="booking-images">
              Inspiration photos (optional, up to {MAX_IMAGES})
            </label>
            <input
              id="booking-images"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif"
              multiple
              onChange={handleImageChange}
              disabled={
                images.length >= MAX_IMAGES ||
                isProcessingImages ||
                isSubmitting
              }
            />

            {isProcessingImages && (
              <span className="image-processing-message">
                Preparing your images...
              </span>
            )}

            {imageError && (
              <span className="image-error" role="alert">
                {imageError}
              </span>
            )}

            {images.length > 0 && (
              <div className="booking-image-previews">
                {images.map((image, index) => (
                  <div
                    className="booking-image-preview"
                    key={`${image.file.name}-${index}`}
                  >
                    <img
                      src={image.preview}
                      alt={`Selected inspiration ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="rmvImage"
                      aria-label={`Remove inspiration image ${index + 1}`}
                      disabled={isSubmitting || isProcessingImages}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="contact__group">
            <label htmlFor="booking-message">
              Include a message (optional)
            </label>
            <textarea
              id="booking-message"
              name="message"
              cols="30"
              rows="4"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>

          <div className="booking-submit-area">
            {submitError && (
              <p className="booking-submit-error" role="alert">
                {submitError}
              </p>
            )}

            <button
              className={`contact__bookbtn ${
                isSubmitting ? "contact__bookbtn--loading" : ""
              }`}
              type="submit"
              disabled={isSubmitting || isProcessingImages}
            >
              {isSubmitting && (
                <span className="button-spinner" aria-hidden="true"></span>
              )}
              <span>
                {isSubmitting
                  ? "Processing..."
                  : isProcessingImages
                    ? "Preparing images..."
                    : "Complete Booking"}
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;