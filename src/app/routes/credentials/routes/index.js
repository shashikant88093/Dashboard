import React from "react";
import { Link } from "react-router-dom";
import CredentialsTable from "./credentialsTable/CredentialsList";
import IntlMessages from "util/IntlMessages";
import IconButton from "@material-ui/core/IconButton";
class CredentialsHomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="row mb-md-3">
      
          <div className="col-10 col-md-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">
                  <IntlMessages id="Credentials.HomePageTable.Header" />
                </h3>
                <div className="ml-auto">
                  <IconButton className="logout-btn">
                    <Link
                      className="jr-list-link"
                      to="/app/credentials/newcredential?data=New Credential"
                      title="Add Credentials"
                    >
                      <i className="zmdi zmdi-collection-plus zmdi-hc-fw" />
                    </Link>
                  </IconButton>
                </div>
              </div>

              <CredentialsTable />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default CredentialsHomePage;
