import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { LangToggleContext } from "../../context/langToggleContext";
import Skills from "../skills/Skills";

import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });

  const { langToggle } = useContext(LangToggleContext);

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

            {langToggle ? (
              <p>
                福岡出身のフロントエンドデベロッパー。
                <br />
                React.jsを使用したフロントエンド開発が得意。Node.js
                などのバックエンドスタックやGraphQLにも精通。
                常に協調的なコミュニケーションを取ることを意識しており、学習と成長に情熱を持っています。
              </p>
            ) : (
              <p>
                Frontend developer who is proficient in Frontend development
                with JavaScript and React but also familiar with backend stacks
                such as Node.js, and also has experienced working with GraphQL
                and APIs.
                <br />I always work with a collaborative communication and have
                a passion for learning and growth.
                {/* <br />I am excellent in working in teams and enjoy collaboration
              with peers; Also, I am confident in the development of large-scale
              front-end projects such as e-commerce sites and large-scale apps.
            I will do my best to deliver pleasing and modern interfaces. */}
              </p>
            )}

            <p></p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default About;
