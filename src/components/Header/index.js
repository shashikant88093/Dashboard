import React from "react";
import Axios from "../../Axios";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import {
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import AppNotification from "../AppNotification/index";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import { toggleCollapsedNav } from "actions/Setting";
import IntlMessages from "util/IntlMessages";

class Header extends React.Component {
  logout = () => {
    Axios.get("/api/logout/")
      .then(response => {
        Cookies.remove("csrftoken");
        Cookies.remove("current_user");
        var csrfCookie = Cookies.get("csrftoken");
        var user = Cookies.get("current_user");
        console.log("Logout csrf cook ", csrfCookie);
        console.log("Logout user ", user);
        if (typeof csrfCookie === "undefined" && typeof user === "undefined")
          window.location.href = "/signin";
      })
      .catch(error => {
        console.log(error);
      });
  };
  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    });
  };
  onAppsSelect = () => {
    this.setState({
      apps: !this.state.apps
    });
  };
  handleRequestClose = () => {
    this.setState({
      appNotification: false
    });
  };
  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };
  constructor() {
    super();
    this.state = {
      appNotification: false
    };
  }

  render() {
    const { drawerType, navigationStyle, horizontalNavPosition } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "d-block d-xl-none"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? "d-block"
      : "d-none";
    return (
      <AppBar
        className={`app-main-header ${
          navigationStyle === HORIZONTAL_NAVIGATION &&
          horizontalNavPosition === BELOW_THE_HEADER
            ? "app-main-header-top"
            : ""
        }`}
      >
        <Toolbar className="app-toolbar" disableGutters={false}>
          {navigationStyle === HORIZONTAL_NAVIGATION ? (
            <div
              className="d-block d-md-none pointer mr-3"
              onClick={this.onToggleCollapsedNav}
            >
              <span className="jr-menu-icon">
                <span className="menu-icon" />
              </span>
            </div>
          ) : (
            <IconButton
              className={`jr-menu-icon mr-3 ${drawerStyle}`}
              aria-label="Menu"
              onClick={this.onToggleCollapsedNav}
            >
              <span className="menu-icon" />
            </IconButton>
          )}
          <ul className="header-notifications list-inline ml-auto">
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={this.state.appNotification}
                toggle={this.onAppNotificationSelect.bind(this)}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-notifications-none icon-alert animated infinite wobble" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader
                    styleName="align-items-center"
                    heading={<IntlMessages id="appNotification.title" />}
                  />
                  <AppNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item app-tour">
              <IconButton className="logout-btn" onClick={this.logout}>
                <span className="jr-list-link navbar-color">
                  <i className="zmdi zmdi-power zmdi-hc-fw" />
                </span>
              </IconButton>
            </li>
          </ul>

          <div className="ellipse-shape"></div>
        </Toolbar>
      </AppBar>
    );
  }
}
const mapStateToProps = ({ settings }) => {
  const {
    drawerType,
    locale,
    navigationStyle,
    horizontalNavPosition
  } = settings;
  return { drawerType, locale, navigationStyle, horizontalNavPosition };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCollapsedNav }
  )(Header)
);
