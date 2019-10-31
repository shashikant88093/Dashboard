import React from "react";
//import Axios from 'axios';
//import Cookies from 'js-cookie';

import InfoCard from "components/InfoCard";
import "./Dashboard.css";

class Dashboard extends React.Component {
  state = {
    hosts: {
      icon: "globe-alt",
      title: 0,
      subTitle: "HOSTS",
      color: "#4e599a"
    },

    inventory: {
      icon: "map",
      title: 0,
      subTitle: "INVENTERY",
      color: "#f44336"
    },

    projects: {
      icon: "collection-bookmark",
      title: 0,
      subTitle: "PLAYBOOK",
      color: "#246d06"
    }
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-2 animate">
            <InfoCard data={this.state.hosts} />
          </div>
          <div className="col-2 animate">
            <InfoCard data={this.state.inventory} />
          </div>
          <div className="col-2 animate">
            <InfoCard data={this.state.projects} />
          </div>
          <div className="col-2 animate">
            <InfoCard data={this.state.hosts} />
          </div>
          <div className="col-2 animate">
            <InfoCard data={this.state.inventory} />
          </div>
          <div className="col-2 animate">
            <InfoCard data={this.state.projects} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
