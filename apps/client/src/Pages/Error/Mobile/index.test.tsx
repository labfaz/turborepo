import React from 'react';
import { StaticRouter } from 'react-router-dom';
import render from 'Utils/render';

import Mobile from '.';

const exampleStatus = 500;
const exampleMessage = 'Internal server error';

it('renders mobile error component', () => {
  expect(() =>
    render(
      <StaticRouter>
        <Mobile status={exampleStatus} message={exampleMessage} />
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check if content of error page', () => {
  const { getByText, getAllByRole } = render(
    <StaticRouter>
      <Mobile status={exampleStatus} message={exampleMessage} />
    </StaticRouter>
  );

  it('renders error image', () => {
    const images = getAllByRole('img');
    expect(images[0]).toHaveAttribute('alt', 'error');
  });

  it('renders generic text', () => {
    const genericText = getByText('Ops...Parece que algo deu errado');
    expect(genericText).toHaveTextContent('Ops...Parece que algo deu errado');
  });
});
