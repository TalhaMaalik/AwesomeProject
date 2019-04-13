/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator , createAppContainer , createDrawerNavigator } from 'react-navigation';
import React, {Component} from 'react';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Dashboard from './app/components/Dashboard';

export {
  App
}
class App extends Component {
  render() {
    return (
      <AppStack />
    )
  }
}

const AppStack = createStackNavigator({
    login: Login,  
    dashboard: Dashboard,
    register: Register
}, 
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff2e44',
    },
  }, 
});  

const appContainer =  createAppContainer(AppStack)
export default appContainer

