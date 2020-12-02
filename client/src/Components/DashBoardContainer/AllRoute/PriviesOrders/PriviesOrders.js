import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPriviesOrders } from '../../../../Redux/Action/OrderAction';
import DataTable from '../../DataTable/DataTable';

const PriviesOrders = () => {
    const dispatch = useDispatch()
    const userEmail = useSelector(state => state.userInfo.currentUserInfo.email)
    const allPriviesOrders = useSelector(state => state.ordersData.allPriviesOrders)
    const saveSllPriviesOrders = useMemo(() => allPriviesOrders, [allPriviesOrders])
  
    useEffect(() => {
        dispatch(fetchAllPriviesOrders(userEmail))
    }, [dispatch,userEmail])
    return (
        <div>
            <DataTable controller={false} orderData={saveSllPriviesOrders}/>
        </div>
    );
};

export default PriviesOrders;