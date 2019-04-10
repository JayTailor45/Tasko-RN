import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {APP_NAME} from '../constants/strings'
import {primary, primary_light} from '../constants/colors'
import {Input, Button} from 'react-native-elements'

class Login extends Component {
  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.tasko}>
            Tasko
          </Text>
          <View style={styles.inputView}>
            <Input
                placeholder='Email'
                errorStyle={{ color: 'red' }}
                errorMessage='Enter valid email'
            />
          </View>
          <View style={styles.inputView}>
            <Input
                placeholder='Password'
                secureTextEntry={true}
            />
          </View>
          <View style={styles.btns}>
            <Button
                style={styles.btn}
                title="Register"
            />
            <Button
                style={styles.btn}
                title="Already have an account?"
            />
          </View>
        </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary
  },
  inputView: {
    flexDirection: 'row',
    marginStart: 8,
    marginEnd: 8,
    marginTop: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  btns: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly'
    width: '95%'
  },
  btn: {
    marginTop: 16
  },
  tasko: {
    fontFamily: 'noteworthy',
    fontSize: 50,
    paddingBottom: 55,
    color: '#fff'
  },
});