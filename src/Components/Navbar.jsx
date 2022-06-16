import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

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

  return (
    <nav
      className={`navbar-container ${
        navbar ? 'navbar-scroll' : 'navbar-init'
      } `}
    >
      <h2 className="navbar-header">Alexander Stenberg.</h2>
      <ul className="navbar-links">
        <li className="navbar-link">Hem</li>
        <li className="navbar-link">Kontakt</li>
        <li className="navbar-link">Om Mig</li>
      </ul>
    </nav>
  );
}
