import React from "react";
import "../styles/article.css";

const Contact = () => {
  return (
    <div className="article">
      <h1>Contact Us</h1>


      <p>
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Reach out to us through any of the following methods:
      </p>

      <div className="contact-methods">
        <div className="contact-method">
          <h3 className="contacth3">Email</h3>
          <p className="contactp1">tejasjagadale25@gmail.com</p>
          <p className="contactp1">For general inquiries and support</p>
        </div>

        <div className="contact-method">
          <h3 className="contacth3">Social Media</h3>
          <div className="social-media-links">
            <a
              href="https://x.com/TejasJagad83787?t=QDGZyTTCA2LV_Ne_ZlwDbQ&s=08 "
              className="social-icon twitter"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://youtube.com/@tejasjagdale?si=HHDUbrp5A3J6xoSR"
              className="social-icon youtube"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/tejas__verse?igsh=MWFzaXNleTdkcnc2bA=="
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="contactp1">DM us for quick responses</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
