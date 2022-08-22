import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const [activeLinks, setActiveLinks] = useState(false);
  const [navbarName, setNavbarName] = useState('Alexander Stenberg.');

  const changeActiveHandler = () => {
    console.log(activeLinks);
    if (!activeLinks) {
      setActiveLinks(true);
    } else {
      setActiveLinks(false);
    }
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbarBackground();
    window.addEventListener('scroll', changeNavbarBackground);
  });

  const ref = useRef(null);

  useEffect(() => {
    console.log('width', ref.current.offsetWidth);
    if (ref.current.offsetWidth > 500) {
      setNavbarName('Alexander Stenberg.');
    } else {
      setNavbarName('AS.');
    }
  }, []);

  return (
    <nav
      ref={ref}
      className={`navbar-container ${
        navbar ? 'navbar-scroll' : 'navbar-init'
      } `}
    >
      <h2 className="navbar-header">{navbarName}</h2>
      <div className="navbar-toggle__btn" onClick={() => changeActiveHandler()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div
        ref={props.reference}
        className={`navbar-links__container ${
          activeLinks ? 'active' : 'hide'
        } `}
      >
        <ul className={`navbar-links ${activeLinks ? 'active' : ''} `}>
          <li onClick={props.home} className="navbar-link">
            Hem
          </li>
          <li onClick={props.bio} className="navbar-link">
            Om Mig
          </li>
          <li onClick={props.contact} className="navbar-link">
            Kontakt
          </li>
        </ul>
      </div>
    </nav>
  );
}
