import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import SignUp from './';

storiesOf('Components/SignUp', module)
  .addParameters({ component: SignUp })
  .add('SignUp', () => (
    <StaticRouter>
      <SignUp button_type="button" />
    </StaticRouter>
  ));
