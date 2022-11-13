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
  SiGraphql,
  SiNextdotjs,
  SiShopify,
  SiFigma,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const SkillsIcons = () => {
  return (
    <div className="skills-icons">
      <div className="icon-container">
        <SiHtml5 className="skills-icon" />
        <p className="icon-name">HTML</p>
      </div>
      <div className="icon-container">
        <SiCss3 className="skills-icon" />
        <p className="icon-name">CSS</p>
      </div>
      <div className="icon-container">
        <SiJavascript className="skills-icon" />
        <p className="icon-name">JavaScript</p>
      </div>
      <div className="icon-container">
        <SiReact className="skills-icon" />
        <p className="icon-name">React.js</p>
      </div>
      <div className="icon-container">
        <SiNextdotjs className="skills-icon" />
        <p className="icon-name">Next.js</p>
      </div>
      <div className="icon-container">
        <SiRedux className="skills-icon" />
        <p className="icon-name">Redux</p>
      </div>
      <div className="icon-container">
        <SiSass className="skills-icon" />
        <p className="icon-name">Sass</p>
      </div>
      <div className="icon-container">
        <DiNodejs className="skills-icon" />
        <p className="icon-name">Node.js</p>
      </div>
      <div className="icon-container">
        <SiPhp className="skills-icon" />
        <p className="icon-name">PHP</p>
      </div>
      <div className="icon-container">
        <SiMongodb className="skills-icon" />
        <p className="icon-name">MongoDB</p>
      </div>
      <div className="icon-container">
        <SiExpress className="skills-icon" />
        <p className="icon-name">Express</p>
      </div>
      <div className="icon-container">
        <SiTypescript className="skills-icon" />
        <p className="icon-name">TypeScript</p>
      </div>
      <div className="icon-container">
        <SiBootstrap className="skills-icon" />
        <p className="icon-name">Bootstrap</p>
      </div>
      <div className="icon-container">
        <SiPython className="skills-icon" />
        <p className="icon-name">Python</p>
      </div>
      <div className="icon-container">
        <SiMysql className="skills-icon" />
        <p className="icon-name">MySQL</p>
      </div>
      <div className="icon-container">
        <SiJava className="skills-icon" />
        <p className="icon-name">Java</p>
      </div>
      <div className="icon-container">
        <SiGraphql className="skills-icon" />
        <p className="icon-name">GraphQL</p>
      </div>
      <div className="icon-container">
        <SiShopify className="skills-icon" />
        <p className="icon-name">Shopify</p>
      </div>
      <div className="icon-container">
        <SiFigma className="skills-icon" />
        <p className="icon-name">Figma</p>
      </div>
      <div className="icon-container">
        <SiGit className="skills-icon" />
        <p className="icon-name">Git</p>
      </div>
      <div className="icon-container">
        <SiGithub className="skills-icon" />
        <p className="icon-name">GitHub</p>
      </div>
      <div className="icon-container">
        <SiHeroku className="skills-icon" />
        <p className="icon-name">Heroku</p>
      </div>
    </div>
  );
};
export default SkillsIcons;
