import React, { useEffect, useState } from 'react';
import DataTable from '../../DataTable/DataTable';

const AdminOrder = () => {
    const [allOrders, setAllOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/order/all')
        .then(res=>res.json())
        .then(data=>{
            setAllOrder(data)
        })
      }, [])
    return (
        <div>
            <DataTable controller={true} orderData={allOrders}/>
        </div>
    );
};

export default AdminOrder;