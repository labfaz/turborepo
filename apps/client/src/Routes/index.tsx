import React, { FC, lazy, Suspense } from 'react';
import {
  match,
  Route,
  StaticRouter as BaseRouter,
  Switch,
} from 'react-router-dom';
import LoadingFullPage from 'Components/LoadingFullPage';

const Home = lazy(() => import('./Home'));
// const PeopleExample = lazy(() => import("./PeopleExample"))
// const SingletonExample = lazy(() => import("./SingletonExample"))

export type RouterProps<
  MatchParams extends {
    [K in keyof MatchParams]?: string | undefined;
  } = Record<string, string | undefined>
> = {
  history?: History;
  location?: Location;
  match: match<MatchParams> | null;
};
export type Router<
  T extends { [K in keyof T]?: string | undefined } = Record<
    string,
    string | undefined
  >
> = FC<RouterProps<T>>;

const Routes: FC = () => {
  return (
    <BaseRouter>
      <Switch>
        {/* default route */}
        <Route exact path="/">
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>

        {/* home router */}
        <Route path={['/home']}>
          {({ match }) => (
            <Suspense fallback={<LoadingFullPage />}>
              <Home match={match} />
            </Suspense>
          )}
        </Route>
      </Switch>
    </BaseRouter>
  );
};

export default Routes;
