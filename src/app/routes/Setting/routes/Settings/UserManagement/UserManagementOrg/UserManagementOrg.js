import React, { Component } from "react";
import TagButton from "../../../../../../../components/Extra/TagButton/Tag";
import IntlMessages from "util/IntlMessages";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class UserManagementOrg extends Component {
  render() {
    return (
      <>
        <TagButton name="Organization" />

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <TextField
              label="Organization"
              defaultValue="Stackup"
              margin="normal"
              fullWidth
            />
            
           
          </div>
          <div className="col-md-4">
            <br/> 
            <br/> <div className="d-flex">
              <div
                className="mr-auto"
                style={{
                  position: "relative",
                  top: "-27px"
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "18px", backgroundColor: "#4CAF50" }}
                >
                  <IntlMessages id="Credentials.SaveCredentials" />
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#F44336" }}
                >
                  <IntlMessages id="Credentials.CancelCredentials" />
                </Button>
              </div>
            </div></div>
        </div>
      </>
    );
  }
}

export default UserManagementOrg;
