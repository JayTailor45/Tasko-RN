import React,{Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Hello from '../screens/Hello'

const AppNavigator = createStackNavigator({
  Hello,
},{
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);