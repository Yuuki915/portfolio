import React from "react";
import "./Lang.css";

export default function Lang(props) {
  const langs = props.langs1;
  // console.log(langs);
  return (
    <div className="langs">
      {langs.map((lang) => (
        <div className="lang">{lang}</div>
      ))}

      {/* <div className="lang">
        {props.langs1}
        {props.langs2}
        {props.langs3}
        {props.langs4}
        {props.langs5}
      </div> */}
    </div>
  );
}
