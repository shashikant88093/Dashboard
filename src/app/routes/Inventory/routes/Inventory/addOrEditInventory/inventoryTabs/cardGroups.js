import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import TextField from "@material-ui/core/TextField";
import DualListBox from "react-dual-listbox";
import CardBox from "components/CardBox";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Input
} from "reactstrap";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
//import Select from "react-select";

//Import Css
//import 'react-table/react-table.css'
import "../../../../../../../assets/style/table.css";
import "react-dual-listbox/lib/react-dual-listbox.css";
import "./style.css";

const data = [
  { name: "group_test", description: "group testing" },
  { name: "group_awx", description: "awx group" },
  { name: "group_stackup", description: "stackup group" },
  { name: "group_stacbloc", description: "stacbloc group" }
];

const options = [
  {
    label: "Hosts",
    options: [
      {
        label: "10.0.0.25",
        value: "I1"
      },
      {
        label: "10.0.0.45",
        value: "I2"
      },
      {
        label: "10.0.0.89",
        value: "I3"
      },
      {
        label: "10.0.0.52",
        value: "I4"
      },
      {
        label: "10.0.0.23",
        value: "I5"
      },
      {
        label: "10.0.0.15",
        value: "I6"
      },
      {
        label: "10.0.0.48",
        value: "I7"
      }
    ]
  }
];

function TabContainer({ children, dir }) {
  return <div dir={dir}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class InvertoryGroupTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGroup: false,
      isEditGroup: false,
      isGroupOpen: false,
      selected: ["one"],
      value: 0,
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handelAddGroupClick() {
    this.setState(
      { isGroup: true, isEditGroup: false, isGroupOpen: true },
      () => {}
    );
  }
  handelEditGroupClick() {
    this.setState(
      { isEditGroup: true, isGroup: false, isGroupOpen: true },
      () => {}
    );
  }
  onCloseGroupModal = () => {
    this.setState({
      isGroup: false,
      isGroupOpen: false
    });
  };
  onChange = selected => {
    this.setState({ selected });
  };
  render() {
    let newstatus;
    let tableHeigth;
    const { theme } = this.props;
    let addGroup;
    let Inven;
    console.log(`direction`, theme);
    //setting specific text on create or edit operation
    if (data.length < 10) {
      newstatus = data.length;
      tableHeigth = "350px";
    } else {
      newstatus = 10;
      tableHeigth = "350px";
    }

    if (this.state.isGroup === true) {
      Inven = "Add";
    } else if (this.state.isEditGroup === true) {
      Inven = "Edit";
    }
    if (this.state.isGroup === true || this.state.isEditGroup === true) {
      addGroup = (
        <Modal
          open={this.state.isGroupOpen}
          onClose={this.onCloseGroupModal}
          center
        >
          <br></br>
          <Card className="shadow border-0 groupCardMenu">
            <AppBar position="static" color="default" style={{ zIndex: 0 }}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                scrollButtons="on"
              >
                <Tab className="tab" label="Details" />
                <Tab className="tab" label="Hosts" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={this.state.value}
              onChangeIndex={this.handleChangeIndex}
            >
              <TabContainer dir={theme.direction}>
                <div>
                  <CardBody>
                    <Card>
                      <CardBody>
                        <h3 className="card-title">{Inven + " Groups"}</h3>
                        <Container>
                          <Row>
                            <Col md="6" sm="6">
                              <TextField
                                id="groupname"
                                label="Group Name"
                                //value={}
                                onKeyDown={e => {}}
                                onChange={e => {}}
                                margin="normal"
                                fullWidth
                              />
                            </Col>
                            <Col md="6" sm="6">
                              <TextField
                                id="description"
                                label="Description"
                                //value={}
                                onKeyDown={e => {}}
                                onChange={e => {}}
                                margin="normal"
                                fullWidth
                              />
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col md="12">
                              <CardBox
                                heading={
                                  <IntlMessages id="Inventory.Tabs.ModelName" />
                                }
                              >
                                <Card>
                                  <CardBody>
                                    <Row
                                      md="12"
                                      style={{ alignItems: "center" }}
                                    >
                                      <Col lg="5" md="5" sm="5">
                                        <input
                                          type="text"
                                          name="key"
                                          className="form-control"
                                          placeholder="key"
                                          //value={}
                                          onKeyDown={e => {}}
                                          onChange={e => {}}
                                        />
                                      </Col>
                                      <Col lg="6" md="6" sm="6">
                                        <input
                                          type="text"
                                          name="value"
                                          placeholder="Value"
                                          className="form-control"
                                          //value={}
                                          onKeyDown={e => {}}
                                          onChange={e => {}}
                                        />
                                      </Col>
                                      <Col lg="1" md="1" sm="1">
                                        <IconButton
                                          onClick={() => {}}
                                          title="Convert to Yaml Script"
                                        >
                                          <i className="zmdi zmdi-long-arrow-down zmdi-hc-fw" />
                                        </IconButton>
                                      </Col>
                                    </Row>
                                    <br />
                                    <Row md="12">
                                      <Col md="12" sm="12">
                                        <Input
                                          type="textarea"
                                          name="yalm"
                                          id="exampleText"
                                          placeholder="YAML Script"
                                          style={{
                                            maxHeight: "150px",
                                            height: "100px"
                                          }}
                                        />
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                                <div className="d-flex">
                                  <div
                                    className="ml-auto"
                                    style={{
                                      position: "relative",
                                      top: "-27px"
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      style={{ margin: "18px" }}
                                    >
                                      <IntlMessages id="Inventory.SaveInventory" />
                                    </Button>
                                    <Button variant="contained" color="primary">
                                      <IntlMessages id="Inventory.CancelInventory" />
                                    </Button>
                                  </div>
                                </div>
                              </CardBox>
                            </Col>
                          </Row>
                        </Container>
                      </CardBody>
                    </Card>
                  </CardBody>
                </div>
              </TabContainer>
              <TabContainer dir={theme.direction}>
                <br />
                <Card>
                  <div>
                    <CardHeader>Add Host</CardHeader>
                    <CardBody>
                      {/* <Row>
                        <div className="col-md-12">
                <label>Group </label>
                <br/>
                <Select
                  value={this.state.selectedCust}
                  onChange={this.handledropdownChangeMac}
                  options={this.state.macAppDetails}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                      ...theme.colors,

                      primary25: "#CCCCCC",
                      primary: "#555555",
                      primary50: "#CCCCCC"
                    }
                  })}
                />
                </div>
                          </Row> */}
                      <br />
                      <Row>
                        <div className="col-md-12">
                          <DualListBox
                            canFilter
                            preserveSelectOrder
                            alignActions="top"
                            options={options}
                            selected={this.state.selected}
                            onChange={selected => {
                              this.setState({ selected });
                            }}
                            icons={{
                              moveLeft: (
                                <span className="zmdi zmdi-chevron-left" />
                              ),
                              moveAllLeft: [
                                <span
                                  key={0}
                                  className="zmdi zmdi-chevron-left"
                                />,
                                <span
                                  key={1}
                                  className="zmdi zmdi-chevron-left"
                                />
                              ],
                              moveRight: (
                                <span className="zmdi zmdi-chevron-right" />
                              ),
                              moveAllRight: [
                                <span
                                  key={0}
                                  className="zmdi zmdi-chevron-right"
                                />,
                                <span
                                  key={1}
                                  className="zmdi zmdi-chevron-right"
                                />
                              ],
                              moveDown: (
                                <span className="zmdi zmdi-chevron-down" />
                              ),
                              moveUp: <span className="zmdi zmdi-chevron-up" />
                            }}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </div>
                </Card>
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginLeft: "calc(100% - 100px)",
                    marginTop: "15px"
                  }}
                >
                  <IntlMessages id="Inventory.SaveInventory" />
                </Button>
              </TabContainer>
            </SwipeableViews>
          </Card>
        </Modal>
      );
    }
    return (
      <div className="main-content">
        <div className="d-flex">
          <div className="ml-auto">
            <IconButton
              onClick={() => {
                this.handelAddGroupClick();
              }}
            >
              <i className="zmdi zmdi-collection-plus zmdi-hc-fw" />
            </IconButton>
          </div>
        </div>
        <ReactTable
          data={data}
          filterable
          columns={[
            {
              Header: "S.NO",
              id: "row",
              Cell: row => {
                return <div>{row.index + 1}</div>;
              },
              sortable: false,
              filterable: false,

              foldable: true
            },
            {
              Header: "Groups",
              accessor: "name",

              foldable: true
            },
            {
              Header: "Description",
              accessor: "description",

              foldable: true
            },
            {
              Header: "Action",
              sortable: false,
              filterable: false,
              style: { textAlign: "center !important" },
              id: "button",
              Cell: row => {
                return (
                  <div>
                    <IconButton
                      className=""
                      onClick={() => {
                        this.handelEditGroupClick();
                      }}
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

        {addGroup}
      </div>
    );
  }
}
InvertoryGroupTable.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(null, { withTheme: true })(InvertoryGroupTable);
