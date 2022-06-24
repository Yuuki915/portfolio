import React from "react";
import Work from "./Work";
import H1s from "../H1s";
// import couesImg from "../imgs/work.jpg";
import worksData from "../../works.json";

import "./Works.css";

function Works() {
  const works = {
    h1: "Works",
    // title: ["COUES", "COUES", "COUES"],
    // src: [couesImg, couesImg, couesImg],
    // text: ["nflakj", "np;ajndf", "jgnpaojwne"],
    // lang: ["HTML", "CSS", "JavaScript", "React", "Sass", "PHP"],
  };
  // console.log(worksData[0].langs);
  return (
    <div className="works">
      <div className="works-container">
        <H1s h1={works.h1} />

        <div className="slide">
          {worksData.map((work) => (
            <Work
              key={work.title}
              title={work.title}
              src={work.img}
              text={work.desc}
              langs1={work.langs}
              //  langs2={works.lang}
              //  langs3={works.lang}
              //  langs4={works.lang}
            />
          ))}
        </div>

        {/* <div className="slide">
          <Work
            title={works.title[0]}
            src={works.src[0]}
            text={works.text[0]}
            langs1={works.lang[0]}
            langs2={works.lang[1]}
            langs3={works.lang[2]}
            langs4={works.lang[5]}
          />
          <Work
            title={works.title[1]}
            src={works.src[1]}
            text={works.text[1]}
          />
          <Work
            title={works.title[2]}
            src={works.src[2]}
            text={works.text[2]}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Works;
