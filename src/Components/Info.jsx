import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from '../img/avatar.png';

export default function Info(props) {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    slideOnScrolltest();
    window.addEventListener('scroll', slideOnScrolltest);
    console.log(slideIn);
  });

  const slideOnScrolltest = () => {
    if (window.scrollY >= 600) {
      setSlideIn(true);
    } else {
      setSlideIn(false);
    }
  };

  return (
    <main ref={props.reference} className="info-container">
      <section className="info-content">
        <img
          className={`info-box__image ${
            slideIn ? 'hide-slide' : 'slide-in__left'
          } `}
          src={Image}
          alt="portrait"
        />
      </section>
      <div className="info-line"></div>
      <section
        className={`info-content__right ${
          slideIn ? 'hide-right' : 'slide-in__right'
        } `}
      >
        <div className="info-box">
          <div className="info-box__bio">
            <h3>Om mig</h3>
            <p className="bio__text">
              Namn: Alexander Stenberg <br></br>Gör: Frontend-student<br></br>
              Bor: Borås<br></br>
              <br></br>
              Går just nu mitt sista år i skolan och ska därmed också ut på två
              LIA-perioder.<br></br> Letar främst praktik i Borås med omnejd men
              närliggande städer är också av intresse. Se min portfolio nedan
              och kontakta mig för mer info.
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="info-box__content">
            <div>
              <h3>Personlighet</h3>
              <i className="fa-solid fa-face-grin"></i>
              <i className="fa-solid fa-face-grin-tears"></i>
            </div>
            <div>
              <h3>Hobby</h3>
              <i className="fa-solid fa-futbol"></i>
              <i className="fa-solid fa-code"></i>
            </div>
            <div>
              <h3>Familj</h3>
              <i className="fa-solid fa-person-dress"></i>
              <i className="fa-solid fa-baby"></i>
              <i className="fa-solid fa-dog"></i>
            </div>
            <div>
              <h3>Studerar</h3>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3"></i>
              <i className="fa-brands fa-js"></i>
              <i className="fa-brands fa-react"></i>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
