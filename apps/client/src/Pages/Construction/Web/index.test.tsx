/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import render from 'Utils/render';

import Web from '.';

const mockedData: SocialNetworksLabfaz = {
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  googlePlus: 'https://www.google.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  phone: '9999999',
  email: 'teste@teste.com',
};

it('renders header component', () => {
  expect(() =>
    render(
      <StaticRouter>
        <Web data={mockedData} />
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Page', () => {
  const { getByText, getAllByRole } = render(
    <StaticRouter>
      <Web data={mockedData} />
    </StaticRouter>
  );

  it('check construction image', () => {
    const images = getAllByRole('img');
    expect(images[1]).toHaveAttribute('alt', 'construction');
  });

  it('check text of in construction', () => {
    expect(getByText('organizando', { exact: false })).toHaveTextContent(
      'ainda'
    );
  });
});
