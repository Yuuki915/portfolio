import React from "react";
import Work from "./Work";
import worksData from "../../works.json";
import { useInView } from "react-intersection-observer";
import "./Works.css";

const Works = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });
  return (
    <section className="works" id="works">
      <div className="works-container">
        <h1 ref={ref} className={`works-h1 ${inView && `works-h1-show`}`}>
          Works
        </h1>

        <div className="slide">
          {worksData.map((work) => (
            <Work
              key={work.title}
              title={work.title}
              src={work.img}
              url={work.url}
              git={work.git}
              desc={work.desc}
              descJP={work.descJP}
              memo={work.memo}
              langs={work.langs}
              point={work.point}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
