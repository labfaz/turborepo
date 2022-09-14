import React, { FC } from 'react';
import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import Web from './Web';

export interface ComposerProps {
  data: SocialNetworksLabfaz;
}

export const Composer: FC<ComposerProps> = ({ data }) => {
  const width = useMobile();

  if (width) return <Mobile data={data} />;
  return <Web data={data} />;
};

export default Composer;
