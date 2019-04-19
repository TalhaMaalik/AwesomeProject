/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator , createAppContainer , createDrawerNavigator ,createSwitchNavigator } from 'react-navigation';
import React, {Component} from 'react';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Dashboard from './app/components/Dashboard';
import SplashScreen from './app/components/SplashScreen';
import Menu from './app/components/Menu'


const AppStack = createStackNavigator({

    
    login: Login,  
    register: Register
}, 
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff2e44',
    },
  }, 
});  

const Appstack2 = createSwitchNavigator(
  {
    Splash: SplashScreen,
    dashboard: Dashboard,
    App: AppStack,
    Menu: Menu
  },
  {
    initialRouteName: 'dashboard',
  }
);

export default appContainer =  createAppContainer(Appstack2)


