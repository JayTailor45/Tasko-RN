import React,{Component} from 'react'
import { createStackNavigator,createSwitchNavigator , createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home'
import Login from '../screens/Login'

const AuthStack = createStackNavigator({
  Login
})

const AppStack = createStackNavigator({
  Home
})

const Root = createSwitchNavigator({
  SplashScreen,
  AppStack,
  AuthStack
})

export default createAppContainer(Root);