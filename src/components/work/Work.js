import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { LangToggleContext } from "../../context/langToggleContext";
import Lang from "./Lang";
import "./Work.css";

const Work = ({ title, src, langs, desc, descJP, memo, url, git, point }) => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });
  const { langToggle } = useContext(LangToggleContext);

  return (
    <div ref={ref} className={`work ${inView && `work-show`}`}>
      <div className="work-wrapper">
        <h2 className="sitetitle">{title}</h2>
        <div className="work-container">
          <div className="img-and-sitename">
            <div className="workimg-div">
              <img className="workimg" src={src} alt="" />
            </div>
            {point !== undefined ? <div className="point">{point}</div> : <></>}
          </div>

          <div className="work-discription">
            <Lang langs={langs} />
            <div className="text-in-work">
              {langToggle ? <p>{descJP}</p> : <p>{desc}</p>}
              {memo === "" ? <></> : <p className="memo">{memo}</p>}
            </div>
          </div>
        </div>
        <div className="jump-to-pages">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="visit-page">Website</div>
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer">
            <div className="view-code">Code</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
