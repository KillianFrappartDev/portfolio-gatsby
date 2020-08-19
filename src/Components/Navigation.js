import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = () => {
    const current = window.scrollY;

    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop;

    if (current < 100) {
      setActive("");
    }

    if (current > 400 && current < skills - 200) {
      setActive("about");
    }

    if (current > skills - 200) {
      setActive("skills");
    }
  };

  const clickHandler = section => {
    const target = document.getElementById(section).offsetTop;
    window.scrollTo(0, target);
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
        <nav className={navigationStyle.navbar}>
          <div
            onClick={clickHandler.bind(null, "about")}
            className={
              active === "about"
                ? navigationStyle.linkactive
                : navigationStyle.link
            }
          >
            <i className="fas fa-user fa-2x"></i>
            <h3 className={navigationStyle.section}>About</h3>
          </div>
          <div
            onClick={clickHandler.bind(null, "skills")}
            className={
              active === "skills"
                ? navigationStyle.linkactive
                : navigationStyle.link
            }
          >
            <i className="fas fa-code fa-2x"></i>
            <h3 className={navigationStyle.section}>Skills</h3>
          </div>
          <div
            className={
              active === "projects"
                ? navigationStyle.linkactive
                : navigationStyle.link
            }
          >
            <i className="fas fa-hammer fa-2x"></i>
            <h3 className={navigationStyle.section}>Projects</h3>
          </div>
          <div
            className={
              active === "contact"
                ? navigationStyle.linkactive
                : navigationStyle.link
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
