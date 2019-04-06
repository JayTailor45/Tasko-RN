import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'

class Home extends Component {
  render(): React.ReactNode {
    return(
        <View>
          <Text>
            Home called
          </Text>
        </View>
    )
  }
}

export default Home