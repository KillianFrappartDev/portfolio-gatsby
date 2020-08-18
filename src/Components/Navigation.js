import React, { useState } from "react";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScroll = () => {
        console.log(window.scrollY);
        window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
    }

    window.addEventListener("scroll", checkScroll);

  return (
    <div className={navigationStyle.container}>
      <nav className={isScrolled ? navigationStyle.navblack : navigationStyle.navbar}>
        <a href="#about" className={isScrolled ? navigationStyle.linkblack : navigationStyle.link}>
        <i class="fas fa-user fa-2x"></i>
          <h3  className={navigationStyle.section}>About</h3>
        </a>
        <div className={isScrolled ? navigationStyle.linkblack : navigationStyle.link}>
        <i class="fas fa-code fa-2x"></i>
          <h3 className={navigationStyle.section}>Skills</h3>
        </div>
        <div className={isScrolled ? navigationStyle.linkblack : navigationStyle.link}>
        <i class="fas fa-hammer fa-2x"></i>
          <h3 className={navigationStyle.section}>Projects</h3>
        </div>
        <div className={isScrolled ? navigationStyle.linkblack : navigationStyle.link}>
        <i class="fas fa-paper-plane fa-2x"></i>
          <h3 className={navigationStyle.section}>Contact</h3>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
