/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { Meta, Preview, Props, Story } from '@storybook/addon-docs/blocks';

import { Button } from '@labfaz/core/src';

<>
  <Meta title="Components/Button" component={Button} />

  <Props of={Button} />

  <Preview>
    <Story name="Default">
      <Button>Hello</Button>
    </Story>
  </Preview>
</>;
