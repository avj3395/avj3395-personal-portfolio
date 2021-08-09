import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Akshay V J",
    text: "I am frontend developer, designing and building responsive web design and mobile apps.  Proficient in REACT, HTML and CSS.​",
    image: require("../images/avj-pic.png"),
  });
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a
                      href="https://www.facebook.com/avj3395/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/akshay-v-j-5b4b501b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/i____am___inevitable/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a
                    href="https://drive.google.com/file/d/1HLPlvz5uBR37nIAjCC_f5zsqXrrsqapL/view"
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img
                src={state.image}
                style={{ width: "450px", height: "650px" }}
                alt="man"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
