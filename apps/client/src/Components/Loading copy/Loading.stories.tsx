import React from 'react';
import { storiesOf } from '@storybook/react';

import LoadingTest from './LoadingTest';
import Loading from './';

storiesOf('Components/Loading', module)
  .addParameters({ component: Loading })
  .add('loading', () => <Loading />);

storiesOf('Components/Loading', module)
  .addParameters({ component: LoadingTest })
  .add('loadingTest', () => <LoadingTest />);
