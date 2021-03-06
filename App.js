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
import Bill from './app/components/Bill'
import Sidebar from './app/components/Sidebar'
import MyOrders from './app/components/MyOrders'
import RecentOrders from './app/components/RecentOrders'

export {
  App
}
class App extends Component {

  render() {
    return (
      <Appstack/>
    );
  }
}

const StackNavigator = createStackNavigator({
    login: Login,  
    register: Register
    
}, 
{
  defaultNavigationOptions: {
    header: null
  }, 
}); 

const Stackwithdrawer = createStackNavigator({
  dashboard: Dashboard,
  menu: Menu,
  Bill: Bill,
  myorders : MyOrders,
  recentorders: RecentOrders
}, 
{
defaultNavigationOptions: {
  header: null
}, 
});

const DrawerNavigator = createDrawerNavigator(
  {
    dashboard: Stackwithdrawer
  } , {
    contentComponent: Sidebar
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    stack: StackNavigator,
    drawer: DrawerNavigator
    
  },
  {
    initialRouteName: 'Splash',
  }
); 

export default appContainer =  createAppContainer(SwitchNavigator)


