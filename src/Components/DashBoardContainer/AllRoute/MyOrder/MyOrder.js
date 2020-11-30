import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { warning } from '../../../../Redux/Action/notificationsAction';
import { fetchCurrentOrders } from '../../../../Redux/Action/OrderAction';
import OrderStepper from '../../OrderStepper/OrderStepper';

const MyOrder = () => {
  const dispatch = useDispatch()
  const userEmail = useSelector(state => state.userInfo.currentUserInfo.email)
  const currentOrders = useSelector(state => state.ordersData.currentOrders)
  const saveCurrentOrders = useMemo(() => currentOrders, [currentOrders])


  useEffect(() => {
    dispatch(fetchCurrentOrders(userEmail))
    console.log("🚀 ~ file: MyOrder.js ~ line 15 ~ useEffect ~ dispatch", 'dispatch')
  }, [dispatch,userEmail])
  
  return (
    <div>
      {
        saveCurrentOrders.length>0 &&
        saveCurrentOrders.map(order=><OrderStepper key={order._id}order={order} showId={true}/>)  
      }
      {
        !saveCurrentOrders.length>0 &&
        <h3 style={{textAlign:'center',margin:'2rem 0rem'}}>No current order available</h3>
      }
      <button onClick={()=>{dispatch(warning('hello'))}}>kkkk</button>
     
    </div>
  );
};

export default MyOrder;