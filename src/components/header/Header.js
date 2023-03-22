import React, { useContext } from "react";
// import { useInView } from "react-intersection-observer";
import { Link, animateScroll as scroll } from "react-scroll";
import { LangToggleContext } from "../../context/langToggleContext";

import "./Header.css";

const Header = ({ isVisible }) => {
  const { langToggle, setLangToggle } = useContext(LangToggleContext);

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
        {/* <a
          href="/imgs/YukiHori.pdf"
          target="_blank"
          //  className="linktag"
        >
          <p className="header-link resume">Resume</p>
        </a> */}

        <div className="lang-toggle" onClick={() => setLangToggle(!langToggle)}>
          <p className={`lang-en ${langToggle ? "" : "chosen"}`}>EN</p>
          <p className={`lang-jp ${langToggle ? "chosen" : ""}`}>JP</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
