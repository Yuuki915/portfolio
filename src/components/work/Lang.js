import React from "react";
import "./Lang.css";

export default function Lang(props) {
  const langs = props.langs;
  return (
    <div className="langs">
      {langs.map((lang) => (
        <div className="lang" key={lang.key}>
          {lang}
        </div>
      ))}
    </div>
  );
}
