import { useCurrentUserToken } from 'Context/LoggedUserToken';
import usePageview from 'Hooks/usePageView';
import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Router } from 'Routes';

const EditProfilePage = lazy(() => import('./EditProfilePage'));

export const EditProfile: Router = ({ match }) => {
  const { token } = useCurrentUserToken();
  const { path = '/EditProfile' } = match ?? {};
  usePageview({ name: 'editProfile', path: path });

  if (!token) return <Redirect to="/" />;

  return (
    <Switch>
      <Route exact path={path}>
        {() => <EditProfilePage token={token} />}
      </Route>
    </Switch>
  );
};

export default EditProfile;
