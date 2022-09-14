import React from 'react';
import { Meta, Preview, Props, Story } from '@storybook/addon-docs/blocks';

import { Button } from '@labfaz/core/src';

const ButtonComponent = () => {
  return (
    <>
      <Meta title="Components/Button" component={Button} />

      <Props of={Button} />

      <Preview>
        <Story name="Default">
          <Button>Hello</Button>
        </Story>
      </Preview>
    </>
  );
};

export default ButtonComponent;
