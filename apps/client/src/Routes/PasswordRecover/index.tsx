import React, { lazy } from 'react';
import {
  Route,
  // RouteComponentProps,
  Switch,
} from 'react-router-dom';
import usePageView from 'Hooks/usePageView';
import { Router } from 'Routes';

const AskResetPage = lazy(() => import('./AskReset'));
const ResetEmail = lazy(() => import('./ResetEmail'));

export const PasswordRecover: Router = ({ match }) => {
  const { path = 'recover' } = match ?? {};

  // eslint-disable-next-line @cspell/spellchecker
  usePageView({ name: 'recuperacao', path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => <AskResetPage />}
      </Route>

      <Route path={`${path}/:token`}>
        {/* {({ match }: RouteComponentProps<{ token: string }>) => ( */}
        <ResetEmail token={match?.params.token as string} />
        {/* )} */}
      </Route>
    </Switch>
  );
};

export default PasswordRecover;
