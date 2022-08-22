import React from 'react';
import ProjectCards from './ProjectCards';

export default function Projects() {
  return (
    <main className="projects-container">
      <div className="projects-content">
        <section className="projects-text">
          <h1>PORTFOLIO</h1>
          <h3>MIN KOLLEKTION</h3>
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
              'Skolprojekt där vi utvecklade en app för konsertbokningar till mobiler. Fokus på context och states. '
            }
          />
          <ProjectCards
            title={'Movie DB'}
            link={'https://github.com/bekantskap/Movie-DB-Redux-Project'}
            desc={
              'Skolprojekt med fokus på logik och inget fokus på design. Filmdatabas där man kan recensera, utvecklad med React Redux.'
            }
          />
          <ProjectCards
            title={'Nvidia Clone'}
            link={'https://github.com/bekantskap/nvidia'}
            desc={
              'Light-Klon av nvidias hemsida med fokus på CSS. Inte respsonsivt utvecklad i dagsläget men kommer bli.'
            }
          />
          <ProjectCards
            title={'Scrum Tutorial'}
            link={'https://github.com/bekantskap/Scrum-tutorial-project'}
            desc={
              'Skolprojekt med fokus på att förklara scrum för ett mindre företag genom att designa en hemsida.'
            }
          />
          <ProjectCards
            title={'Portfolio'}
            link={'https://github.com/bekantskap/portfolio-site-v2'}
            desc={
              'Repository för den här portfolion som är designad av mig. Utvecklad med react och sass'
            }
          />
          <ProjectCards
            title={'The Hangman'}
            link={'https://github.com/bekantskap/Hangman.git'}
            desc={
              'Skolprojekt gjort tidigt i min skolgång innan intro till react. Här låg fokus på vanilla JS.'
            }
          />
          <ProjectCards
            title={'Solaris'}
            link={'https://github.com/bekantskap/Solaris'}
            desc={
              'Skolprojekt gjort tidigt i min skolgång innan intro till react. Fokus på API och vanilla JS '
            }
          />
        </section>
      </div>
    </main>
  );
}
