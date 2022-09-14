import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Mobile from './';

storiesOf('Components/Header', module)
  .addParameters({ component: Mobile })
  .add('mobile', () => (
    <StaticRouter>
      <Mobile />
    </StaticRouter>
  ));
