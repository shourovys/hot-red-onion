import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Authentication from './Components/Authentication/Authentication';
import AuthContext from './Components/Authentication/AuthFunctions';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
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
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </AuthContext>
    </>
  );
};

export default App;