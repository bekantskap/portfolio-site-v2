import React from 'react';
import Image from '../img/alex.png';

export default function Info() {
  return (
    <main className="info-container">
      <section className="info-content">
        <div className="info-box round">
          <img className="info-box__image" src={Image} alt="portrait" />
        </div>
        <div className="info-box"></div>
      </section>
    </main>
  );
}
