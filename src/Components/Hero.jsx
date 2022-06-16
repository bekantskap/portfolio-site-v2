import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <main className="hero-img__container">
      <div className="hero-img__content">
        <p>Välkommen till min portfolio.</p>
        <h1>(Aspirerande) React Utvecklare.</h1>
        <div className="hero-img__btns">
          <Button title="Test" buttonType="yellow" />
          <Button title="Test 2" buttonType="white" />
        </div>
      </div>
    </main>
  );
}
