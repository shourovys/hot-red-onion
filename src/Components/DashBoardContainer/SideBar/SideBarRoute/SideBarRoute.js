import React from 'react';
import {Switch,Route} from 'react-router-dom'
import UserInfo from '../../../Authentication/UserInfo';
import AddAdmin from '../../AllRoute/AddAdmin/AddAdmin';
import AddFood from '../../AllRoute/AddFood/AddFood';
import MyOrder from '../../AllRoute/MyOrder/MyOrder';
import OrderHistory from '../../AllRoute/OrderHistory/OrderHistory';
import Profile from '../../AllRoute/Profile/Profile';


const SideBarRoute = () => {
    return (
        <Switch>
            <Route path='/dashboard/profile'>
                <Profile/>
            </Route>
            <Route path='/dashboard/myOrder'>
                <MyOrder/>
            </Route>
            <Route path='/dashboard/order/history'>
                <OrderHistory/>
            </Route>
            <Route path='/dashboard/logout'>
                <UserInfo/>
            </Route>
            <Route path='/dashboard/admin/orders'>
                 <OrderHistory/>
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

export default SideBarRoute;