import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Scanner from './pages/Scanner';
import Map from './pages/Map';
import Login from './pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        Profile,
        Scanner,
        Map
    })
    
);

export default Routes;