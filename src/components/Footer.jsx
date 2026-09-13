
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer id="contact">
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
                        <p>262 Odinburg Gardens</p>
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
                                <p className="footer-th">Sunday</p>
                                <p className="footer-tb">Closed</p>
                            </div>
                            <div className="row">
                                <p className="footer-th">Mon-Fri</p>
                                <p className="footer-tb">10:00-18:00</p>
                            </div>
                            <div className="row">
                                <p className="footer-th">Saturday</p>
                                <p className="footer-tb ls">10:00-14:00</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="nail-footer__copy">
                        © {new Date().getFullYear()} Tlami's Nail Gallery · All rights reserved
                    </p>
                    <div className="footer-socials">
                        <a href="https://www.tiktok.com/@tlamis_nail_gallery03?_r=1&_t=ZS-963XVhhkLZd"><FaTiktok className="footer-icon" /></a>
                        <FaYoutube className="footer-icon" />
                        <a href="https://wa.me/c/27693205227"> <FaWhatsapp className="footer-icon" /> </a>
                        <a href="https://www.instagram.com/tlamis_nail_gallery/">  <FaInstagram className="footer-icon" /> </a>
                    </div>
                </div>

            </footer>
        </>
    );
}