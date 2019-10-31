import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import TextField from "@material-ui/core/TextField";
//import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "actions/Auth";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "demo@example.com",
      password: "demo#123"
    };
  }

  state = {
    username: "",
    password: "",
    error: null
  };

  componentDidMount() {
    console.log("props Login ", this.props);
    let headers = {
      "X-Requested-With": "XMLHttpRequest"
    };

    Axios.get("https://10.0.0.83:8043/api/", {
      headers: headers,
      withCredentials: true
    })
      .then(response => {
        console.log(response.headers);
        var csrfCookie = Cookies.get("csrftoken");
        console.log("api response cookie", csrfCookie);
      })
      .catch(error => {
        console.log(error);
      });
  }

  loginHandler = e => {
    console.log("e ", e);
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    var csrfCookie = Cookies.get("csrftoken");
    data = `username=${encodeURIComponent(
      this.state.username
    )}&password=${encodeURIComponent(this.state.password)}&next=%2fapi%2f`;
    console.log(data);

    let headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-CSRFTOKEN": csrfCookie,
      "X-Requested-With": "XMLHttpRequest"
    };

    Axios.post("https://10.0.0.83:8043/api/login/", data, {
      headers: headers,
      withCredentials: true
    })
      .then(response => {
        var csrfCookie = Cookies.get("csrftoken");
        var user = Cookies.get("current_user");
        if (csrfCookie !== null && user !== null) {
          this.setState({ error: null });
          window.location.href = "/app/dashboard/dashboard";
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({ error: error.response.status });
        }
        console.log(error.response.status);
      });
  };

  render() {
    const { email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          {/* <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
            </Link>
          </div> */}

          <div className="app-login-content">
            <div className="app-login-header">
              <img
                className="stackupLogo"
                src={require("assets/images/logo1.png")}
                alt="jambo"
                title="jambo"
              />
              <h1 className="stackupText">
                <IntlMessages id="appModule.loginText" />
              </h1>
            </div>
            {this.state.error === 401 ? (
              <h6 style={{ color: "red" }}>
                *Please provide correct username and password
              </h6>
            ) : null}
            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    defaultValue={email}
                    margin="normal"
                    value={this.state.username}
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    value={this.state.password}
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button
                      onClick={e => this.loginHandler(e)}
                      variant="contained"
                      color="primary"
                      className="login-btn"
                    >
                      <IntlMessages id="appModule.signIn" />
                    </Button>

                    <Link to="/signup">
                      <IntlMessages id="signIn.signUp" />
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

export default connect(
  mapStateToProps,
  {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
  }
)(SignIn);
