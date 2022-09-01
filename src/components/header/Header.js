import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-name" onClick={() => scroll.scrollToTop()}>
        Yuki Hori
      </div>

      <div className="header-links">
        <p className="header-link">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </p>
        <p className="header-link">
          <Link to="works" smooth={true} duration={500}>
            Works
          </Link>
        </p>
        <p className="header-link">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}
