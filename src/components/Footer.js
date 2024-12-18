import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaBehance, FaInstagram, FaLinkedin, FaTypo3 } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="footer-sub">
          <p className="footer-sub-heading">
            Join the Adventure newsletter to recieve our best vacation deals.
          </p>
          <p className="footer-sub-text">You can unsubscribe at any time.</p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                className="footer-input"
                placeholder="Your Email Address"
              />
              <button className="btn-dark">Subscribe</button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2>About Us</h2>
              <Link to="/signup">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className="footer-links-items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencers</Link>
            </div>
            <div className="footer-links-items">
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Linked In</Link>
              <Link to="/">Behance</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-logo">
              <Link to="/" className="footer-logo">
                TRAVEL <FaTypo3 />
              </Link>
            </div>
            <small className="website-rights">TRAVEL © 2024</small>
            <div className="social-icons">
              <Link
                to="/"
                target="_blank"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="LinkedIn"
                className="social-icon-link linkedin"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Behance"
                className="social-icon-link behance"
              >
                <FaBehance />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
