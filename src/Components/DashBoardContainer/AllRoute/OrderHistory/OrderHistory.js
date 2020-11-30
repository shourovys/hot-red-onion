import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriviesOrders } from '../../../../Redux/Action/OrderAction';
import DataTable from '../../DataTable/DataTable';

const OrderHistory = () => {
  const dispatch = useDispatch()
  const userEmail = useSelector(state => state.userInfo.currentUserInfo.email)
  console.log("🚀 ~ file: OrderHistory.js ~ line 9 ~ OrderHistory ~ userEmail", userEmail)
  const priviesOrders = useSelector(state => state.ordersData.priviesOrders)

  useEffect(() => {
    dispatch(fetchPriviesOrders(JSON.parse(localStorage.getItem('currentUser')).email))
  }, [dispatch,userEmail])

  return (
    <div>
      <DataTable controller={false} orderData={priviesOrders}/>
    </div>
  );
};

export default OrderHistory;