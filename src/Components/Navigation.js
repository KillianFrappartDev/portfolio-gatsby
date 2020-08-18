import React, { useState } from "react";
import { Helmet } from "react-helmet";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [active, setActive] = useState("");

  const checkScroll = () => {
    const current = window.scrollY;

    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop;

    if (current < 100) {
      setIsScrolled(false);
      setActive("");
      return;
    }

    if (current > 100) {
      setIsScrolled(true);
    }

    if (current > 400 && current < skills - 200) {
      setActive("about");
    }

    if (current > skills - 200) {
      setActive("skills");
    }
  };

  window.addEventListener("scroll", checkScroll);

  const clickHandler = section => {
    const target = document.getElementById(section).offsetTop;
    window.scrollTo(0, target);
    setActive(section);
  };

  const getClass = name => {
    if (active === name) {
      return navigationStyle.linkactive;
    } else {
      return navigationStyle.linkblack;
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className={navigationStyle.container}>
        <nav
          className={
            isScrolled ? navigationStyle.navblack : navigationStyle.navbar
          }
        >
          <div
            onClick={clickHandler.bind(null, "about")}
            className={
              //   isScrolled ? navigationStyle.linkblack : navigationStyle.link
              // isScrolled && active === "about" ? navigationStyle.linkactive : navigationStyle.link
              isScrolled ? getClass("about") : navigationStyle.link
            }
          >
            <i className="fas fa-user fa-2x"></i>
            <h3 className={navigationStyle.section}>About</h3>
          </div>
          <div
            onClick={clickHandler.bind(null, "skills")}
            className={
              //   isScrolled ? navigationStyle.linkblack : navigationStyle.link
              // isScrolled && active === "skills" ? navigationStyle.linkactive : navigationStyle.link
              isScrolled ? getClass("skills") : navigationStyle.link
            }
          >
            <i className="fas fa-code fa-2x"></i>
            <h3 className={navigationStyle.section}>Skills</h3>
          </div>
          <div
            className={
              isScrolled ? navigationStyle.linkblack : navigationStyle.link
            }
          >
            <i className="fas fa-hammer fa-2x"></i>
            <h3 className={navigationStyle.section}>Projects</h3>
          </div>
          <div
            className={
              isScrolled ? navigationStyle.linkblack : navigationStyle.link
            }
          >
            <i className="fas fa-paper-plane fa-2x"></i>
            <h3 className={navigationStyle.section}>Contact</h3>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
