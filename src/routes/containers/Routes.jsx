import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import CONSTANTS from "../../constants";
import history from "../../utils/history";
import { Show, ShowEpisode } from "../../modules/show";

const { ROUTES } = CONSTANTS;

const RootRoutes = ({ isSynced }) => {
  // if (!isSynced) {
  //   return "loading";
  // }

  return (
    <div className="container">
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={`/${ROUTES.SHOW}`} component={Show} />
          <Route
            exact
            path={`/${ROUTES.SHOW_EPISODE}`}
            component={ShowEpisode}
          />
          <Redirect to="/show" />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default RootRoutes;
