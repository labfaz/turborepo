import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { Mobile } from '.';

storiesOf('Components/SignUp', module)
  .addParameters({ component: Mobile })
  .add('mobile', () => (
    <StaticRouter>
      <Mobile buttonType="button" token="" />
    </StaticRouter>
  ));
