import React from "react";
import TabEffect from "./TabEffect/TabEffect";

// import IntlMessages from "util/IntlMessages";
class Inventory extends React.Component {
  render() {
    return (
      <>
      

        <div className="row mb-md-3">
          
          <div className="col-lg-12">
            <div className="jr-card">
              <div className="jr-card-header d-flex align-items-center">
                <div className="col-lg-12">
                  <TabEffect />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </>
    );
  }
}

export default Inventory;
