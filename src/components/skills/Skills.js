import React from "react";
import { useInView } from "react-intersection-observer";

import "./Skills.css";
import SkillsIcons from "./SkillsIcons";

const Skills = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px -100px",
  });
  return (
    <div className="skills">
      <h1 ref={ref} className={`skills-h1 ${inView && `skills-h1-show`}`}>
        Skills
      </h1>

      <SkillsIcons />
    </div>
  );
};
export default Skills;
