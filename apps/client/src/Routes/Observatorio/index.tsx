import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import usePageview from 'Hooks/usePageView';
import { Router } from 'Routes';

const ObservatorioPage = lazy(() => import('./ObservatorioPage'));

export const Observatorio: Router = ({ match }) => {
  const { path = '/observatorio' } = match ?? {};

  usePageview({ name: 'observatorio', path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => <ObservatorioPage />}
      </Route>
    </Switch>
  );
};

export default Observatorio;
