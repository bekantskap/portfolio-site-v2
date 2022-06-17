import React, { Fragment } from 'react';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <Fragment>
      <div className="home-container">
        <Navbar />
        <Hero />
        <Info />
      </div>
    </Fragment>
  );
}
