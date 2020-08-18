import React from "react"

import Header from '../Sections/Header';
import About from '../Sections/About';
import Navigation from '../Components/Navigation';
import '../Styles/index.css';

export default function Home() {
  return <React.Fragment>
    <Header />
    <About />
    <Navigation />
    </React.Fragment>
}
