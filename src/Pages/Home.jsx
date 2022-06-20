import React, { Fragment } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';

export default function Home() {
  return (
    <Fragment>
      <div className="home-container">
        <Navbar />
        <Hero />
        <Info />
        <Projects />
        <Footer />
      </div>
    </Fragment>
  );
}
