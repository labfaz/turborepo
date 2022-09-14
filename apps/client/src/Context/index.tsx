import React, { FC } from 'react';

import { CurrentUserProvider } from './LoggedUserToken';
import { QueryClientProvider } from './QueryClient';

type TContext = { children?: React.ReactNode };

export const GlobalContext: FC<TContext> = ({ children }) => {
  return (
    <QueryClientProvider>
      <CurrentUserProvider>{children}</CurrentUserProvider>
    </QueryClientProvider>
  );
};

export default GlobalContext;
