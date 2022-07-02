import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

export default function SkillsIcons() {
  return (
    <div className="skills-icons">
      <SiHtml5 className="skills-icon" />
      <SiCss3 className="skills-icon" />
      <SiJavascript className="skills-icon" />
      <SiReact className="skills-icon" />
      <SiRedux className="skills-icon" />
      <SiSass className="skills-icon" />
      <DiNodejs className="skills-icon" />
      <SiPhp className="skills-icon" />
      <SiMongodb className="skills-icon" />
      <SiExpress className="skills-icon" />
      <SiTypescript className="skills-icon" />
      <SiBootstrap className="skills-icon" />
      <SiPython className="skills-icon" />
      <SiMysql className="skills-icon" />
      <SiJava className="skills-icon" />
      <SiGit className="skills-icon" />
      <SiGithub className="skills-icon" />
      <SiHeroku className="skills-icon" />
    </div>
  );
}
