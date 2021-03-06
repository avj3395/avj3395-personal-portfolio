import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = useState(false);
  // const [scrollPosition, setPosition] = useState(0);
  // const [navClass, setNavClass] = useState("navbar");
  // // console.log("===", scrollPosition);

  // useLayoutEffect(() => {
  //   function updatePosition() {
  //     setPosition(window.pageYOffset);
  //   }
  //   window.addEventListener("scroll", updatePosition);
  //   updatePosition();
  //   return () => window.removeEventListener("scroll", updatePosition);
  // }, []);

  // useEffect(() => {
  //   if (scrollPosition >= 300) {
  //     setNavClass("navbar_scroll");
  //   } else {
  //     setNavClass("navbar");
  //   }
  // }, [scrollPosition]);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <a href="#header">
              Akshay<span>.</span>V<span>.</span>J
            </a>
          </ul>

          <ul className="navbar__right">
            <li>
              <a href="#header">Home</a>
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
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {state && (
            <ul className="mobile_view">
              <li>
                <a href="#header" onClick={() => setState(!state)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setState(!state)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us" onClick={() => setState(!state)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setState(!state)}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setState(!state)}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        {state ? <FaRegWindowClose /> : <FaAlignJustify />}
      </div>
    </nav>
  );
};

export default Nav;
