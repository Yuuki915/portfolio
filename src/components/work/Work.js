import React from "react";
import Lang from "./Lang";
import "./Work.css";
// import img from "../imgs/coues.png";
function Work(props) {
  return (
    <div className="work">
      <div className="work-container">
        <div className="img-and-sitename">
          <div className="workimg-div">
            <img className="workimg" src={props.src} alt="" />
            <h2 className="sitetitle">{props.title}</h2>
            <div className="jump-to-pages">
              <a href={props.url}>
                <div className="visit-page">Visit</div>
              </a>
              <a href="/">
                <div className="view-code">Code</div>
              </a>
            </div>
          </div>
        </div>

        <div className="work-discription">
          <Lang langs={props.langs} />
          <p className="text-in-work">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
