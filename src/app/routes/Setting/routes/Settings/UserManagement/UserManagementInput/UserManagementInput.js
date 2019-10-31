import React from "react";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import IntlMessages from "util/IntlMessages";
import DialogTitle from "@material-ui/core/DialogTitle";

class UserManagementInput extends React.Component {
  state = {
    Username: "Harish@gmail.com",
    Email: "Email Id",
    Password: "Password",
    ConfirmPassword: "ConfirmPassword",
    UserType: "System Admin",
    open: false,
    values: [],
    title: "Add"
  };

  componentDidMount() {
    if (this.props.match.url.includes("home/edit")) {
      this.handleClickOpen();
      this.setState({ title: "Edit" });
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <i className="zmdi zmdi-collection-plus zmdi-hc-fw" />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {this.state.title} Users
          </DialogTitle>
          <DialogContent>
            <div className="jr-card">
              <div className="row">
                <div className="col-sm-6">
                  <TextField
                    id="Username"
                    label="Username"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    id="Password"
                    label="Password"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    disabled
                    id="User Type"
                    label="User Type"
                    defaultValue="System-Admin"
                    margin="normal"
                    variant="filled"
                  />
                </div>{" "}
                <div className="col-sm-6">
                  <TextField
                    id="Email Id"
                    label="Email Id"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    id="Confirm-Password"
                    label="Confirm-Password"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "px", backgroundColor: "#4CAF50" }}
              onClick={this.handleClose}
            >
              <IntlMessages id="Setting.SaveSetting" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#F44336" }}
              onClick={() => this.props.history.push('/app/Setting/home')}
            >
              <IntlMessages id="Setting.CancelSetting" />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(UserManagementInput);
