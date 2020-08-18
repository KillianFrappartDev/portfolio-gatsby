import React from "react";

import headerStyle from "../Styles/header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.section}>
      <div className={headerStyle.filter}>
        <div className={headerStyle.container}>
          <h1 className={headerStyle.title}>Full-Stack Developer</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
