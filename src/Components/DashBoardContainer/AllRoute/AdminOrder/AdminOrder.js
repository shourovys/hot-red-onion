import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../../../Redux/Action/OrderAction';
import DataTable from '../../DataTable/DataTable';

const AdminOrder = () => {
    const dispatch = useDispatch()
    const userEmail = useSelector(state => state.userInfo.currentUserInfo.email)
    const adminOrders = useSelector(state => state.ordersData.adminOrders)
    const saveAdminOrders=useMemo(() => adminOrders, [adminOrders])
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [dispatch,userEmail])
   
    return (
        <div>
            <DataTable controller={true} orderData={saveAdminOrders}/>
        </div>
    );
};

export default AdminOrder;