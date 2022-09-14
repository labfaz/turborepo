import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import usePageview from 'Hooks/usePageView';
import { Router } from 'Routes';

const UserSearchPage = lazy(() => import('./UserSearchPage/index'));

export const UserSearch: Router = ({ match }) => {
  const { path = '/banco-profissionais' } = match ?? {};
  usePageview({ name: 'banco-profissionais', path: path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => <UserSearchPage />}
      </Route>
    </Switch>
  );
};

export default UserSearch;
