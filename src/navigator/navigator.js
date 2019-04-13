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
import AddTask from '../screens/AddTask'

const AuthStack = createStackNavigator({
  Login,
  Register
},{headerMode: 'none'})

const HomeStack = createStackNavigator({
  Home,
  AddTask
})

const DrawerStack = createDrawerNavigator({
  HomeStack
},{headerMode: 'none'})

const AppStack = createStackNavigator({
  DrawerStack
},{headerMode: 'none'})


const Root = createSwitchNavigator({
  SplashScreen,
  AppStack,
  AuthStack
})

export default createAppContainer(Root);