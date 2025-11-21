import { render, screen } from '@testing-library/react';
import App from './App';

test('renders conference title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Syntact 2025/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders language toggle button', () => {
  render(<App />);
  const toggleButton = screen.getByRole('button', { name: /FR|EN/i });
  expect(toggleButton).toBeInTheDocument();
});

test('renders speakers section', () => {
  render(<App />);
  const speakersText = screen.getByText(/Featured Speakers|Conférenciers Principaux/i);
  expect(speakersText).toBeInTheDocument();
});
