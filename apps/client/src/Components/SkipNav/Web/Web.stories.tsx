import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Web from './';

storiesOf('Components/SkipNav/Web', module)
  .addParameters({ component: Web })
  .add('web', () => (
    <StaticRouter>
      <Web />
    </StaticRouter>
  ));
