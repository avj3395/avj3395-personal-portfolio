import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Akshay V J",
    text: "Iam frontend developer, designing and building responsive web design and mobile apps.  Proficient in REACT, HTML and CSS.​",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.facebook.com/avj3395/">
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/akshay-v-j-5b4b501b5/">
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/i____am___inevitable/">
                      <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
