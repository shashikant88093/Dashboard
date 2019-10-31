import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const Setting = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/Setting`} />
      <Route
        exact
        path={`${match.url}/home`}
        component={asyncComponent(() => import("./routes/Settings/index"))}
      />
      <Route
        exact
        path={`${match.url}/home/edit`}
        component={asyncComponent(() => import("./routes/Settings/index"))}
      /> <Route
      
      path={`${match.url}/notification/edit`}
      component={asyncComponent(() => import("./routes/Settings/index"))}
    />
      <Route
        path={`${match.url}/UserManagement`}
        component={asyncComponent(() =>
          import("./routes/Settings/UserManagement/index")
        )}
      />
      <Route
        path={`${match.url}/notification`}
        component={asyncComponent(() =>
          import("./routes/Settings/index")
        )}
      />
      <Route
        path={`${match.url}/modules`}
        component={asyncComponent(() =>
          import("./routes/Settings/index")
        )}
      />
      <Route
        path={`${match.url}/projects`}
        component={asyncComponent(() =>
          import("./routes/Settings/index")
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

export default Setting;
