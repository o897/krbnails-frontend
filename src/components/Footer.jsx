
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


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
                        <p>263 Odinburg Gardens</p>
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
                    <div className="footer_header bt">
                        <div className="footer-top">
                            OPENING HOURS
                        </div>
                        <div className="footer-title">
                            Timetable
                        </div>
                        <div className="footer_table">
                            <div className="row">
                                <div className="footer-th">Sunday</div>
                                <div className="footer-tb">Closed</div>
                            </div>
                            <div className="row">
                                <div className="footer-th">Mon-Fri</div>
                                <div className="footer-tb">10:00-18:00</div>
                            </div>
                            <div className="row">
                                <div className="footer-th">Saturday</div>
                                <div className="footer-tb ls">10:00-14:00</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="nail-footer__copy">
                        © {new Date().getFullYear()} Tlami's Nail Gallery · All rights reserved
                    </p>
                    <div className="footer-socials">

                        <FaTiktok className="footer-icon" />
                        <FaYoutube className="footer-icon" />
                        <FaWhatsapp className="footer-icon" />
                        <FaInstagram className="footer-icon" />

                    </div>
                </div>

            </footer>
        </>
    );
}