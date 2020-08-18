import React, { useState } from "react";
import { Helmet } from "react-helmet";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    console.log(window.scrollY);
    window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className={navigationStyle.container}>
        <nav
          className={
            isScrolled ? navigationStyle.navblack : navigationStyle.navbar
          }
        >
          <a
            href="#about"
            className={
              isScrolled ? navigationStyle.linkblack : navigationStyle.link
            }
          >
            <i className="fas fa-user fa-2x"></i>
            <h3 className={navigationStyle.section}>About</h3>
          </a>
          <div
            className={
              isScrolled ? navigationStyle.linkblack : navigationStyle.link
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
