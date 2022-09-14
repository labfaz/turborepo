import React, { FC, useCallback } from 'react';

import Display from './Display';

export const LoginPage: FC = () => {
  const handleSubmit = useCallback(() => undefined, []);

  return <Display onSubmit={handleSubmit} />;
};

export default LoginPage;
