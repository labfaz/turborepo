import React from 'react';
import { StaticRouter } from 'react-router-dom';
import VLibras from '@djpfs/react-vlibras';
import GlobalContext from 'Context';
import { ShowRoutes } from 'FeatureFlags';
import GlobalStyles from 'GlobalStyles';
import useGoogleAnalytics from 'Hooks/useInitializeGA';
import Construction from 'Pages/Construction';
import Routes from 'Routes';

export const App = () => {
  useGoogleAnalytics();

  return (
    <>
      <VLibras />
      <GlobalStyles />
      <GlobalContext>
        {ShowRoutes() ? (
          <Routes />
        ) : (
          <StaticRouter>
            <Construction />
          </StaticRouter>
        )}
      </GlobalContext>
    </>
  );
};

export default App;
