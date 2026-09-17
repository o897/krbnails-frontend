import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCreditCard,
  FaExclamation,
  FaQrcode,
  FaRegClock,
  FaRegUser,
  FaUniversity,
} from "react-icons/fa";

const PAYMENT_NUMBER = "+27 (69) 320 5227";

function Confirmation() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-decoration confirmation-decoration--top" />
      <div className="confirmation-leaves confirmation-leaves--left" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <section className="confirmation-shell" aria-labelledby="confirmation-title">
        <header className="confirmation-brand">
          <div className="confirmation-brand__line" />
          <div>
            <p>TLAMI’S NAIL GALLERY</p>
            <span>BEAUTY IN EVERY DETAIL</span>
          </div>
          <div className="confirmation-brand__line" />
        </header>

        <div className="confirmation-success" aria-hidden="true">
          <FaCheck />
        </div>

        <h1 id="confirmation-title">Your booking<br />is confirmed</h1>

        <aside className="time-notice">
          <div className="time-notice__icon" aria-hidden="true">
            <FaRegClock />
          </div>
          <div>
            <h2>Time sensitive</h2>
            <p>
              To secure your appointment, please complete payment within
              <strong> 15 minutes.</strong>
            </p>
          </div>
        </aside>

        <section className="payment-card" aria-labelledby="payment-heading">
          <h2 id="payment-heading">Payment details</h2>

          <div className="payment-row">
            <div className="payment-row__icon"><FaUniversity /></div>
            <div>
              <span>Bank</span>
              <strong>Capitec</strong>
            </div>
          </div>

          <div className="payment-row">
            <div className="payment-row__icon"><FaCreditCard /></div>
            <div>
              <span>Account number</span>
              <strong>1875908909</strong>
            </div>
          </div>

          <div className="payment-row">
            <div className="payment-row__icon"><FaRegUser /></div>
            <div>
              <span>Reference</span>
              <strong>Name and surname</strong>
            </div>
          </div>

          <div className="payshap">
            <h3>PayShap &amp; proof of payment</h3>
            <div className="payshap__content">
              <div className="payment-row__icon"><FaQrcode /></div>
              <div>
                <a href="tel:+27693205227">{PAYMENT_NUMBER}</a>
                <p>
                  Use this number as your PayShap ID and send your proof of
                  payment to the same number.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="cash-warning" role="alert">
          <span><FaExclamation /></span>
          <strong>Cash is not allowed</strong>
        </div>

        <Link className="confirmation-home" to="/">
          <span>Back to home</span>
          <FaArrowRight />
        </Link>
        <a
          className="confirmation-help"
          href="https://wa.me/27693205227"
          target="_blank"
          rel="noreferrer"
        >
          Need help? <span>Contact us</span>
        </a>

      </section>

      <div className="confirmation-decoration confirmation-decoration--bottom" />
    </main>
  );
}

export default Confirmation;
