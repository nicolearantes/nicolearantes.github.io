import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Everything in this site was made with HEART by Nicole Arantes/i);
  expect(linkElement).toBeInTheDocument();
});
