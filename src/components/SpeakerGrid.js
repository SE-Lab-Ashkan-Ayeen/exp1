import React from 'react';
import './SpeakerGrid.css';

const speakers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    titleEn: 'Professor of Linguistics',
    titleFr: 'Professeure de Linguistique',
    affiliation: 'MIT',
    topicEn: 'Syntax-Semantics Interface',
    topicFr: 'Interface Syntaxe-Sémantique'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    titleEn: 'Research Director',
    titleFr: 'Directeur de Recherche',
    affiliation: 'Stanford University',
    topicEn: 'Formal Semantics',
    topicFr: 'Sémantique Formelle'
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    titleEn: 'Associate Professor',
    titleFr: 'Professeure Associée',
    affiliation: 'Oxford University',
    topicEn: 'Cross-linguistic Syntax',
    topicFr: 'Syntaxe Interlinguistique'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    titleEn: 'Professor',
    titleFr: 'Professeur',
    affiliation: 'Harvard University',
    topicEn: 'Computational Semantics',
    topicFr: 'Sémantique Computationnelle'
  }
];

const translations = {
  en: {
    sectionTitle: 'Featured Speakers'
  },
  fr: {
    sectionTitle: 'Conférenciers Principaux'
  }
};

function SpeakerGrid({ language = 'en' }) {
  const t = translations[language];

  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">{t.sectionTitle}</h2>
        <div className="speaker-grid">
          {speakers.map(speaker => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">
                {speaker.name.charAt(0)}
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{language === 'fr' ? speaker.titleFr : speaker.titleEn}</p>
              <p className="speaker-affiliation">{speaker.affiliation}</p>
              <p className="speaker-topic">{language === 'fr' ? speaker.topicFr : speaker.topicEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakerGrid;

