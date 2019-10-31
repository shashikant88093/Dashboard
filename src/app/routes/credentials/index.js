import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const Credentials = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/credentials`} />
      <Route
        path={`${match.url}/home`}
        component={asyncComponent(() => import("./routes/index"))}
      />
      <Route
        path={`${match.url}/addcredential`}
        component={asyncComponent(() =>
          import("./routes/credentialsTab/index")
        )}
      />
      <Route
        path={`${match.url}/edit`}
        component={asyncComponent(() =>
          import("./routes/credentialsTab/index")
        )}
      />
      <Route
        component={asyncComponent(() =>
          import("app/routes/extraPages/routes/404")
        )}
      />
    </Switch>
  </div>
);

export default Credentials;
