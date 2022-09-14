import React from 'react';
import { StaticRouter } from 'react-router-dom';
import render from 'Utils/render';

import Navigation from './index';

it('renders Navigation component', () => {
  expect(() =>
    render(
      <StaticRouter>
        <Navigation />
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check links successfully redirects to another page', () => {
  const { getByText, getAllByText } = render(
    <StaticRouter>
      <Navigation />
    </StaticRouter>
  );

  it('checks text', () => {
    expect(getByText('Navegação')).toHaveTextContent('Nave');
  });

  it('checks link of about us page', () => {
    expect(getByText('QUEM SOMOS')).toHaveAttribute('href', '/about');
  });

  it('checks link of list courses page', () => {
    expect(getByText('CURSOS')).toHaveAttribute('href', '/classes');
  });

  // it('checks link of calendar page', () => {
  //   expect(getByText('AGENDA')).toHaveAttribute('href', '/calendar')
  // })

  it('checks link of blog page', () => {
    expect(getAllByText('BLOG')[0]).toHaveAttribute('href', '/blog');
  });

  it('checks link of professionals page', () => {
    expect(getByText('BUSCA DE PROFISSIONAIS')).toHaveAttribute(
      'href',
      '/busca-profissionais'
    );
  });
});

describe('Check user session links', () => {
  const { getByText } = render(
    <StaticRouter>
      <Navigation />
    </StaticRouter>
  );

  it('check sign up button', () => {
    expect(getByText('CADASTRE-SE').closest('a')).toHaveAttribute(
      'href',
      // eslint-disable-next-line @cspell/spellchecker
      '/signup'
    );
  });
});
