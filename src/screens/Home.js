import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'

class Home extends Component {
  render(): React.ReactNode {
    return(
        <View style={styles.container}>
          <Text>
            Home called
          </Text>
        </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});