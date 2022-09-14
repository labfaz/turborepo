import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { ExternalLinkButton } from './';

storiesOf('Components/ExternalLinkButton', module)
  .addParameters({ component: ExternalLinkButton })
  .add('externalLinkButton', () => (
    <StaticRouter>
      <ExternalLinkButton href="https://google.com.br">
        External Button
      </ExternalLinkButton>
    </StaticRouter>
  ));
