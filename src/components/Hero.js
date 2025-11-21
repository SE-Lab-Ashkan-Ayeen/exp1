import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Syntact 2025</h1>
        <p className="hero-subtitle">International Conference on Syntax & Semantics</p>
        <p className="hero-date">March 15-17, 2025 | Paris, France</p>
        <button className="hero-cta">Register Now</button>
      </div>
    </section>
  );
}

export default Hero;

