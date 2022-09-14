import React, { FC } from 'react';
import { useSocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import LoadingFullPage from 'Components/LoadingFullPage';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import Web from './Web';

export const Construction: FC = () => {
  const result = useSocialNetworksLabfaz();
  const width = useMobile();

  if (result.isLoading) return <LoadingFullPage />;
  if (result.error) return <div>error: {result.error.message}</div>;

  if (width) return <Mobile data={result.data} />;
  else return <Web data={result.data} />;
};

export default Construction;
