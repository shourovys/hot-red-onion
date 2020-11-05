import React from 'react';
import './FoodItemMenu.css'
import { NavLink, Switch, Route } from 'react-router-dom'
import FoodItemContainer from '../FoodItemContainer/FoodItemContainer';


const FoodItemMenu = () => {
    return (
        <div className='FoodItemMenu'>
            <div className="foodMenuLink">
                <NavLink
                    activeClassName="selected"
                    className='menuItem'
                    to='/menu/breakfast'
                >
                    Breakfast
                </NavLink>

                <NavLink
                    activeClassName="selected"
                    className='menuItem'
                    to='/menu/lunch'
                >
                    Lunch
                </NavLink>

                <NavLink
                    activeClassName="selected"
                    className='menuItem'
                    to='/menu/dinner'
                >
                    Dinner
                </NavLink>
            </div>

            <Switch>
                <Route path='/menu/:category'>
                    <FoodItemContainer />
                </Route>
            </Switch>

        </div>
    );
};

export default FoodItemMenu;