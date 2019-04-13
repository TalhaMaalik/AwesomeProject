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

Appstack2 = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  }
);

export default appContainer =  createAppContainer(Appstack2)


