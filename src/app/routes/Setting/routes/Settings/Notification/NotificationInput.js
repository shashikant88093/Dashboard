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
import RadioButton from "../../../../../../components/Extra/RadioButton/index";
import TagButton from "../../../../../../components/Extra/TagButton/Tag";
import "./NotificationInput.css";

class NotificationInput extends React.Component {
  state = {
    open: false,

    title: "Add",
    displayTestButton: false
  };
  componentDidMount() {
    if(this.props.match.url.includes("notification/edit")){
      this.handleClickOpen();
      this.setState({title:"Edit"})
    }
  }
  handleTest = () => {
    this.setState({ displayTestButton: true });
  };
  handleTestCancel = () => {
    this.setState({ displayTestButton: false });
  };

  // componentDidMount() {
  //   if (this.props.match.url.includes("edit")) {
  //     this.handleClickOpen();
  //     this.setState({ title: "Edit" });
  //   }
  // }

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
      <div className="Content">
        <IconButton onClick={this.handleClickOpen}>
          <i className="zmdi zmdi-collection-plus zmdi-hc-fw" />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          className="Dialog"
          fullWidth={true}
          maxWidth={"md"}
        >
          <div style={{ width: 950 }}>
            <DialogTitle id="form-dialog-title">
              {this.state.title} Notification
            </DialogTitle>
            <DialogContent className="DialogContent">
              <div className="jr-card">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-4">
                    <TextField
                      id="Name"
                      label="Configuration Name"
                      value="Shashikant"
                      margin="normal"
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-4"></div>
                </div>
                <div className="col-md-1"></div>
                <br />
                <TagButton name="Email Setting" />
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-4">
                    <TextField
                      id="Username"
                      label="Sender Email"
                      value="UserName@gmail.com"
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      id="Email Server"
                      label="Email Server"
                      value="10.0.0.90"
                      margin="normal"
                      fullWidth
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-4">
                    <TextField
                      id="Password"
                      label="Password"
                      value="Password"
                      margin="normal"
                      type="password"
                      fullWidth
                    />
                    <br />
                    <TextField
                      id="Port"
                      label="Port"
                      value="4040"
                      margin="normal"
                      fullWidth
                    />
                  </div>

                  <div className="col-md-2">
                    <RadioButton />
                  </div>
                </div>
                <TagButton name="Recipient List" />
                <br />
                <br />
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-1 mr-0">
                    <h4>Email Id :</h4>
                  </div>
                  <div className="col-md-4">
                    <TextField
                      id="Email"
                      label="Email 1"
                      value="stackuptech@gmail.com"
                      margin="normal"
                      fullWidth
                    />{" "}
                    <TextField
                      id="Email"
                      label="Email 2"
                      value="stackuptech@gmail.com"
                      margin="normal"
                      fullWidth
                    />{" "}
                    <TextField
                      id="Email"
                      label="Email 3"
                      value="stackuptech@gmail.com"
                      margin="normal"
                      fullWidth
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
                onClick={this.handleTest}
              >
                <IntlMessages id="Setting.SaveSetting" />
              </Button>
              {this.state.displayTestButton ?
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "px", backgroundColor: "#3F51B5" }}

                >
                  <IntlMessages id="Setting.TestSetting" />
                </Button> : null
              }
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#F44336" }}
                onClick={() => this.props.history.push("/app/Setting/notification")}
              >
                <IntlMessages id="Setting.CancelSetting" />
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(NotificationInput);
