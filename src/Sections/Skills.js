import React, { useState } from "react";

import skillsStyle from "../Styles/skills.module.css";

const FRONTEND = [
  {
    name: "HTML5",
    img: "html-5.svg",
  },
  {
    name: "CSS3",
    img: "css.svg",
  },
  {
    name: "JavaScript",
    img: "js.svg",
  },
  {
    name: "Gatsby",
    img: "gatsby.svg",
  },
  {
    name: "React",
    img: "react.svg",
  },
  {
    name: "Redux",
    img: "redux.svg",
  },
  {
    name: "MaterialUI",
    img: "mui.svg",
  },
];

const BACKEND = [
  {
    name: "Node",
    img: "node.png",
  },
  {
    name: "Express",
    img: "express.png",
  },
  {
    name: "MySql",
    img: "sql.svg",
  },
  {
    name: "MongoDB",
    img: "mongo.svg",
  },
];

const OTHER = [
  {
    name: "Git",
    img: "git.svg",
  },
  {
    name: "Github",
    img: "github2.svg",
  },
  {
    name: "NPM",
    img: "npm.svg",
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    window.scrollY > 1600 && setIsVisible(true);
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <section id="skills" className={skillsStyle.skills}>
      <h1 className={isVisible ? skillsStyle.title : skillsStyle.hide}>
        Front-End
      </h1>
      <div className={isVisible ? skillsStyle.container : skillsStyle.hide}>
        {FRONTEND.map(item => (
          <div className={skillsStyle.item}>
            <img src={item.img} />
          </div>
        ))}
      </div>
      <h1 className={isVisible ? skillsStyle.title : skillsStyle.hide}>
        Back-End
      </h1>
      <div className={isVisible ? skillsStyle.container : skillsStyle.hide}>
        {BACKEND.map(item => (
          <div className={skillsStyle.item}>
            <img src={item.img} />
          </div>
        ))}
      </div>
      <h1 className={isVisible ? skillsStyle.title : skillsStyle.hide}>
        Other
      </h1>
      <div className={isVisible ? skillsStyle.container : skillsStyle.hide}>
        {OTHER.map(item => (
          <div className={skillsStyle.item}>
            <img src={item.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
