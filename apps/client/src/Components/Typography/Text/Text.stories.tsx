/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { Text } from './';

storiesOf('Components/Text', module)
  .addParameters({ component: Text })
  .add('text', () => (
    <StaticRouter>
      <Text>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Text>
    </StaticRouter>
  ));
