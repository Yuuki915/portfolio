import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.css";

export default function Header({ isVisible }) {
  return (
    <div className={isVisible ? "header visivle" : "header"}>
      <div className="header-name" onClick={() => scroll.scrollToTop()}>
        Yuki Hori
      </div>

      <div className="header-links">
        <Link to="about" smooth={true} duration={500} className="linktag">
          <p className="header-link">About</p>
        </Link>
        <Link to="works" smooth={true} duration={500} className="linktag">
          <p className="header-link">Works</p>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="linktag">
          <p className="header-link">Contact</p>
        </Link>
      </div>
    </div>
  );
}
