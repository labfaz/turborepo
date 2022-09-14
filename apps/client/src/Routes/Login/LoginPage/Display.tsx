import React, { FC } from 'react';
import { Login, LoginComponentProps } from 'Components/Login';
import Wireframe from 'Components/Wireframe';

export const Display: FC<LoginComponentProps> = ({
  onSubmit = () => undefined,
}) => {
  return (
    <Wireframe>
      <Login onSubmit={onSubmit} />
    </Wireframe>
  );
};

export default Display;
