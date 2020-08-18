import React from "react";

import navigationStyle from "../Styles/navigation.module.css";

const Navigation = () => {
  return (
      <div className={navigationStyle.container}>
          <nav className={navigationStyle.navbar}></nav>
      </div>
  );
};

export default Navigation;
