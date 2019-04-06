import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'

class Hello extends Component {

  componentDidMount(): void {
    setTimeout(()=>{

    },250);
  }

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.tasko}>{APP_NAME}</Text>
          <ActivityIndicator size="large" color={primary_light} />
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tasko: {
    fontFamily: 'noteworthy',
    fontSize: 50,
    paddingBottom: 35,
    color: primary
  },
  loding: {
  }
});

export default Hello;

