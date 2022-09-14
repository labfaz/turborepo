import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { InternalLinkButton } from './';

storiesOf('Components/InternalLinkButton', module)
  .addParameters({ component: InternalLinkButton })
  .add('internalLinkButton', () => (
    <StaticRouter>
      <InternalLinkButton href="/blog">Internal Button</InternalLinkButton>
    </StaticRouter>
  ));
