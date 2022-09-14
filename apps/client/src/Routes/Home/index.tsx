import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingFullPage from 'Components/LoadingFullPage';
import usePageview from 'Hooks/usePageView';
import { Router } from 'Routes';

const HomePage = lazy(() => import('./HomePage'));
// const ListItems = lazy(() => import("./ListItems"))

export const Home: Router = ({ match }) => {
  const { path = '' } = match ?? {};

  usePageview({ name: 'home', path });

  return (
    <Switch>
      {/* base home route */}
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<LoadingFullPage />}>
            <HomePage />
          </Suspense>
        )}
      </Route>

      {/* route to list something */}
      {/* 
      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <ListItems id={match.params.id}/>
          </Suspense>
        )}
      </Route> */}
    </Switch>
  );
};

export default Home;
