/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaffObject } from 'Api/AboutUs';
import { mockImage } from 'Utils/Image';

import StaffCard from './index';

const image = mockImage({
  url: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  alternativeText: 'Descriptive of person',
  caption: 'A nice caption',
  ext: 'jpg',
});

const StaffInfo: StaffObject = {
  id: 1,
  name: 'Jhon Doe',
  tag: 'Coordenação',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  image: image,
};

storiesOf('Components/Staff Card', module)
  .addParameters({ component: StaffCard })
  .add('Default', () => <StaffCard data={StaffInfo} />);
