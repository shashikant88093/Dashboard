import React, { Component } from "react";
import ReactTable from "react-table";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router";

//Import Css
import "../../../../../assets/style/table.css";
// import { flexbox } from "@material-ui/system";

const data = [
  { name: "Credentails-One", description: "credentials" },
  {
    name: "Credentails-Two",
    description: "credentials"
  },
  {
    name: "Credentails-Three",
    description: "credentials"
  },
  { name: "Credentails-Four", description: "credentials" }
];
class CredentialsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginat: false,
      defaultPage: 0
    };
  }

  Pagination() {
    console.log(`hello`, data.length);
    if (data.length > 10) {
      console.log("enter after 10");
      this.setState({ paginat: true });
    }
  }

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
      <div>
        <ReactTable
          data={data}
          filterable
          columns={[
            {
              Header: "ID",
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
              Header: "Name",
              accessor: "name",
              filterable: true,
              className: "Name TextCenter",
              headerClassName: "Name TextCenter",
              foldable: true
            },

            {
              Header: "Description",
              accessor: "description",
              filterable: true,
              foldable: true,
              className: "Description TextCenter",
              headerClassName: "Description TextCenter"
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
                        this.props.history.push("/app/credentials/edit/")
                      }
                    >
                      <i className="zmdi zmdi-edit zmdi-hc-fw table-icon" />
                    </IconButton>

                    <IconButton className="">
                      <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                    </IconButton>
                  </div>
                );
              }
            }
          ]}
          defaultPageSize={newstatus}
          //showPaginationTop
          style={{
            height: tableHeigth,
            border: "none",
            borderBottom: "none"
          }}
          // getTrGroupProps = {this.getTrGroupProps}
          // getTheadProps={this.getTheadProps}
          // getTheadFilterProps={this.getTheadFilterProps}
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
    );
  }
}
export default withRouter(CredentialsList);
