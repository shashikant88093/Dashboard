import React, { Component } from "react";
import TagButton from "../../../../../../components/Extra/TagButton/Tag";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import TextField from "@material-ui/core/TextField";
import "./Projects.css";
import CachedIcon from "@material-ui/icons/Cached";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    padding: "0 30px"
  }
});
export class Projects extends Component {
  state={
    refresh:false
  }
  onRefreshClick = ()=>{
    this.setState({refresh:true})
  }
  render() {
    return (
      <>
        <TagButton name="Playbook" />
        <br />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <TextField
              id="url"
              label="URL"
              value="<github repo/>"
              margin="normal"
              fullWidth
            />
          </div>
          <div className="col-md-1">
            {" "}
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "18px", backgroundColor: "#4CAF50" }}
            >
              <IntlMessages id="Setting.SaveSetting" />
            </Button>
          </div>
       
          <div className="col-md-1 refresh">
            <Button onClick={this.onRefreshClick} className={useStyles}>
              {" "}
              <CachedIcon />
            </Button>
          </div>

          <div className="col-md-3">
            
          </div>
        </div>
        <br/>
        <br/>
        {this.state.refresh ? <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <h4>Revision :    XFVFVY54555665</h4>
          </div>

    </div>  : null} 
      </>
    );
  }
}

export default Projects;

