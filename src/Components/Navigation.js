import React from "react";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
  return (
    <div className={navigationStyle.container}>
      <nav className={navigationStyle.navbar}>
        <div className={navigationStyle.link}>
        <i class="fas fa-user fa-2x"></i>
          <h3 className={navigationStyle.section}>About</h3>
        </div>
        <div className={navigationStyle.link}>
        <i class="fas fa-code fa-2x"></i>
          <h3 className={navigationStyle.section}>Skills</h3>
        </div>
        <div className={navigationStyle.link}>
        <i class="fas fa-hammer fa-2x"></i>
          <h3 className={navigationStyle.section}>Projects</h3>
        </div>
        <div className={navigationStyle.link}>
        <i class="fas fa-paper-plane fa-2x"></i>
          <h3 className={navigationStyle.section}>Contact</h3>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
