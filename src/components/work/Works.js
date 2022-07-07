import React from "react";
import Work from "./Work";
import worksData from "../../works.json";

import "./Works.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import sharelogImg from "../imgs/sharelog.png";
import couesImg from "../imgs/coueslogo.png";
import totoroImg from "../imgs/totoroquiz.png";

function Works() {
  const data = [
    {
      title: "Sharelog",
      url: "https://sharelog.herokuapp.com/",
      git: "https://github.com/Yuuki915/sharelog",
      img: sharelogImg,
      langs: ["NodeJs", "Express", "MongoDB", "Mongoose", "ejs"],
      desc: "After register or login, you can share your favorite places or shops and see other peaple's favorite.",
    },
    {
      title: "COUES",
      url: "http://coeustechs.com/",
      git: "",
      img: couesImg,
      langs: ["HTML", "CSS", "JavaScript", "PHP"],
      desc: "A website for sports-related product company that is offering a training set of devices that can assist coaches or even replace them at many aspects when starting to learn to when advancing your game.",
    },
    {
      title: "Totoro Quiz",
      url: "https://ghibliquiz.netlify.app",
      git: "https://github.com/Yuuki915/wmad/tree/main/WebDev-ll/0408_midproj/src",
      img: totoroImg,
      langs: ["HTML", "CSS", "JavaScript", "PHP"],
      desc: "Check your knowledge of Totoro!",
    },
  ];

  return (
    <div className="works">
      <Header />
      <div className="works-container">
        <h1>Works</h1>

        <div className="slide">
          {data.map((work) => (
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
