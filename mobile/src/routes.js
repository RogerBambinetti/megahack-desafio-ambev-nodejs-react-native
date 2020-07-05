import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Scanner from './pages/Scanner';
import Map from './pages/Map';
import Login from './pages/Login';
import Trophies from './pages/Trophies';
import Discounts from './pages/Discounts';
import Challenges from './pages/Challenges';
import Establishment from './pages/Establishment';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        Profile,
        Scanner,
        Map,
        Trophies,
        Discounts,
        Establishment,
        Challenges
    })
    
);

export default Routes;