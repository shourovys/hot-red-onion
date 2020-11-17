import React from 'react';
import DataTable from '../../DataTable/DataTable';

const OrderHistory = ({orderData}) => {
  return (
    <div>
      <DataTable controller={false} orderData={orderData}/>
    </div>
  );
};

export default OrderHistory;