import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
// import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdArrowForwardIos } from "react-icons/md";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      {/* <div className="hero1">
        <Link to={"/about"} className="hero-link">
          About
          <MdArrowForwardIos className="hover-icon" />
          <MdArrowForwardIos className="hover-icon2" />
          <MdArrowForwardIos className="hover-icon3" />
        </Link>
      </div>

      <div className="hero2">
        <Link to={"/works"} className="hero-link">
          Works
          <MdArrowForwardIos className="hover-icon" />
          <MdArrowForwardIos className="hover-icon2" />
          <MdArrowForwardIos className="hover-icon3" />
        </Link>
      </div> */}

      <div className="hero3">
        <div className="hero-link hero-contact-container">
          <div className="hero-contact-info">
            <div>Reach Me</div>
            <div className="hero-contact-icons">
              <a href="tel://:16044451991">
                <BsFillTelephoneFill className="hero-contact-icon" />
              </a>
              <a href="mailto:aso091335@gmail.com">
                <SiGmail className="hero-contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/yuki-hori-85a51421b/">
                <SiLinkedin className="hero-contact-icon" />
              </a>
              <a href="https://github.com/Yuuki915">
                <SiGithub className="hero-contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero4">
        <div className="hero-welcome">
          Welcome <br />
          to <br />
          Yuki's Website
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
