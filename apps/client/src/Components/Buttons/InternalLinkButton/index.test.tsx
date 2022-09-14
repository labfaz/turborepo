import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Render from 'Utils/render';

import { InternalLinkButton } from './';

it('renders internal link button component', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <InternalLinkButton href="/blog">Internal Button</InternalLinkButton>
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <StaticRouter>
      <InternalLinkButton href="/blog">Internal Button</InternalLinkButton>
    </StaticRouter>
  );

  it('check render of button content', () => {
    expect(getByText('Internal Button')).toHaveTextContent('Internal Button');
  });

  it('check link of internal site', () => {
    expect(getByText('Internal Button').closest('a')).toHaveAttribute(
      'href',
      '/blog'
    );
  });
});
