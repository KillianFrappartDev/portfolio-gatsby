import React from "react"

import Header from '../Sections/Header';
import About from '../Sections/About';
import Navigation from '../Components/Navigation';
import Skills from '../Sections/Skills';
import '../Styles/index.css';

export default function Home() {
  return <React.Fragment>
    <Header />
    <About />
    <Skills />
    <Navigation />
    </React.Fragment>
}
