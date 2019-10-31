import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const Inventory = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/inventory`} />
      <Route
        path={`${match.url}/home`}
        component={asyncComponent(() => import("./routes/Inventory/index"))}
      />
      <Route
        path={`${match.url}/addinventory`}
        component={asyncComponent(() =>
          import("./routes/Inventory/addOrEditInventory/Add_inventory")
        )}
      />
      <Route
        path={`${match.url}/editinventory`}
        component={asyncComponent(() =>
          import("./routes/Inventory/addOrEditInventory/Add_inventory")
        )}
      />
      <Route
        path={`${match.url}/hosts`}
        component={asyncComponent(() =>
          import("./routes/Inventory/hostsAndGroup/Hosts/index")
        )}
      />
      <Route
        path={`${match.url}/groups`}
        component={asyncComponent(() =>
          import("./routes/Inventory/hostsAndGroup/Groups/index")
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

export default Inventory;
