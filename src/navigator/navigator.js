import React,{Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home'
import Login from '../screens/Login'

const AppNavigator = createStackNavigator({
  SplashScreen,
  Home,
  Login
},{
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);