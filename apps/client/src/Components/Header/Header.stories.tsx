import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Header from './';

storiesOf('Components/Header', module)
  .addParameters({ component: Header })
  .add('header', () => (
    <StaticRouter>
      <Header />
    </StaticRouter>
  ));
