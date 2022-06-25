import React from "react";
import Work from "./Work";
import H1s from "../H1s";
// import couesImg from "../imgs/work.jpg";
import worksData from "../../works.json";

import "./Works.css";

function Works() {
  const works = {
    h1: "Works",
  };

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
              url={work.url}
              desc={work.desc}
              langs={work.langs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
