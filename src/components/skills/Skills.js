import React from "react";

import "./Skills.css";
import SkillsIcons from "./SkillsIcons";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="icon-container">
        <SkillsIcons />
      </div>
    </div>
  );
}
