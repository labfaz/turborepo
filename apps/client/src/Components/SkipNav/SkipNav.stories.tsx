import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import SkipNav from '.';

storiesOf('Components/SkipNav', module)
  .addParameters({ component: SkipNav })
  .add('SkipNav', () => (
    <StaticRouter>
      <SkipNav />
    </StaticRouter>
  ));
