import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import SpeakerGrid from './components/SpeakerGrid';
import ScheduleTable from './components/ScheduleTable';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="App">
      <div className="language-toggle">
        <button onClick={toggleLanguage} className="lang-btn">
          {language === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
      <Hero language={language} />
      <SpeakerGrid language={language} />
      <ScheduleTable language={language} />
    </div>
  );
}

export default App;
