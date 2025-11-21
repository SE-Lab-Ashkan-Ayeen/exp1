import React from 'react';
import './SpeakerGrid.css';

const speakers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Professor of Linguistics',
    affiliation: 'MIT',
    topic: 'Syntax-Semantics Interface'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    title: 'Research Director',
    affiliation: 'Stanford University',
    topic: 'Formal Semantics'
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    title: 'Associate Professor',
    affiliation: 'Oxford University',
    topic: 'Cross-linguistic Syntax'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    title: 'Professor',
    affiliation: 'Harvard University',
    topic: 'Computational Semantics'
  }
];

function SpeakerGrid() {
  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">Featured Speakers</h2>
        <div className="speaker-grid">
          {speakers.map(speaker => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">
                {speaker.name.charAt(0)}
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-affiliation">{speaker.affiliation}</p>
              <p className="speaker-topic">{speaker.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakerGrid;

