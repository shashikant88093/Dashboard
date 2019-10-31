import React, {Component} from 'react';
import OrderTableCell from './OrderTableCell';


let counter = 0;

function createData(orderId, name, image, orderDate, deliveryDate, status) {
  counter += 1;
  return {id: counter, orderId, name, image, orderDate, deliveryDate, status};
}

class OrderTable extends Component {
  state = {
    data: [
      createData('newinventory', 'Alex Dolgove', 'https://via.placeholder.com/128x128', '25 Oct', '25 Oct', 'Completed'),
      createData('cluster', 'Domnic Brown', 'https://via.placeholder.com/208x208', '28 Oct', '1 Nov', 'On Hold'),
      createData('ALL_IP', 'Garry Sobars', 'https://via.placeholder.com/150x150', '5 Nov', '10 Nov', 'Delayed'),
      createData('Dynamic Inventory', 'Stella Johnson', 'https://via.placeholder.com/120x120', '23 Nov', '26 Nov', 'Cancelled'),
    ],
  };

  render() {
    const {data} = this.state;
    return (
      <div className="table-responsive-material">
        <table className="default-table table-unbordered table table-sm table-hover">
          <thead className="th-border-b">
          <tr>
            <th>Name</th>
            <th>Discription</th>
            <th>Organization</th>
            <th>Action</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <OrderTableCell key={data.id} data={data}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderTable;