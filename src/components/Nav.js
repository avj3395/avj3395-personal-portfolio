import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about-us">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
