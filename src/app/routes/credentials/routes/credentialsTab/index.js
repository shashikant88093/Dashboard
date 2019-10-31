import React from "react";
import CredentialDetails from "./CredentialInput";
import ContainerHeader from "../../../../../components/ContainerHeader/index";

class CredentialsTab extends React.Component {
  render() {
    return (
      <div>
        <div className="app-wrapper">
          <ContainerHeader title="Credentials" match={this.props.match} />
          <div className="col-lg-12 col-md-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                
              </div>
              <CredentialDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CredentialsTab;
