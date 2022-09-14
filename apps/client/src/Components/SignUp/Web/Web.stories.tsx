import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { Web } from './';

storiesOf('Components/SignUp', module)
  .addParameters({ component: Web })
  .add('web', () => (
    <StaticRouter>
      <Web buttonType="button" />
    </StaticRouter>
  ));
