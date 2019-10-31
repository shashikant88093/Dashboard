import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import IconButton from '@material-ui/core/IconButton';


//Import Css
import '../../../../../../assets/style/table.css'
const data = [{ name: "newinventory", description: "inventory", organization: "Stakup Tech" },
{ name: "cluster", description: "inventory", organization: "Stakup Tech" },
{ name: "ALL_IP", description: "inventory", organization: "Stakup Tech" },
{ name: "Dynamic Inventory	", description: "inventory", organization: "Stakup Tech" },
{ name: "newinventory", description: "inventory", organization: "Stakup Tech" },
{ name: "cluster", description: "inventory", organization: "Stakup Tech" },
{ name: "ALL_IP", description: "inventory", organization: "Stakup Tech" },
{ name: "Dynamic Inventory	", description: "inventory", organization: "Stakup Tech" },
{ name: "newinventory", description: "inventory", organization: "Stakup Tech" },
{ name: "cluster", description: "inventory", organization: "Stakup Tech" },
{ name: "ALL_IP", description: "inventory", organization: "Stakup Tech" },
]
class InvertoryTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paginat: false,
      defaultPage: 0,
    }
  }

  Pagination() {
    console.log(`hello`, data.length)
    if (data.length > 10) {
      console.log("enter after 10")
      this.setState({ paginat: true })
    }
  }

  componentDidMount() {
    this.Pagination()
  }
  render() {
    let newstatus;
    let tableHeigth;
    if (data.length < 10) {
      newstatus = data.length
      tableHeigth = "auto"
    }
    else {
      newstatus = 10
      tableHeigth = "600px"
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
              Cell: row => {
                return <div>{row.index + 1}</div>;
              },
              sortable: false,
              filterable: false,
              width: 100,
              foldable: true
            },
            {
              Header: "Name",
              accessor: "name",
              foldable: true,
              className: "Name TextCenter",
              headerClassName: "Name TextCenter",

            },

            {
              Header: "Description",
              accessor: "description",
               className: "description TextCenter",
              headerClassName: "description TextCenter",

              foldable: true
            },
            {
              Header: "Organization",
              accessor: "organization",
              className: "organization TextCenter",
              headerClassName: "organization TextCenter",
              foldable: true
            },
            {
              Header: "Action",
              sortable: false,
              filterable: false,
              className: "Action TextCenter",
              headerClassName: "Action TextCenter",
              style: { textAlign: "center !important" },
              id: "button",
              Cell: row => {
                return (
                  <div>
                    <Link to="/app/Inventory/editinventory?data=Edit Inventory"
                      style={{ textDecoration: "none" }}>
                      <IconButton className="" >
                        <i className="zmdi zmdi-edit zmdi-hc-fw table-icon" />

                      </IconButton>
                    </Link>
                    <IconButton className="" >
                      <i className="zmdi zmdi-copy zmdi-hc-fw table-icon" />
                    </IconButton>
                    <IconButton className="" >
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
            height: tableHeigth // This will force the table body to overflow and scroll, since there is not enough room
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
    );
  }
}
export default InvertoryTable;