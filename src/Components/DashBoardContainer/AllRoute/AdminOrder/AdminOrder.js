import React from 'react';
import DataTable from '../../DataTable/DataTable';

const AdminOrder = () => {
    //take all order for admin
    return (
        <div>
            <DataTable controller={true}/>
        </div>
    );
};

export default AdminOrder;