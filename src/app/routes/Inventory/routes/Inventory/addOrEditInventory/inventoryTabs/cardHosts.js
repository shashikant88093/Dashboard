import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Modal from 'react-responsive-modal';
import TextField from '@material-ui/core/TextField';
//import DualListBox from 'react-dual-listbox';
import CardBox from 'components/CardBox';
//import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import { Card, CardBody, Container, Row, Col, Input } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';


//Import Css
//import 'react-table/react-table.css'
import '../../../../../../../assets/style/table.css'
import 'react-dual-listbox/lib/react-dual-listbox.css';
import './style.css'


const data = [{ name: "10.0.0.45", description: "inventory", organization: "new1" },
{ name: "10.0.0.73", description: "inventory", organization: "group1" },
{ name: "10.0.0.25", description: "inventory", organization: "new1" },
{ name: "10.0.0.67", description: "inventory", organization: "group1" },
]

// const options = [
//   { value: 'one', label: 'Option One' },
//   { value: 'two', label: 'Option Two' },
// ];
class InvertoryTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHost: false,
      isEditHost: false,
      isHostOpen: false,
      selected: ['one'],
      paginat: false,
      defaultPage: 0,
    }
  }

  Pagination(){
    console.log(`hello`,data.length)
    if(data.length > 10){
      console.log("enter after 10")
      this.setState({paginat : true})
    }
  }

 componentDidMount(){
   this.Pagination()
 }

  handelAddHostClick() {
    this.setState({ isHost: true, isEditHost: false, isHostOpen: true }, () => {
    });
  }
  handelEditHostClick() {
    this.setState({ isEditHost: true, isHost: false, isHostOpen: true }, () => {
    });
  }
  onCloseHostModal = () => {
    this.setState({
      isHost: false,
      isHostOpen: false
    });
  };
  onChange = (selected) => {
    this.setState({ selected });
  };
  render() {
    let newstatus;
    let tableHeigth;
    let addHost;
    let Inven;

 if(data.length < 10){
    newstatus = data.length
    tableHeigth = "350px"
  }
  else {
    newstatus = 10
    tableHeigth = "350px"
  }

      //setting specific text on create or edit operation
  if(this.state.isHost === true){
    Inven = "Add"
  }
  else if(this.state.isEditHost === true){
    Inven = "Edit"
  }
    if (this.state.isHost === true || this.state.isEditHost === true) {
      addHost = (
        <Modal open={this.state.isHostOpen} onClose={this.onCloseHostModal} center>
          <br></br>
          <Card     
          className="hostCardMenu">
            <CardBody>
              <h3 className="card-title">{Inven + " Hosts"}</h3>
              <Container>
                <Row>
                  <Col md="6" sm="6">
                    <TextField
                      id="hostname"
                      label="Host Name"
                      //value={}
                      onKeyDown={e => { }}
                      onChange={e => { }}
                      margin="normal"
                      fullWidth
                    />
                  </Col>
                  <Col md="6" sm="6">
                    <TextField
                      id="description"
                      label="Description"
                      //value={}
                      onKeyDown={e => { }}
                      onChange={e => { }}
                      margin="normal"
                      fullWidth
                    />
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col md="12">
                  <CardBox   heading={<IntlMessages id="Inventory.Tabs.ModelName"/>}>
                    <Card>
                      <CardBody>
                        {/* <DualListBox
                options={options}
                selected={this.state.selected}
                onChange={this.onChange}
            /> */}
            <Row md="12"
            style={{alignItems:"center"}}>
                        <Col lg="5" md="5" sm="5">
                          <input
                            type="text"
                            name="key"
                            className="form-control"
                            placeholder="key"
                            //value={}
                            onKeyDown={e => {
                            }}
                            onChange={e => {
                            }}
                          />
                        </Col>
                        <Col lg="6" md="6" sm="6">
                          <input
                            type="text"
                            name="value"
                            placeholder="Value"
                            className="form-control"
                            //value={}
                            onKeyDown={e => {
                            }}
                            onChange={e => {
                            }}
                          />
                        </Col>
                        <Col lg="1" md="1" sm="1">
            <IconButton onClick={() => {
            }} title="Convert to Yaml Script">
              <i className="zmdi zmdi-long-arrow-down zmdi-hc-fw" />
            </IconButton>
        </Col>
                        </Row>
                        <br/>
                        <Row md="12"> 
                        <Col md="12" sm="12">
                      <Input 
                      type="textarea" 
                      name="yalm" 
                      id="exampleText"
                      placeholder="YAML Script"
                      style={{maxHeight: "150px",
                      height:"100px"}}
                       />
                        </Col>
                          </Row>
                      </CardBody>
                    </Card>
                    
                    {/* <Card>
                    <h3 className="card-title">Variables</h3>
                      <CardBody>
                      <Col md="12" sm="12">
                      <Input 
                      type="textarea" 
                      name="yalm" 
                      id="exampleText"
                      placeholder="YAML Script"
                      style={{maxHeight: "150px",
                      height:"100px"}}
                       />
                        </Col>
                      </CardBody>
                      </Card> */}
                                      <div className="d-flex">
          <div className="ml-auto" style={{
            position:"relative",
            top: "-27px"
          }}>
                <Button variant="contained" color="primary" style={{margin: "18px"}}>
                      <IntlMessages id="Inventory.SaveInventory"/>
                    </Button>
                    <Button variant="contained" color="primary"> 
                      <IntlMessages id="Inventory.CancelInventory"/>
                    </Button>
                    </div>
                    </div>
                    </CardBox>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Modal>
      );
    }
    return (
      <div className="main-content">
        <div className="d-flex">
          <div className="ml-auto">
            <IconButton onClick={() => {
              this.handelAddHostClick();
            }}>
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
              Header: "Host",
              accessor: "name",

              foldable: true
            },
            {
              Header: "Description",
              accessor: "description",

              foldable: true
            },
            {
              Header: "Related Groups",
              accessor: "organization",

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
                    <IconButton className=""
                    onClick={() => {
                      this.handelEditHostClick();
                    }} >
                      <i className="zmdi zmdi-edit zmdi-hc-fw table-icon" />
                    </IconButton>
                    <IconButton className="" >
                      <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                    </IconButton>
                  </div>
                );
              }
            }
          ]}
          defaultPageSize={newstatus }
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

        {addHost}
      </div>
    );
  }
}
export default InvertoryTable;