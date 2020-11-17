import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Authentication from './Components/Authentication/Authentication';
import AuthContext from './Components/Authentication/AuthFunctions';
import DashBoard from './Components/DashBoardContainer/DashBoard/DashBoard';
import FoodItem from './Components/HomeContainer/FoodItem/FoodItem';
import Home from './Components/HomeContainer/Home/Home';
import Navbar from './Components/HomeContainer/Navbar/Navbar';
import Order from './Components/OrderContainer/Order/Order';
import { setAllFoodItemsData } from './Redux/Action/FoodsDataAction';


const App = ({setAllFoodItemsData}) => {
  const [foodData, setFoodData] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/foodItem/all')
    .then(res=>res.json())
    .then(data=>setFoodData(data))
    .catch(err=>console.log(err))
  }, [])
  useEffect(() => {
    setAllFoodItemsData(foodData)
  }, [foodData])

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
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </AuthContext>
    </>
  );
};

const mapStateToProps=state=>{
  return {

  }
}
const mapDispatchToProps={setAllFoodItemsData}

export default connect(mapStateToProps,mapDispatchToProps)(App);