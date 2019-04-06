import React,{Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home'


const AppNavigator = createStackNavigator({
  SplashScreen,
  Home
},{
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);