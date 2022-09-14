import React from 'react';
import { storiesOf } from '@storybook/react';

import Display from './Display';
import Partners from './';

const data = [
  {
    name: 'Partner1',
    logo: Image,
  },
  {
    name: 'Partner2',
    logo: Image,
  },
];

storiesOf('Components/Partners', module)
  .addParameters({ component: Partners })
  .add('partners', () => <Partners partners={data} />);

storiesOf('Components/Partners', module)
  .addParameters({ component: Display })
  .add('display', () => <Display data={data} />);
