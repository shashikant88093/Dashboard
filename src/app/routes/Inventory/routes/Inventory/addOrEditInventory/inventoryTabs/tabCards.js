import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Card, CardBody } from 'reactstrap';
import CardContent from './cardDetails';
import CardHosts from './cardHosts'
import CardGroups from './cardGroups'
import InventoryButton from './tabButton';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class TabCards extends Component {
  state = {
    value: 0,
  };

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
          <AppBar position="static" 
          color="default"
          style={{zIndex: 0}}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              scrollButtons="on"
            >
              <Tab className="tab" label="Details" />
              <Tab className="tab" label="Hosts" />
              <Tab className="tab" label="Groups" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                    <CardContent />
                    <InventoryButton />
                </CardBody>
              </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                  {/* <h3 className="card-title">Card Title</h3>
                  <CardSubtitle>Sub-heading text</CardSubtitle> */}
                  <CardHosts/>
                </CardBody>
              </div>
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <div>
                <CardBody>
                <CardGroups/>
                </CardBody>
              </div>
            </TabContainer>
          </SwipeableViews>
        </Card>
      </div>


    );
  }
}

TabCards.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(null, { withTheme: true })(TabCards);