import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Loadable from "../ui-component/Loadable";

const LazyMovies = Loadable(lazy(() => import("../components/MovieList")));
const LazyMoviesDetails = Loadable(
  lazy(() => import("../components/MovieDeets"))
);

//Main ROUTING

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Route path={["/movies", "/movies/detail/:movieId"]}>
      <Switch location={location} key={location.pathname}>
        {/* <AuthGuard> */}
        <Route exact path="/movies" component={LazyMovies} />
        <Route
          exact
          path="/movies/detail/:movieId"
          component={LazyMoviesDetails}
        />
      </Switch>
    </Route>
  );
};

export default MainRoutes;
