import React from 'react';
import { storiesOf } from '@storybook/react';
import { HomepageBannerInfo } from 'Api/HomepageBannerInfo';
import { mockImage } from 'Utils/Image';

import HomePage, { DisplayProps } from './Display';

const data: HomepageBannerInfo = {
  title: 'LABFAZ',
  subtitle: 'LoremIpsum',
  image: mockImage({
    url: 'https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg',
    alternativeText: 'Blog Banner Image',
  }),
};

const props = {} as DisplayProps;
storiesOf('Pages/Home', module)
  .addParameters({ component: HomePage })
  // eslint-disable-next-line
  .add('list posts', () => <HomePage {...props} data={data} />);
