import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./CredentialInput.css";
import { Form } from "react-bootstrap";
import TagButton from "../../../../../components/Extra/TagButton/Tag";
import IntlMessages from "util/IntlMessages";
import AutoFill from "../../../../../components/Extra/AutoFill/AutoFill";

const suggestions = [
  { label: "sudo" },
  { label: "su " },
  { label: "pbrun" },
  { label: "pfexec" },
  { label: "dzdo" },
  { label: "pmrun" },
  { label: "runas" },
  { label: "enales" },
  { label: "doas" },
  { label: "ksu" },
  { label: "machinectl" },
  { label: "sesu" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

class CredentialInput extends React.Component {
  state = {
    suggestion: ""
  };

  handleChangeSingle = value => {
    console.log("suggestions", value);
    this.setState({ suggestion: value });
  };

  render() {
    return (
      <div className="card">
        <Form>
          <div className="row">
            <div className="col-md-4">
              <TextField
                id="filled-name"
                label="Name"
                className="FieldBox"
                margin="normal"
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="filled-Description"
                label="Description"
                className="FieldBox"
                margin="normal"
              />
            </div>
            <div className="col-md-4">
              <TextField
                disabled
                id="filled-disabled"
                label="Organization"
                defaultValue="Stackup Technology"
                margin="normal"
                variant="filled"
              />
            </div>
          </div>{" "}
          <br />
          <div className="row">
            <div className="col-md-4">
              <TextField
                disabled
                id="filled-disabled"
                label="Credetial Type"
                defaultValue="Machine"
                margin="normal"
                variant="filled"
              />
            </div>
            <div className="col-md-4">
              <TextField
                required
                id="filled-required"
                label="Username"
                margin="normal"
              />
            </div>
            <div className="col-md-4">
              <TextField
                required
                id="filled-required"
                label="Password"
                margin="normal"
              />
            </div>
          </div>
          <br />
          <TagButton name="Previlage Escalation" />
          <br />
          <div className="row">
            <div className="col-md-4">
              <AutoFill
                options={suggestions}
                handleChangeSingle={this.handleChangeSingle}
                placeholder="Method"
                value={this.state.value}
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="filled-required"
                label="Username"
                margin="normal"
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="filled-required"
                label="Password"
                margin="normal"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="d-flex">
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
                style={{ margin: "18px", backgroundColor:"#4CAF50" }}
              >
                <IntlMessages id="Credentials.SaveCredentials" />
              </Button>
              <Button variant="contained" color="primary" style={{backgroundColor:"#F44336"}}>
                <IntlMessages id="Credentials.CancelCredentials" />
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
export default CredentialInput;
