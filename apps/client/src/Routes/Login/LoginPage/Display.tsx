import React, { FC } from 'react';

import { Login, LoginComponentProps } from 'Components/Login';

import Wireframe from 'Components/Wireframe';

export const Display: FC<LoginComponentProps> = ({ onSubmit = () => {} }) => {
  return (
    <Wireframe>
      <Login onSubmit={onSubmit} />
    </Wireframe>
  );
};

export default Display;
