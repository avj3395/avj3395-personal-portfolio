import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <a href="/">
                  Akshay<span>.</span>V<span>.</span>J
                </a>

                <p>
                  © Copyright 2021-2022, All rights reserved. Powered by the
                  Akshay V J
                </p>
              </div>
              <ul className="contactCircles">
                <li>
                  <a
                    href="https://www.facebook.com/avj3395/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="contactIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akshay-v-j-5b4b501b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="contactIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/i____am___inevitable/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="contactIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
