import React from "react";
import "./TopAnimation.css";
import sunflower from "../imgs/sunflower.jpg";
import columUmb from "../imgs/columUmb.jpg";
import townview from "../imgs/townview.jpg";

export default function TopAnimation() {
  //   ----- first
  const pros1 = "Motivated";
  const pros1Arr = [];
  const pros1Alph = pros1.split("");

  pros1Alph.map((item, index) => {
    if (item === " ") {
      return pros1Arr.push(
        <span key={index} className={`delay${index + 1}`}>
          &nbsp;
        </span>
      );
    }
    return pros1Arr.push(
      <span
        key={index}
        className={`delay${index + 1}`}
        style={{
          animationDelay: `${index * 0.2}s`,
        }}
      >
        {item}
      </span>
    );
  });

  //   ----- second
  const pros2 = "Challenging";
  const pros2Arr = [];
  const pros2Alph = pros2.split("");
  pros2Alph.map((item, index) => {
    if (item === " ") {
      return pros2Arr.push(
        <span key={index} className={`delay${index + 1}`}>
          &nbsp;
        </span>
      );
    }
    return pros2Arr.push(
      <span
        key={index}
        className={`delay${index + 1}`}
        style={{
          animationDelay: `${index * 0.2 + 3}s`,
        }}
      >
        {item}
      </span>
    );
  });

  //   ----- third
  const animationTextName = "YUKI HORI";
  const nameArr = [];
  const nameAlph = animationTextName.split("");
  nameAlph.map((item, index) => {
    if (item === " ") {
      return nameArr.push(
        <span key={index} className={`delay${index + 1}`}>
          &nbsp;
        </span>
      );
    }
    return nameArr.push(
      <span
        key={index}
        className={`delay${index + 1}`}
        style={{ animationDelay: `${index * 0.5 + 6}s` }}
      >
        {item}
      </span>
    );
  });
  const animationTextPosi = "Frontend Developer";
  const posiArr = [];
  const posiAlph = animationTextPosi.split("");
  posiAlph.map((item, index) => {
    if (item === " ") {
      return posiArr.push(
        <span key={index} className={`delay${index + 1}`}>
          &nbsp;
        </span>
      );
    }
    return posiArr.push(
      <span
        key={index}
        className={`delay${index + 1}`}
        style={{
          animationDelay: `${index * 0.3 + 6}s`,
          transform: `translate3d(
              ${index + (Math.random() * 120 - 100)}rem,
              ${index + Math.random() * 60}rem,
              ${index + (Math.random() * 120 - 60)}rem)
              `,
        }}
      >
        {item}
      </span>
    );
  });

  return (
    <div className="ani-wrapper" id="hero">
      <div className="top-first">
        <div className="img-div">
          <img src={columUmb} alt="" className="img" />
        </div>
        <div className="texts-on-img">
          <div className="text-pros1">{pros1Arr.map((item) => item)}</div>
        </div>
      </div>

      <div className="top-second">
        <div className="img-div">
          <img src={townview} alt="" className="img" />
        </div>
        <div className="texts-on-img">
          <div className="text-pros2">{pros2Arr.map((item) => item)}</div>
        </div>
      </div>

      <div className="top-third">
        <div className="img-div">
          <img src={sunflower} alt="" className="img" />
        </div>
        <div className="texts-on-img">
          <div className="text-name">{nameArr.map((item) => item)}</div>
          <div className="text-posi">{posiArr.map((item) => item)}</div>
        </div>
      </div>
    </div>
  );
}
