import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { navLinks } from 'Utils/navLinks';
import render from 'Utils/render';

import Display from './Display';

it('renders login component', () => {
  expect(() =>
    render(
      <StaticRouter>
        <Display onSubmit={() => undefined} buttonType="button" />
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Login component', () => {
  const { getByText } = render(
    <StaticRouter>
      <Display onSubmit={() => undefined} buttonType="button" />
    </StaticRouter>
  );

  it('checks if title rendered', () => {
    // const title = getByText('ENTRAR')
    // expect(title).toHaveTextContent('ENTRAR')
  });

  it('checks if subtitle rendered', () => {
    const title = getByText(
      'Laboratório dos Fazeres e Saberes Técnicos da Economia Criativa'
    );
    expect(title).toHaveTextContent(
      'Laboratório dos Fazeres e Saberes Técnicos da Economia Criativa'
    );
  });
});

describe('Check user session links', () => {
  const { getByText } = render(
    <StaticRouter>
      <Display onSubmit={() => undefined} buttonType="button" />
    </StaticRouter>
  );

  it('check Recover link', () => {
    expect(getByText(navLinks.forgotPass.label).closest('a')).toHaveAttribute(
      'href',
      navLinks.forgotPass.path
    );
  });
});
