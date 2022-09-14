import React from 'react';
import type { HomePartners } from 'Api/HomePartners';
import Partners from 'Components/Partners';
import render from 'Utils/render';

import Display from './Display';

const mockedData: HomePartners[] = [
  {
    name: 'Partner1',
    logo: Image,
  },
  {
    name: 'Partner2',
    logo: Image,
  },
];

it('renders Partners component', () => {
  expect(() => render(<Partners partners={mockedData} />)).not.toThrow();
});

describe('Check content of Partners component', () => {
  const { getAllByRole } = render(<Display data={mockedData} />);
  // it('check render of title', () => {
  //   expect(getByText("APOIO")).toHaveTextContent("APOIO");
  // });
  it('check banner of partners', () => {
    const array = getAllByRole('img');
    array.forEach((img) => {
      expect(img).toHaveAttribute('alt', expect.stringContaining('Partner'));
    });
  });
});
