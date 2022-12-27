import React from "react";
// import { useInView } from "react-intersection-observer";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Header.css";

const Header = ({ isVisible }) => {
  // const [ref, inView] = useInView({
  //   rootMargin: "0px 0px -100px",
  // });
  return (
    <div
      // ref={ref}
      className={`header ${isVisible && `visivle`}`}
    >
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
        <a
          href="/imgs/YukiHori.pdf"
          target="_blank"
          //  className="linktag"
        >
          <p className="header-link resume">Resume</p>
        </a>
      </div>
    </div>
  );
};
export default Header;
