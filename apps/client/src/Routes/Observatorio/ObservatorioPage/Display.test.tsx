import React from 'react';
import { StaticRouter } from 'react-router-dom';
import render from 'Utils/render';

import ObservatorioPageDisplay from './Display';

describe('Observatorio Page', () => {
  it('renders without exploding', () => {
    expect(() =>
      render(
        <StaticRouter>
          <ObservatorioPageDisplay />
        </StaticRouter>
      )
    ).not.toThrow();
  });
});
