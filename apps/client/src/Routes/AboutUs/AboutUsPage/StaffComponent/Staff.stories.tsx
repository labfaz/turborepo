import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaffObject, Team, TeamsData } from 'Api/AboutUs';
import { mockImage } from 'Utils/Image';

import Staff from './index';

const image = mockImage({
  url: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  alternativeText: 'Descriptive of person',
  caption: 'A nice caption',
  ext: 'jpg',
});

const StaffInfo: StaffObject = {
  id: 1,
  // eslint-disable-next-line @cspell/spellchecker
  name: 'Jhon Doe',
  tag: 'Coordenação',
  // eslint-disable-next-line @cspell/spellchecker
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  image: image,
};

const team: Team = {
  id: 1231231,
  name: 'Coordenação',
  description:
    // eslint-disable-next-line @cspell/spellchecker
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
  staff: [StaffInfo, StaffInfo, StaffInfo, StaffInfo],
};

const teams: TeamsData = {
  team: [team, team],
  subtitulo: '',
};

storiesOf('Components/Staff', module)
  .addParameters({ component: Staff })
  .add('Default', () => <Staff data={teams} />);
