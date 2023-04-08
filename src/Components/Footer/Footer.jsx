import React from "react";

import { Link } from "react-router-dom";

import { SlPaperPlane } from "react-icons/sl";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

import payments from "../../assets/images/icons_payment 1.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="left">
                        <SlPaperPlane />
                        <span>Sign Up For Newsletter</span>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Your Email." />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <div className="container">
                    <div className="item">
                        <h2 className="title">Contact</h2>
                        <address>
                            Demo Store <br />
                            No. 0000 Hay Salam, Salé, 00000 <br />
                            Morocco
                        </address>
                        <Link to="tel:+212 601020304">+212 6010203004</Link>
                        <Link to="mailto:achrafeddiba@gmail.com">
                            achrafeddiba@gmail.com
                        </Link>
                        <div className="social-icons">
                            <Link to="/">
                                <FaTwitter />
                            </Link>
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                            <Link to="/">
                                <FaPinterest />
                            </Link>
                            <Link to="/">
                                <FaInstagram />
                            </Link>
                            <Link to="/">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="title">Information</h2>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Refund Policy</Link>
                        <Link to="/">Shipping Policy</Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Blogs</Link>
                    </div>
                    <div className="item">
                        <h2 className="title">Account</h2>
                        <Link to="/">Search</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Size Chart</Link>
                    </div>
                    <div className="item">
                        <h2 className="title">Quick Links</h2>
                        <Link to="/">Accessories</Link>
                        <Link to="/">Laptops</Link>
                        <Link to="/">Headphones</Link>
                        <Link to="/">Smart Watches</Link>
                        <Link to="/">Tablets</Link>
                    </div>
                    <div className="item">
                        <h2 className="title">Our App</h2>
                        <p>
                            Download our app and get extra 15% Discount on Your
                            first order.
                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="left">
                        &copy; {new Date().getFullYear()} EddStore Powered by{" "}
                        <Link to="https://achrafeddiba.me">Achraf Eddiba</Link>
                    </div>
                    <div className="right">
                        <img src={payments} alt="payments" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
