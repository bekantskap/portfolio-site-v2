import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/projects.jpg';

export default function ProjectCards(props) {
  return (
    <div className="projects-card__wrapper">
      <div
        onClick={() => window.open(props.link, '_blank')}
        className="projects-card"
      >
        <img className="projects-card__img" alt="project website" src={Image} />
        <div className="projects-card__text">
          <h3>{props.title}</h3>
          <p>
            {props.desc}
            <button onClick={() => window.open(props.link, '_blank')}>
              Läs mer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
