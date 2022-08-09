import React from 'react';
import Image from '../img/avatar.png';

export default function Info() {
  return (
    <main className="info-container">
      <section className="info-content">
        <img className="info-box__image" src={Image} alt="portrait" />
        <div className="info-box">
          <div className="info-box__content">
            <div>
              <h3>Personlighet</h3>
              <i class="fa-solid fa-face-grin"></i>
              <i class="fa-solid fa-face-grin-tears"></i>
            </div>
            <div>
              <h3>..när koden inte funkar</h3>
              <i class="fa-solid fa-face-meh-blank"></i>
              <i class="fa-solid fa-face-grin-beam-sweat"></i>
            </div>
            <div>
              <h3>Hobby</h3>
              <i class="fa-solid fa-futbol"></i>
              <i class="fa-solid fa-code"></i>
            </div>
            <div>
              <h3>Familj</h3>
              <i class="fa-solid fa-person-dress"></i>
              <i class="fa-solid fa-baby"></i>
              <i class="fa-solid fa-dog"></i>
            </div>
            <div>
              <h3>Studerar</h3>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
