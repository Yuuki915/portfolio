import React from "react";
import Skills from "../skills/Skills";

import "./About.css";

function About() {
  return (
    <section className="about" id="about">

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

    </section>
  );
}

export default About;
