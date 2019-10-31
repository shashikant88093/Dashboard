import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';



class SidenavContent extends Component {

  componentDidMount() {
    const { history } = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {
        const parentLiEle = that.closest(this, "li");
        if (menuLi[i].classList.contains("menu") && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains("open")) {
            menuLi[i].classList.remove("open", "active");
          } else {
            menuLi[i].classList.add("open", "active");
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, "li");
            if (
              menuLi[j] !== this &&
              (parentLi === null || !parentLi.classList.contains("open"))
            ) {
              menuLi[j].classList.remove("open");
            } else {
              if (menuLi[j].classList.contains("open")) {
                menuLi[j].classList.remove("open");
              } else {
                menuLi[j].classList.add("open");
              }
            }
          }
        }
      };
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) { }
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    const pathname = `${history.location.pathname}`; // get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) { }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function (fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) { }

    return null;
  }

  render() {
    const { ToggleButton, toggleButtonHandler } = this.props
    return (
      <CustomScrollbars className=" scrollbar">
        <Button onClick={toggleButtonHandler}>☰</Button>
        {ToggleButton ? <>
          <ul className="nav-menu">
            <li className="menu no-arrow">
              <NavLink className="prepend-icon" to="/app/dashboard/dashboard">
                <Tooltip title="Dashboard" aria-label="Dashboard">
                  <i className="zmdi zmdi-email zmdi-hc-2x" />
                </Tooltip>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink className="prepend-icon" to="/app/Inventory/home">
                <Tooltip title="Inventory" aria-label="Inventory">
                  <i className="zmdi zmdi-view-dashboard zmdi-hc-2x" />
                </Tooltip>
              </NavLink>

              <ul className="sub-menu ">
                <li>
                  <NavLink className="prepend-icon" to="/app/Inventory/hosts">
                    <i class="zmdi zmdi-account-o zmdi-hc-2x" />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="prepend-icon" to="/app/Inventory/groups">
                    <i class="zmdi zmdi-accounts-alt zmdi-hc-2x" />
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu no-arrow">
              <NavLink className="prepend-icon" to="/app/credentials/home">
                <Tooltip title="credentails" aria-label="credentails">
                  <i className="zmdi zmdi-key zmdi-hc-2x" />
                </Tooltip>

              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink className="prepend-icon" to="/app/Setting/home">
                {/* <Tooltip title="settings" aria-label="settings"> */}
                <i class="zmdi zmdi-settings zmdi-hc-2x" />
                {/* </Tooltip> */}

              </NavLink>
            </li>

          </ul>
        </> :
          <>
            <ul className="nav-menu">
              <li className="menu no-arrow">
                <NavLink className="prepend-icon" to="/app/dashboard/dashboard">
                  <i className="zmdi zmdi-email zmdi-hc-fw" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.appModule.dashboard" />
                  </span>
                </NavLink>
              </li>
              <li className="menu collapse-box">
                <NavLink className="prepend-icon" to="/app/Inventory/home">

                  <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                  <span className="nav-text">
                    <IntlMessages id="sidebar.Inventory" />
                  </span>
                </NavLink>

                <ul className="sub-menu">
                  <li>
                    <NavLink className="prepend-icon" to="/app/Inventory/hosts">
                      <i class="zmdi zmdi-account-o" />
                      <span className="nav-text">
                        <IntlMessages id="sidebar.Inventory.Host" />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="prepend-icon" to="/app/Inventory/groups">
                      <i class="zmdi zmdi-accounts-alt" />
                      <span className="nav-text">
                        <IntlMessages id="sidebar.Inventory.Group" />
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu no-arrow">
                <NavLink className="prepend-icon" to="/app/credentials/home">
                  <i className="zmdi zmdi-key zmdi-hc-fw" />
                  <span className="nav-text">
                    <IntlMessages id="Credentials.NaveLink.Name" />
                  </span>
                </NavLink>
              </li>{" "}
              <li className="menu no-arrow">
                <NavLink className="prepend-icon" to="/app/Setting/home">
                  <i class="zmdi zmdi-settings zmdi-hc-fw"></i>
                  <span className="nav-text">
                    <IntlMessages id="Setting.NaveLink.Name" />
                  </span>
                </NavLink>
              </li>

            </ul>
          </>}
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
