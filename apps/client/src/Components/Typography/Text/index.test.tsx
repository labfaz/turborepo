/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Render from 'Utils/render';

import { Text } from './';

it('renders Text component', () => {
  expect(() =>
    Render(
      <StaticRouter>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          ligula nibh, nec interdum nunc maximus at.
        </Text>
      </StaticRouter>
    )
  ).not.toThrow();
});

describe('Check content of Text', () => {
  const { getByText } = Render(
    <StaticRouter>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Text>
    </StaticRouter>
  );

  it('check render of text', () => {
    const text = getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.'
    );
    expect(text).toHaveTextContent('dolor');
  });
});
