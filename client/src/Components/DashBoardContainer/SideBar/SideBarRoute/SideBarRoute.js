import React from 'react';
import { Switch } from 'react-router-dom';
import { AdminRoute, PrivateRoute } from '../../../Authentication/PrivateRoute';
import UserInfo from '../../../Authentication/UserInfo';
import SkeletonFoodItem from '../../../Skeleton/SkeletonFoodItem/SkeletonFoodItem';
import AddAdmin from '../../AllRoute/AddAdmin/AddAdmin';
import AddFood from '../../AllRoute/AddFood/AddFood';
import AdminOrder from '../../AllRoute/AdminOrder/AdminOrder';
import MyOrder from '../../AllRoute/MyOrder/MyOrder';
import OrderHistory from '../../AllRoute/OrderHistory/OrderHistory';
import PriviesOrders from '../../AllRoute/PriviesOrders/PriviesOrders';
import Profile from '../../AllRoute/Profile/Profile';


const SideBarRoute = () => {

    return (
        <Switch>
            <PrivateRoute path='/dashboard/profile'>
                <Profile/>
            </PrivateRoute>
            <PrivateRoute path='/dashboard/myOrder'>
                <MyOrder/>
            </PrivateRoute>
            <PrivateRoute path='/dashboard/order/history'>
                <OrderHistory />
            </PrivateRoute>
            <PrivateRoute path='/dashboard/logout'>
                <UserInfo showBtn={true}/>
            </PrivateRoute>
            <AdminRoute path='/dashboard/admin/orders'>
                 <AdminOrder/>
            </AdminRoute>
            <AdminRoute path='/dashboard/admin/privies/order'>
                 <PriviesOrders/>
            </AdminRoute>
            <AdminRoute path='/dashboard/add/admin'>
               <AddAdmin/>
            </AdminRoute>
            <AdminRoute path='/dashboard/add/food'>
                <AddFood/>
            </AdminRoute>
            <AdminRoute path='/dashboard/remove/food'>
                <SkeletonFoodItem/>
            </AdminRoute>
            
        </Switch> 
    );
};



export default SideBarRoute;