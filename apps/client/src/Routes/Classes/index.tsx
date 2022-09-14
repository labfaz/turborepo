import React, { lazy } from 'react';
import {
  Route,
  // RouteComponentProps,
  Switch,
} from 'react-router-dom';
import usePageview from 'Hooks/usePageView';
import { Router } from 'Routes';

const ClassesPage = lazy(() => import('./ClassesPage'));
const ClassDetails = lazy(() => import('./ClassDetails'));

export const Classes: Router = ({ match }) => {
  const { path = '/classes' } = match ?? {};

  usePageview({ name: 'classes', path });

  return (
    <Switch>
      <Route exact path={path}>
        {() => <ClassesPage />}
      </Route>
      show de um curso
      <Route path={`${path}/:id`}>
        {/* {({ match }: RouteComponentProps<{ id: string }>) => ( */}
        <ClassDetails id={match?.params.id as string} />
        {/* )} */}
      </Route>
    </Switch>
  );
};

export default Classes;
