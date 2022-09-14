import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Render from 'Utils/render';

import { PasswordChange } from './passwordChange';
import { AskReset } from './';

it('Should render ask reset form properly', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <AskReset />
      </StaticRouter>
    )
  ).not.toThrow();
});

it('Should have a text input page title', () => {
  const Component = render(
    <StaticRouter>
      <AskReset />
    </StaticRouter>
  ).getByRole('textbox');

  expect(Component).toBeTruthy();
});

it('Should render reset password form properly', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <PasswordChange token="" />
      </StaticRouter>
    )
  ).not.toThrow();
});
