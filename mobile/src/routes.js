import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Profile from './pages/Profile';

export default function Routes() {

    const Drawer = createDrawerNavigator();
    return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Início" component={Home} />
                    <Drawer.Screen name="Perfil" component={Profile} />
                </Drawer.Navigator>
            </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header:{
      padding: 10
    }
});