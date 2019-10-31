import React from "react";
import { Link } from "react-router-dom";
import OrderTable from "./Inventory_table/inventoryReactTable";
import IntlMessages from "util/IntlMessages";
import IconButton from "@material-ui/core/IconButton";
class Inventory extends React.Component {
  render() {
    return (
      <div>
        <div className="row mb-md-3">
          <div className="col-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">
                  <IntlMessages id="table.Inventory" />
                </h3>
                <div className="ml-auto">
                  <IconButton className="logout-btn">
                    <Link
                      className="jr-list-link"
                      to="/app/Inventory/addinventory?data=Add Inventory"
                      title="Add Inventory"
                    >
                      <i className="zmdi zmdi-collection-plus zmdi-hc-fw" />
                    </Link>
                  </IconButton>
                </div>
              </div>
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
