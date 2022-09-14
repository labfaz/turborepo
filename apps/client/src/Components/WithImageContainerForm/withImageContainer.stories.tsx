import React from 'react';
import { storiesOf } from '@storybook/react';
import RecoverForm from 'Components/PasswordRecover';
import { mockImage } from 'Utils/Image';

import WithImageContainerForm from './index';

const image = mockImage({
  url: 'https://images.fineartamerica.com/images-medium-large/reflections-of-longs-peak-vertical-image-james-bo-insogna.jpg',
  alternativeText: 'string',
  caption: 'string',
  width: 640,
  height: 640,
  ext: 'png',
});

storiesOf('Components/FormContainer', module)
  .addParameters({ component: 'FormContainer' })
  .add('list posts', () => (
    <WithImageContainerForm title="FormContainer" image={image}>
      <RecoverForm />
    </WithImageContainerForm>
  ));
