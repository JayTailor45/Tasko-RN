import React,{Component} from 'react'
import { createStackNavigator,createSwitchNavigator , createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

const AuthStack = createStackNavigator({
  Login,
  Register
},{headerMode: 'none'})

const AppStack = createStackNavigator({
  Home
})

const Root = createSwitchNavigator({
  SplashScreen,
  AppStack,
  AuthStack
})

export default createAppContainer(Root);