import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div
        className="bgimg-container"
        style={{
          transform: `scale(${1 + props.scalePer})`,
        }}
      ></div>
      <div className="bg-dark">
        <h1 className="siteTitle">
          <p className="hero-name">Yuki Hori</p>
          <p className="hero-sub">Front-end Developer</p>
        </h1>

        <div className="links">
          <Link to="/about">
            <div className="link">About</div>
          </Link>

          <Link to="/works">
            <div className="link">Works</div>
          </Link>
          <Link to="/skills">
            <div className="link">Skills</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
