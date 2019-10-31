import React from 'react';
import TextField from '@material-ui/core/TextField';
class DetailsContent extends React.Component{

render(){
    return(
        <div>
            <div className="row">
<div className="col-md-6">
  <div className="form-group">
    <TextField
      id="name"
      type="text"
      label="Name"
      margin="normal"
      fullWidth
    />
  </div>
</div>
<div className="col-md-6">
  <div className="form-group">
    <TextField
      id="description"
      type="text"
      label="Description"
      margin="normal"
      fullWidth
    />
  </div>
</div>
<div className="col-md-6">
  <div className="form-group">
    <TextField
      id="organization"
      type="text"
      label="Organization"
      margin="normal"
      fullWidth
    />
  </div>
</div>
</div>
            </div>
    );
}
}
export default DetailsContent;