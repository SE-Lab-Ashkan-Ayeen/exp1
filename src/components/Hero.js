import React from 'react';
import './Hero.css';

const translations = {
  en: {
    title: 'Syntact 2025',
    subtitle: 'International Conference on Syntax & Semantics',
    date: 'March 15-17, 2025 | Paris, France',
    cta: 'Register Now'
  },
  fr: {
    title: 'Syntact 2025',
    subtitle: 'Conférence Internationale sur la Syntaxe et la Sémantique',
    date: '15-17 mars 2025 | Paris, France',
    cta: 'S\'inscrire maintenant'
  }
};

function Hero({ language = 'en' }) {
  const t = translations[language];
  const title = t.title;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <p className="hero-date">{t.date}</p>
        <button className="hero-cta">{t.cta}</button>
      </div>
    </section>
  );
}

export default Hero;

