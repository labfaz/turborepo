import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Render from 'Utils/render';

import { ExternalLinkButton } from './';

it('renders external link button component', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <ExternalLinkButton href="https://google.com.br">
          External Button
        </ExternalLinkButton>
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <StaticRouter>
      <ExternalLinkButton href="https://google.com.br">
        External Button
      </ExternalLinkButton>
    </StaticRouter>
  );

  it('check render of button content', () => {
    expect(getByText('External Button')).toHaveTextContent('External Button');
  });

  it('check link of external site', () => {
    expect(getByText('External Button').closest('a')).toHaveAttribute(
      'href',
      'https://google.com.br'
    );
  });
});
