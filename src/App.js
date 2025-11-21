import React from 'react';
import './App.css';
import Hero from './components/Hero';
import SpeakerGrid from './components/SpeakerGrid';
import ScheduleTable from './components/ScheduleTable';

function App() {
  return (
    <div className="App">
      <Hero />
      <SpeakerGrid />
      <ScheduleTable />
    </div>
  );
}

export default App;
