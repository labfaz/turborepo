import React from 'react';
import App from 'App';
import render from 'Utils/render';

it('renders without exploding', () => {
  expect(() => render(<App />)).not.toThrow();
});
