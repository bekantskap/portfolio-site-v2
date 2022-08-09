import React from 'react';
import ProjectCards from './ProjectCards';

export default function Projects() {
  return (
    <main className="projects-container">
      <div className="projects-content">
        <section className="projects-text">
          <h1>PORTFOLIO</h1>
          <h3>MIN KOLLEKTION</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            ut, quia expedita soluta modi at alias dolorum nulla omnis officia
            quis ipsum eos, cumque placeat minus, accusamus quo fugiat! Fugiat.
          </p>
        </section>
        <section className="projects-sites">
          <ProjectCards
            title={'Ehab Elteknik'}
            link={'https://github.com/bekantskap/ehab-elteknik'}
            desc={
              'Sida som ska levereras till ett elföretag i Borås. Allt är designat och utvecklat av mig. Pågående arbete.'
            }
          />
          <ProjectCards
            title={'Where its at'}
            link={'https://github.com/bekantskap/where-its-at'}
            desc={
              'Skolprojekt där vi utvecklade en mobilapp för konsertbokningar.'
            }
          />
          <ProjectCards
            title={'Movie DB'}
            link={'https://github.com/bekantskap/Movie-DB-Redux-Project'}
            desc={
              'Skolprojekt med fokus på logik och inget fokus på design. Filmdatabas utvecklad med React Redux.'
            }
          />
          <ProjectCards
            title={'Nvidia Clone'}
            link={'https://github.com/bekantskap/nvidia'}
            desc={'Light-Klon av nvidias hemsida med fokus på CSS.'}
          />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
        </section>
      </div>
    </main>
  );
}
