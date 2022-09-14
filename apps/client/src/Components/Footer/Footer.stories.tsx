import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Footer from 'Components/Footer';

storiesOf('Components/Footer', module)
  .addParameters({ component: Footer })
  .add('footer', () => (
    <StaticRouter>
      <Footer />
    </StaticRouter>
  ));
