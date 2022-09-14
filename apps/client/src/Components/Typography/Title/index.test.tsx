import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Render from 'Utils/render';

import { Title } from './';

it('renders Title component', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <Title>Some Title</Title>
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Title', () => {
  const { getByText } = Render(
    <StaticRouter>
      <Title>Some Title</Title>
    </StaticRouter>
  );

  it('check render of Title', () => {
    const text = getByText('Some Title');
    expect(text).toHaveTextContent('Title');
  });
});
