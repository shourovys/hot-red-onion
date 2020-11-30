import React, { useEffect } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Authentication from './Components/Authentication/Authentication';
import AuthContext from './Components/Authentication/AuthFunctions';
import { PrivateRoute } from './Components/Authentication/PrivateRoute';
import DashBoard from './Components/DashBoardContainer/DashBoard/DashBoard';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
import Order from './Components/OrderContainer/Order/Order';
import { fetchAllProduct } from './Redux/Action/FoodsDataAction';
import { addCurrentUser } from './Redux/Action/UserInfoAction';



const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllProduct())
  dispatch(addCurrentUser(JSON.parse(localStorage.getItem('currentUser'))))
}, [dispatch])



// const saveCurrentUser = useMemo(() => JSON.parse(localStorage.getItem('currentUser')), [JSON.parse(localStorage.getItem('currentUser')).email])

// useEffect(() => {
//   dispatch(addCurrentUser(saveCurrentUser))
//   console.log('app dispatch effect call');

// }, [saveCurrentUser])

  return (
    <>
      <AuthContext>
        <Navbar />
        {/* <DashBoard /> */}
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Authentication />
          </Route>
          <Route path='/food/:foodId'>
            <FoodItem />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
        </Switch>
      </AuthContext>
      <NotificationContainer/>
    </>
  );
};



export default App;