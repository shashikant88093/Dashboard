import React, { Component } from "react";

import ReactTable from "react-table";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router";
// import "../../../../../../../assets/style/table.css";
import NotificationInput from "./NotificationInput";

const data = [{ users: "harish stackup" }];
class Notification extends Component {
  state = {
    paginat: false,
    defaultPage: 0
  };

  Pagination = () => {
    console.log(`hello`, data.length);
    if (data.length > 10) {
      console.log("enter after 10");
      this.setState({ paginat: true });
    }
  };

  componentDidMount() {
    this.Pagination();
  }
  render() {
    let newstatus;
    let tableHeigth;
    if (data.length < 10) {
      newstatus = data.length;
      tableHeigth = "auto";
    } else {
      newstatus = 10;
      tableHeigth = "600px";
    }
    return (
      <>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <br />
            <br />
            <ReactTable
              data={data}
              filterable
              columns={[
                {
                  Header: "Serial No",
                  id: "row",
                  className: "ID TextCenter",
                  headerClassName: "ID TextCenter",
                  Cell: row => {
                    return <div>{row.index + 1}</div>;
                  },
                  sortable: false,
                  filterable: false,
                  foldable: true,
                  width: 100
                },
                {
                  Header: "Configration Name",
                  accessor: "users",
                  filterable: true,
                  className: "Name TextCenter",
                  headerClassName: "Name TextCenter",
                  foldable: true
                },
                {
                  Header: "Email Server",
                  accessor: "users",
                  filterable: true,
                  className: "Name TextCenter",
                  headerClassName: "Name TextCenter",
                  foldable: true
                },
                {
                  Header: "Action",
                  sortable: false,
                  filterable: false,
                  className: "Action TextCenter",
                  headerClassName: "Action TextCenter",
                  id: "button",

                  Cell: row => {
                    return (
                      <div>
                        <IconButton
                          className=""
                          onClick={() =>
                            this.props.history.push("/app/Setting/notification/edit/")
                          }
                        >
                          <i className="zmdi zmdi-edit zmdi-hc-fw table-icon" />
                        </IconButton>
                      </div>
                    );
                  }
                }
              ]}
              defaultPageSize={newstatus}
              style={{
                height: tableHeigth,
                border: "none",
                borderBottom: "none"
              }}
              showPaginationBottom={this.state.paginat}
              className="-highlight customer"
              defaultFilterMethod={(filter, row, column) => {
                const id = filter.pivotId || filter.id;
                return row[id] !== undefined
                  ? String(row[id])
                      .toLowerCase()
                      .indexOf(filter.value.toLowerCase()) !== -1
                  : true;
              }}
            />
          </div>
          <div className="col-md-2">
            <br />{" "}
            <div className="mr-auto">
              <NotificationInput />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Notification);
