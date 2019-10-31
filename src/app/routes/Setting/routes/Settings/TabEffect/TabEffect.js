import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { Card, CardBody } from "reactstrap";
import UserManagement from "../UserManagement/index";
import Notification from "../Notification/Notification";
import Modules from "../Modules/Modules";
import Projects from "../Projects/Projects";
import { withRouter } from "react-router";

function TabContainer({ children, dir }) {
  return <div dir={dir}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class TabEffect extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    if (this.props.match.url.includes("home")) {
      this.handleChangeIndex(0);
    } else if (this.props.match.url.includes("notification")) {
      this.handleChangeIndex(1);
    } else if (this.props.match.url.includes("modules")) {
      this.handleChangeIndex(2);
    } else {
      this.handleChangeIndex(3);
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme } = this.props;
    return (
      <div className="w-100">
        <Card className="shadow border-0 ">
          <AppBar position="static" color="default" style={{ zIndex: 0 }}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              scrollButtons="on"
            >
              <Tab
                className="tab"
                label="User Management"
                onClick={() => this.props.history.push("/app/Setting/home")}
              />
              <Tab
                className="tab"
                label="Notification"
                onClick={() =>
                  this.props.history.push("/app/Setting/notification")
                }
              />
              <Tab
                className="tab"
                label="Modules"
                onClick={() => this.props.history.push("/app/Setting/modules")}
              />
              <Tab
                className="tab"
                label="Projects"
                onClick={() => this.props.history.push("/app/Setting/projects")}
              />
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
                  <UserManagement />
                </CardBody>
              </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                  <Notification />
                </CardBody>
              </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                  <Modules />
                </CardBody>
              </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                  <Projects />
                </CardBody>
              </div>
            </TabContainer>
          </SwipeableViews>
        </Card>
      </div>
    );
  }
}

TabEffect.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(null, { withTheme: true })(withRouter(TabEffect));
