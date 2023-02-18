import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Itera JavaScript Home Assignment/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders 3 list items', () => {
  render(<App />);
  const listitems = screen.getAllByRole("listitem");
  expect(listitems).toHaveLength(3);
});