import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';
import Authentication from './Components/Authentication/Authentication';
import AuthContext, { PrivateRoute } from './Components/Authentication/AuthFunctions';
import Order from './Components/OrderContainer/Order/Order';

const App = () => {
  return (
    <>
      <AuthContext>
        <Navbar />
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
          <PrivateRoute path="order">
            <Order />

          </PrivateRoute>
        </Switch>
      </AuthContext>
    </>
  );
};

export default App;