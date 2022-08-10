import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders React Bowling App', () => {
  render(<App />);
  const pageHeading = screen.getByTestId('page-heading')
  expect(pageHeading).toBeInTheDocument()
  expect(pageHeading).toHaveTextContent('Spotify App')
});
