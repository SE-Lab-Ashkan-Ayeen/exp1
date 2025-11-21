import React from 'react';
import './ScheduleTable.css';

const scheduleEn = [
  {
    day: 'Day 1 - March 15',
    events: [
      { time: '09:00 - 10:00', title: 'Opening Keynote', speaker: 'Dr. Sarah Johnson', location: 'Main Hall' },
      { time: '10:30 - 12:00', title: 'Syntax Workshop', speaker: 'Dr. Michael Chen', location: 'Room A' },
      { time: '13:00 - 14:00', title: 'Lunch Break', speaker: '', location: 'Dining Hall' },
      { time: '14:30 - 16:00', title: 'Semantics Panel', speaker: 'Dr. Elena Rodriguez', location: 'Main Hall' },
      { time: '16:30 - 18:00', title: 'Poster Session', speaker: 'Various', location: 'Exhibition Hall' }
    ]
  },
  {
    day: 'Day 2 - March 16',
    events: [
      { time: '09:00 - 10:30', title: 'Plenary Session', speaker: 'Dr. James Wilson', location: 'Main Hall' },
      { time: '11:00 - 12:30', title: 'Syntax Track A', speaker: 'Multiple Speakers', location: 'Room A' },
      { time: '13:00 - 14:00', title: 'Lunch Break', speaker: '', location: 'Dining Hall' },
      { time: '14:30 - 16:00', title: 'Semantics Track B', speaker: 'Multiple Speakers', location: 'Room B' },
      { time: '16:30 - 18:00', title: 'Networking Session', speaker: '', location: 'Lobby' }
    ]
  },
  {
    day: 'Day 3 - March 17',
    events: [
      { time: '09:00 - 10:30', title: 'Closing Keynote', speaker: 'Dr. Sarah Johnson', location: 'Main Hall' },
      { time: '11:00 - 12:30', title: 'Best Paper Awards', speaker: 'Organizing Committee', location: 'Main Hall' },
      { time: '13:00 - 14:00', title: 'Farewell Lunch', speaker: '', location: 'Dining Hall' }
    ]
  }
];

const scheduleFr = [
  {
    day: 'Jour 1 - 15 mars',
    events: [
      { time: '09:00 - 10:00', title: 'Conférence d\'ouverture', speaker: 'Dr. Sarah Johnson', location: 'Grande Salle' },
      { time: '10:30 - 12:00', title: 'Atelier de Syntaxe', speaker: 'Dr. Michael Chen', location: 'Salle A' },
      { time: '13:00 - 14:00', title: 'Pause Déjeuner', speaker: '', location: 'Salle à Manger' },
      { time: '14:30 - 16:00', title: 'Table Ronde sur la Sémantique', speaker: 'Dr. Elena Rodriguez', location: 'Grande Salle' },
      { time: '16:30 - 18:00', title: 'Session d\'Affiches', speaker: 'Divers', location: 'Hall d\'Exposition' }
    ]
  },
  {
    day: 'Jour 2 - 16 mars',
    events: [
      { time: '09:00 - 10:30', title: 'Session Plénière', speaker: 'Dr. James Wilson', location: 'Grande Salle' },
      { time: '11:00 - 12:30', title: 'Piste de Syntaxe A', speaker: 'Plusieurs Conférenciers', location: 'Salle A' },
      { time: '13:00 - 14:00', title: 'Pause Déjeuner', speaker: '', location: 'Salle à Manger' },
      { time: '14:30 - 16:00', title: 'Piste de Sémantique B', speaker: 'Plusieurs Conférenciers', location: 'Salle B' },
      { time: '16:30 - 18:00', title: 'Session de Réseautage', speaker: '', location: 'Hall d\'Entrée' }
    ]
  },
  {
    day: 'Jour 3 - 17 mars',
    events: [
      { time: '09:00 - 10:30', title: 'Conférence de Clôture', speaker: 'Dr. Sarah Johnson', location: 'Grande Salle' },
      { time: '11:00 - 12:30', title: 'Prix du Meilleur Article', speaker: 'Comité d\'Organisation', location: 'Grande Salle' },
      { time: '13:00 - 14:00', title: 'Déjeuner d\'Adieu', speaker: '', location: 'Salle à Manger' }
    ]
  }
];

const translations = {
  en: {
    sectionTitle: 'Conference Schedule',
    headers: {
      time: 'Time',
      event: 'Event',
      speaker: 'Speaker',
      location: 'Location'
    }
  },
  fr: {
    sectionTitle: 'Programme de la Conférence',
    headers: {
      time: 'Heure',
      event: 'Événement',
      speaker: 'Conférencier',
      location: 'Lieu'
    }
  }
};

function ScheduleTable({ language = 'en' }) {
  const t = translations[language];
  const schedule = language === 'fr' ? scheduleFr : scheduleEn;

  return (
    <section className="schedule">
      <div className="container">
        <h2 className="section-title">{t.sectionTitle}</h2>
        {schedule.map((daySchedule, dayIndex) => (
          <div key={dayIndex} className="schedule-day">
            <h3 className="day-title">{daySchedule.day}</h3>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>{t.headers.time}</th>
                  <th>{t.headers.event}</th>
                  <th>{t.headers.speaker}</th>
                  <th>{t.headers.location}</th>
                </tr>
              </thead>
              <tbody>
                {daySchedule.events.map((event, eventIndex) => (
                  <tr key={eventIndex}>
                    <td className="time-cell">{event.time}</td>
                    <td className="event-cell">{event.title}</td>
                    <td className="speaker-cell">{event.speaker || '-'}</td>
                    <td className="location-cell">{event.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleTable;

