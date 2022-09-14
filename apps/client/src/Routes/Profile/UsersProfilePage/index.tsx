import React, { FC } from 'react';
import { useUser } from 'Api/Profile';
import LoadingFullPage from 'Components/LoadingFullPage';
import Error from 'Pages/Error';

import Display from './Display';

interface UserProfilePageProps {
  id: string;
}

export const ProfilePage: FC<UserProfilePageProps> = ({ id }) => {
  const user = useUser(id);

  if (user.isLoading || user.isLoading) return <LoadingFullPage />;

  if (!user.data) {
    return (
      <Error
        errorStatus={user.error.response?.status}
        errorMessage={user.error.response?.statusText}
      />
    );
  } else {
    // Evitando colocar esse dado no perfil aleio
    user.data.artist.medicalReport = undefined;
    return <Display data={user.data} />;
  }
};

export default ProfilePage;
