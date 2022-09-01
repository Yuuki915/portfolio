import React from "react";
import Footer from "../footer/Footer";
// import H1s from "../H1s";
import Header from "../header/Header";
import Skills from "../skills/Skills";

import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <Header />

      <div className="title-in-about">About Me &amp; My Skills</div>

      <div className="about-container">
        <div className="about-texts">
          <h1>About</h1>

          <div className="text-body">
            <h2>Hi, I am Yuki Hori.</h2>
            <p>
              A front-end developer with extensive background in education and
              who loves web development with web design.
            </p>
          </div>
        </div>
      </div>

      <Skills />

      {/* <Footer /> */}
    </div>
  );
}

export default About;
