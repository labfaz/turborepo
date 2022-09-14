import React, { FC } from 'react';
import { useRecoverPassImage } from 'Api/RecoverPassImage';
import LoadingFullPage from 'Components/LoadingFullPage';
import Error from 'Pages/Error';

import Display from './Display';

interface RecoverPasswordPageProps {
  token: string;
}

export const RecoverPasswordPage: FC<RecoverPasswordPageProps> = ({
  token,
}) => {
  const response = useRecoverPassImage();

  if (response.isLoading) return <LoadingFullPage />;
  if (response.error)
    return (
      <Error
        errorMessage={response.error.response?.statusText}
        errorStatus={response.error.response?.status}
      />
    );

  return <Display image={response.data} token={token} />;
};

export default RecoverPasswordPage;
