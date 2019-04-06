import React,{Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'

const AppNavigator = createStackNavigator({
  Hello: SplashScreen,
},{
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);