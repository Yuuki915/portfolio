import React from "react";
import Work from "./Work";
import worksData from "../../works.json";

import "./Works.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Works() {
  return (
    <div className="works">
      <Header />
      <div className="works-container">
        <h1>Works</h1>

        <div className="slide">
          {worksData.map((work) => (
            <Work
              key={work.title}
              title={work.title}
              src={work.img}
              url={work.url}
              git={work.git}
              desc={work.desc}
              langs={work.langs}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Works;
