import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLinks, setActiveLinks] = useState(false);

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

  const handleClick = () => {};

  return (
    <nav
      className={`navbar-container ${
        navbar ? 'navbar-scroll' : 'navbar-init'
      } `}
    >
      <h2 className="navbar-header">Alexander Stenberg.</h2>
      <div className="navbar-toggle__btn" onClick={() => changeActiveHandler()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div
        className={`navbar-links__container ${
          activeLinks ? 'active' : 'hide'
        } `}
      >
        <ul className={`navbar-links ${activeLinks ? 'active' : ''} `}>
          <li className="navbar-link">Hem</li>
          <li className="navbar-link">Kontakt</li>
          <li className="navbar-link">Om Mig</li>
        </ul>
      </div>
    </nav>
  );
}
