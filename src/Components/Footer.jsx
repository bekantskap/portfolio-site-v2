import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer ref={props.reference} className="footer-container">
      <h2 className="footer-text">KONTAKTA MIG</h2>
      <section className="footer-contact">
        <div>
          <div className="footer-box">
            <i className="fa-solid fa-at"></i>

            <p onClick={() => (window.location = 'mailto:yourmail@gmail.com')}>
              alstenberg@live
            </p>
          </div>
          <div className="footer-box">
            <i className="fa-solid fa-phone"></i>
            <p className="footer-phone">0735807870</p>
          </div>
        </div>
        <div>
          <div className="footer-box">
            <i className="fa-brands fa-github"></i>
            <a
              className="footer-github"
              href="https://www.github.com/bekantskap"
              target="_blank"
              rel="noreferrer"
            >
              Github.com/bekantskap
            </a>
          </div>
          <div className="footer-box">
            <i className="fa-brands fa-linkedin-in"></i>
            <a
              className="footer-linkedin"
              href="https://www.linkedin.com/in/alexander-stenberg-5507b01ba"
              target="_blank"
              rel="noreferrer"
            >
              Alexander Stenberg
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
