import React,{Component} from 'react'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

const AuthStack = createStackNavigator({
  Login,
  Register
},{headerMode: 'none'})

const DrawerStack = createDrawerNavigator({
  Home
})

const AppStack = createStackNavigator({
  DrawerStack
})


const Root = createSwitchNavigator({
  SplashScreen,
  AppStack,
  AuthStack
})

export default createAppContainer(Root);