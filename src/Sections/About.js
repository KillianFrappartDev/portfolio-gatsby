import React, { useState } from "react";

import aboutStyle from "../Styles/about.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    window.scrollY > 500 && setIsVisible(true);
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <section id="about" className={aboutStyle.about}>
      <div className={isVisible ? aboutStyle.content : aboutStyle.hide}>
        <img className={aboutStyle.image} src="Killian.jpg" />
        <p>
          <span className={aboutStyle.open}>{"{"}</span>My name is Killian, I am
          24 years old and I am a self taught Full-Stack Web developer.
        </p>
        <p>
          I have been teaching water sports around the world for years before I
          fell in love with coding.
        </p>
        <p>
          Born in Belgium, my native language is french but I am fluent in
          english and I am currently learning dutch.
        </p>
        <p>I don't know everything but there is nothing I can't learn.</p>
        <p>
          Click <span className={aboutStyle.link}>here</span> and have a look to
          my resume.<span className={aboutStyle.close}>{"}"}</span>
        </p>
      </div>
    </section>
  );
};

export default About;
