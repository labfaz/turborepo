/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { Title } from './';

storiesOf('Components/Title', module)
  .addParameters({ component: Title })
  .add('title h1', () => (
    <StaticRouter>
      <Title level={1}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ))

  .add('Title h2', () => (
    <StaticRouter>
      <Title level={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ))

  .add('Title h3', () => (
    <StaticRouter>
      <Title level={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ))

  .add('Title h4', () => (
    <StaticRouter>
      <Title level={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ))

  .add('Title h5', () => (
    <StaticRouter>
      <Title level={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ))

  .add('Title h6', () => (
    <StaticRouter>
      <Title level={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        ligula nibh, nec interdum nunc maximus at.
      </Title>
    </StaticRouter>
  ));
