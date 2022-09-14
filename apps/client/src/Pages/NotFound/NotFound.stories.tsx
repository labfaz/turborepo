import React from 'react';
import { storiesOf } from '@storybook/react';

import Mobile from './Mobile';
import Web from './Web';
import NotFound from './';

storiesOf('Pages/NotFound', module)
  .addParameters({ component: NotFound })
  .add('responsive', () => <NotFound />)
  .add('web', () => <Web />)
  .add('mobile', () => <Mobile />);
