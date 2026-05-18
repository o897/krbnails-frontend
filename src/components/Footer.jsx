import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTiktok,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="nail-footer">
                    <div className="footer_header">
                        <div className="footer-top">
                            NAIL GALLERY
                        </div>
                        <div className="footer-title brand">
                            Tlami's
                        </div>
                        <p className="footer-brand-desc">Precision nail artistry crafted to elevate your everyday elegance</p>
                    </div>
                    <div className="footer_header">
                        <div className="footer-top">
                            Find us
                        </div>
                        <div className="footer-title">
                            Location
                        </div>
                        <p>263 Odinburg</p>
                    </div>
                    <div className="footer_header">
                        <div className="footer-top">
                            Get in touch
                        </div>
                        <div className="footer-title">
                            Phone
                        </div>
                        <p>+27 68 032 7197</p>
                    </div>
                    <div className="footer_header">
                        <div className="footer-top">
                            OPENING HOURS
                        </div>
                        <div className="footer-title">
                            Timetable
                        </div>
                        <div className="footer_table">
                            <div className="row">
                                <p>Sunday</p>
                                <p>Closed</p>
                            </div>
                            <div className="row">
                                <p>Mon-Fri</p>
                                <p>10:00-18:00</p>
                            </div>
                            <div className="row">
                                <p>Saturday</p>
                                <p>10:00-14:00</p>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    );
}