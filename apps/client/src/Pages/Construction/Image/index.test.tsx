import React from 'react';
import render from 'Utils/render';

import Image from '.';

it('renders Image component', () => {
  expect(() => render(<Image alt="Construção" />)).not.toThrow();
});

it('check if renders tag img', () => {
  const { getByRole } = render(<Image alt="Construção" />);
  expect(getByRole('img')).toHaveAttribute('alt', 'construction');
});
