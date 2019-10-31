import React, { Component } from "react";
import UserManagementOrg from "./UserManagementOrg/UserManagementOrg";
import UserManagementList from "./UserManagementList/UserManagementList"

export class UserManagement extends Component {
  render() {
    return (
      <>
        <div>
          <UserManagementOrg />
        </div>{" "}
        <div>
          <UserManagementList />
        </div>
      </>
    );
  }
}

export default UserManagement;
