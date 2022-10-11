import React from "react";
import Lang from "./Lang";
import "./Work.css";

const Work = ({ title, src, langs, desc, url, git }) => {
  return (
    <div className="work">
      <div className="work-container">
        <div className="img-and-sitename">
          <h2 className="sitetitle">{title}</h2>
          <div className="workimg-div">
            <img className="workimg" src={src} alt="" />
          </div>
        </div>

        <div className="work-discription">
          <Lang langs={langs} />
          <p className="text-in-work">{desc}</p>
        </div>
      </div>
      <div className="jump-to-pages">
        <a href={url}>
          <div className="visit-page">Visit</div>
        </a>
        <a href={git}>
          <div className="view-code">Code</div>
        </a>
      </div>
    </div>
  );
};

export default Work;
