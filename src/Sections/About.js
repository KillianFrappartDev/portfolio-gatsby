import React from "react";

import aboutStyle from "../Styles/about.module.css";

const About = () => {
  return (
    <section id="about" className={aboutStyle.about}>
      <div className={aboutStyle.content}>
        <p>
          My name is Killian, I am 24 years old and I am a self taught
          Full-Stack Web developer.
        </p>
        <p>
          I have been teaching water sports around the world for years before I
          fell in love with coding.
        </p>
        <p>
          Born in Belgium, my native language is french but I learned english
          when I was working in Australia a couple years ago.
        </p>
        <p>
          I don't know evrything but there is nothing I can't learn. My interest
          for development has no limit.
        </p>
        <p>Click here and have a look to my resume.</p>
      </div>
    </section>
  );
};

export default About;
