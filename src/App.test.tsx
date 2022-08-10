import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Spotify App', () => {
  render(<App />);
  const pageHeading = screen.getByTestId('page-heading')
  const trackHeading = screen.getByTestId('tracks-heading')
  const artistHeading = screen.getByTestId('artists-heading')
  expect(pageHeading).toBeInTheDocument()
  expect(pageHeading).toHaveTextContent('Spotify App')
});
