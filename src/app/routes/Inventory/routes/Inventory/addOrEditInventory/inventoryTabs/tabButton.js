import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
class addbutton extends React.Component {

render(){
    return(
        <div>
              <Button variant="contained" color="primary" style={{margin: "18px"}}>
              <Link to='/app/Inventory/home' style={{color:"#fff", textDecoration:"none"}}>
                      <IntlMessages id="Inventory.SaveInventory"/>
                      </Link>
                    </Button>
                    <Button variant="contained" color="primary"> 
                    <Link to='/app/Inventory/home' style={{color:"#fff", textDecoration:"none"}}> 
                      <IntlMessages id="Inventory.CancelInventory"/>
                      </Link>
                    </Button>
            </div>
    )
}
}
export default addbutton;