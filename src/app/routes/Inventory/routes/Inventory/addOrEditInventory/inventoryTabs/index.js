import React from "react";
import TabCards from "./tabCards";
import CardBox from "components/CardBox";
import IntlMessages from "util/IntlMessages";
import { withRouter } from "react-router";
import queryString from "query-string";
import OrderTable from "../../Inventory_table/inventoryReactTable";

class Cards extends React.Component {
  render() {
    let url = this.props.location.search;
    let querstring = queryString.parse(url);
    let data = querstring.data;
    return (
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="row mb-md-3">
          <div className="col-lg-12 col-12">
            <CardBox heading={<IntlMessages id={data} />}>
              <TabCards />
            </CardBox>
          </div>
        </div>
        <br />
        <div className="row mb-md-3">
          <div className="col-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">
                  <IntlMessages id="table.Inventory" />
                </h3>
              </div>
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Cards);
