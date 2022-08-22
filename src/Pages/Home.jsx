import React, { Fragment, useRef } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Info from '../Components/Info';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';

export default function Home() {
  const scrollToDiv = ref => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();

  return (
    <Fragment>
      <Navbar
        reference={el1}
        home={() => scrollToDiv(el1)}
        bio={() => scrollToDiv(el2)}
        contact={() => scrollToDiv(el3)}
      />
      <Hero />
      <Info reference={el2} />
      <Projects />
      <Footer reference={el3} />
    </Fragment>
  );
}
