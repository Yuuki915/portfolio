import React from "react";
// import H1s from "../H1s";

import "./Skills.css";
import SkillsIcons from "./SkillsIcons";

export default function Skills() {
  // const skills = {
  //   h1: "Skills",
  // };
  return (
    <div className="skills">
      <h1>Skills</h1>
      {/* <H1s h1={skills.h1} /> */}

      <div className="icon-container">
        <SkillsIcons />
      </div>
    </div>
  );
}
