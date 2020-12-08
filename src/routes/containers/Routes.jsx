import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
// import CONSTANTS from "../../constants";
import history from "../../utils/history";
import { Show, ShowEpisode } from "../../modules/show";

// const { ROUTES } = CONSTANTS;

const RootRoutes = ({ isSynced }) => {
  // useEffect(() => {}, []);

  // if (!isSynced) {
  //   return "loading";
  // }

  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/show/:showId?" component={Show} />
          <Route
            exact
            path="/show/:showId/season/:seasonNum/episode/:episodeNum"
            component={ShowEpisode}
          />
          <Redirect to="/show" />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default RootRoutes;
