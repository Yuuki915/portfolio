import React from "react";
import { useInView } from "react-intersection-observer";
import Skills from "../skills/Skills";

import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="title-in-about">About Me &amp; My Skills</div>
        <div className="about-texts">
          <h1 ref={ref} className={`about-h1 ${inView && `about-h1-show`}`}>
            About
          </h1>

          <div ref={ref} className={`text-body ${inView && `texts-show`}`}>
            <h2>Hi, I am Yuki Hori.</h2>
            <p>
              A web developer with extensive background in education and a
              hardworker who is motivated, challenging and loves web development
              with web design.
            </p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
