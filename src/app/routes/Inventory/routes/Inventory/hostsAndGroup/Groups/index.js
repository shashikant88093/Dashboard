import React from 'react';
import GroupsCards from './groups'
import CardBox from 'components/CardBox';
import IntlMessages from 'util/IntlMessages';

const GroupCards = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row mb-md-3">
        <div className="col-lg-12 col-12">
        <CardBox   heading={<IntlMessages id="Inventory.Tabs.GroupHeaderName"/>}>
          <GroupsCards/>
        </CardBox>
        </div>
      </div>

    </div>
  );
};
export default GroupCards;