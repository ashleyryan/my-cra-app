import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link and button', async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = await screen.findByRole('button', {name: 'My Button'});
  expect(buttonElement).toBeInTheDocument();
});
