import React from 'react';
import HostsCards from './hosts'
import CardBox from 'components/CardBox';
import IntlMessages from 'util/IntlMessages';

const HostCards = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row mb-md-3">
        <div className="col-lg-12 col-12">
        <CardBox   heading={<IntlMessages id="Inventory.Tabs.HostHeaderName"/>}>
          <HostsCards/>
        </CardBox>
        </div>
      </div>

    </div>
  );
};
export default HostCards;