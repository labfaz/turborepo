/* eslint-disable @cspell/spellchecker */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Display from './Display';
import Presentation from './';

const mockedTitle = 'Exemplo';
const mockedSubtitle = 'Exemplo';
const mockedVideo = 'https://www.youtube.com/watch?v=UrUJyKsLQeU';

storiesOf('Components/Presentation', module)
  .addParameters({ component: Presentation })
  .add('presentation', () => (
    <Presentation
      title={mockedTitle}
      subtitle={mockedSubtitle}
      video={mockedVideo}
    />
  ))
  .add('display', () => (
    <Display
      Title="LABFAZ"
      SubTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      Video="https://www.youtube.com/watch?v=5qap5aO4i9A"
    />
  ));
