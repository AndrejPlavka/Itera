import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import App from './App';

test('Does App render?', () => {
  render(<App />);
  screen.debug();
});
