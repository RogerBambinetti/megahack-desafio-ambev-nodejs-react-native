import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Scanner from './pages/Scanner';
import Map from './pages/Map';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Profile,
        Scanner,
        Map
    })
    
);

export default Routes;