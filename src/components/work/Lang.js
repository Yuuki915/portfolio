import React from "react";
import "./Lang.css";

const Lang = ({ langs }) => {
  return (
    <div className="langs">
      {langs.map((lang, key) => (
        <div className="lang" key={key}>
          {lang}
        </div>
      ))}
    </div>
  );
};
export default Lang;
