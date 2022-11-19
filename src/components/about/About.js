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
              I am a Software Developer with extensive project experience and a passion
              for learning and growth. A hard worker who has strong
              communication skills to develop relationships with clients and
              coworkers.
              <br />I am excellent in working in teams and enjoy collaboration
              with peers; Also, I am confident in the development of large-scale
              front-end projects such as e-commerce sites and large-scale apps.
              I will do my best to deliver pleasing and modern interfaces.
            </p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
