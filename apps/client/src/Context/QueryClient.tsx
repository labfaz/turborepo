import React, { FC } from 'react';
import {
  QueryClient as QC,
  QueryClientProvider as QCProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ShowReactQueryDevtools } from 'FeatureFlags';

export const reactQueryClient = new QC({
  defaultOptions: {},
});

export interface QueryClientProviderProps {
  showDevtools?: boolean;
  children?: React.ReactNode;
}

export const QueryClientProvider: FC<QueryClientProviderProps> = ({
  showDevtools,
  children,
}) => {
  return (
    <QCProvider client={reactQueryClient}>
      {(showDevtools ?? ShowReactQueryDevtools()) && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      {children}
    </QCProvider>
  );
};
