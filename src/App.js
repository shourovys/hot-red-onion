import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/food/:foodId'>
          <FoodItem />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;