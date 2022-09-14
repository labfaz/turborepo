import React, { FC } from 'react';
import Wireframe from 'Components/Wireframe';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import Web from './Web';

export const Display: FC = () => {
  const isMobile = useMobile();
  return <Wireframe>{isMobile ? <Mobile /> : <Web />}</Wireframe>;
};

export default Display;
