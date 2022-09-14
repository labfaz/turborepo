import React, { FC } from 'react';
import useMobile from 'Hooks/useMobile';

import Mobile from './Mobile';
import Web from './Web';

interface UserCardData {
  data: {
    id: string;
    isVerified: boolean;
    name: string;
    area: {
      name: string;
    }[];
    photo: string;
    description: string;
  };
}

export const UserCard: FC<UserCardData> = ({ data }) => {
  const isMobile = useMobile();

  return isMobile ? <Mobile data={data} /> : <Web data={data} />;
};

export default UserCard;
