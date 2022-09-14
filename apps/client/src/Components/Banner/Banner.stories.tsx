/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Banner from './';

storiesOf('Components/Banner', module)
  .addParameters({ component: Banner })
  .add('bannerCenter', () => (
    <StaticRouter>
      <Banner
        title="LABFAZ"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          ligula nibh, nec interdum nunc maximus at."
        hrefKnowMore="/about"
      />
    </StaticRouter>
  ))
  .add('bannerLeft', () => (
    <StaticRouter>
      <Banner
        title="Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        align="left"
      />
    </StaticRouter>
  ));
