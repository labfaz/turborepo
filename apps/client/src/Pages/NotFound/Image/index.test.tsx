import React from 'react';
import render from 'Utils/render';

import Image from './';

it('renders Image component', () => {
  expect(() => render(<Image alt="Não encontrado" />)).not.toThrow();
});

it('check if renders tag img', () => {
  const { getByRole } = render(<Image alt="Não encontrado" />);
  expect(getByRole('img')).toHaveAttribute('alt', 'not_found');
});
