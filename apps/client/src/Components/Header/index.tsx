import React, { FC } from 'react';
import Mobile from 'Components/Header/Mobile';
import Web from 'Components/Header/Web';
import useMobile from 'Hooks/useMobile';

export const Header: FC = () => {
  if (useMobile()) return <Mobile />;
  else return <Web />;
};

export default Header;
