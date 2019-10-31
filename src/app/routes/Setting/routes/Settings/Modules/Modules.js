import React, { Component } from "react";
import TagButton from "../../../../../../components/Extra/TagButton/Tag";
import ChipText from "../../../../../../components/Extra/ChipText/ChipText";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";

export class Modules extends Component {
  render() {
    return (
      <>
        <TagButton name="Adhoc Modules" />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <ChipText />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">

          <Button
            variant="contained"
            color="primary"
            style={{ margin: "18px", backgroundColor: "#4CAF50" }}
            onClick={this.handleTest}
          >
            <IntlMessages id="Setting.SaveSetting" />
          </Button>

          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#F44336" }}
            onClick={this.handleTestCancel}
          >
            <IntlMessages id="Setting.CancelSetting" />
          </Button>
          </div>
          <div className="col-md-2"></div>

        </div>
      </>
    );
  }
}

export default Modules;
