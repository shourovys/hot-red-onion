import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserInfo from '../../../Authentication/UserInfo';
import AddAdmin from '../../AllRoute/AddAdmin/AddAdmin';
import AddFood from '../../AllRoute/AddFood/AddFood';
import AdminOrder from '../../AllRoute/AdminOrder/AdminOrder';
import MyOrder from '../../AllRoute/MyOrder/MyOrder';
import OrderHistory from '../../AllRoute/OrderHistory/OrderHistory';
import Profile from '../../AllRoute/Profile/Profile';


const SideBarRoute = ({currentUserInfo}) => {
    const [orderData, setOrderData] = useState([])
    const [currentOrder, setCurrentOrder] = useState([])

    const handelCurrentOrder=()=>{
        setCurrentOrder(orderData.filter(order=>order.orderActiveStep<5))
      }

    useEffect(() => {
        const userToken=currentUserInfo.token
        fetch('http://localhost:4000/order/all',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({userToken})
        })
        .then(res=>res.json())
        .then(data=>{
            setOrderData(data)
            handelCurrentOrder()
        })
      }, [])

     

    return (
        <Switch>
            <Route exact path='/dashboard'>
                 <MyOrder currentOrder={currentOrder}/>
            </Route>
            <Route path='/dashboard/profile'>
                <Profile/>
            </Route>
            <Route path='/dashboard/myOrder'>
                <MyOrder currentOrder={currentOrder}/>
            </Route>
            <Route path='/dashboard/order/history'>
                <OrderHistory orderData={orderData}/>
            </Route>
            <Route path='/dashboard/logout'>
                <UserInfo showBtn={true}/>
            </Route>
            <Route path='/dashboard/admin/orders'>
                 <AdminOrder/>
            </Route>
            <Route path='/dashboard/add/admin'>
               <AddAdmin/>
            </Route>
            <Route path='/dashboard/add/food'>
                <AddFood/>
            </Route>
            <Route path='/dashboard/remove/food'>
                <h2>profile</h2>
            </Route>
            
        </Switch> 
    );
};

const mapStateToProps=state=>{
    return {
        currentUserInfo:state.userInfo.currentUserInfo
    }
}
const mapDispatchToProps={}

export default connect(mapStateToProps,mapDispatchToProps)(SideBarRoute);