import React from 'react';
import { storiesOf } from '@storybook/react';

import Mobile from './Mobile';
import Web from './Web';
import Error from '.';

const exampleStatus = 500;
const exampleMessage = 'Internal server error';

storiesOf('Components/Error', module)
  .addParameters({ component: Error })
  .add('responsive', () => (
    <Error errorStatus={exampleStatus} errorMessage={exampleMessage} />
  ))
  .add('web', () => <Web status={exampleStatus} message={exampleMessage} />)
  .add('mobile', () => (
    <Mobile status={exampleStatus} message={exampleMessage} />
  ));
